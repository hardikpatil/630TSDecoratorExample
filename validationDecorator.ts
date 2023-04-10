// Base Input class
class BaseInput {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  display(): string {
    return this.value;
  }
}

//Validation decorator classes
abstract class InputDecorator extends BaseInput {
  protected input: BaseInput;

  constructor(input: BaseInput) {
    super(input.value);
    this.input = input;
  }
}

class RequiredDecorator extends InputDecorator {
  validate(): boolean {
    return this.input.value.trim().length > 0;
  }
}

class EmailDecorator extends InputDecorator {
  validate(): boolean {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(this.input.value);
  }
}

// Instantiating a base input
const emailInput = new BaseInput("john.doe@example.com");

// Applying validation decorators
const requiredEmailInput = new RequiredDecorator(emailInput);
const emailValidatedInput = new EmailDecorator(requiredEmailInput);

// Validating the input
if (emailValidatedInput.validate()) {
  console.log("Email input is valid");
} else {
  console.log("Email input is invalid");
}
