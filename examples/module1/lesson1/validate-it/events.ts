import { validateInput, validationResult } from './elements';
import { clearElement, setResult } from './helpers';
import { ValidationResult, Validator } from './types';

export function onValidateButtonClick(validators: Validator[]) {
  const value = validateInput.value;

  if (!value) {
    setResult(ValidationResult.INVALID);
    return;
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    setResult(ValidationResult.INVALID);
    return;
  }

  if (validators.some((validator) => !validator(number))) {
    setResult(ValidationResult.INVALID);

    return;
  }

  setResult(ValidationResult.VALID);
}

export function onClearButtonClick() {
  clearElement(validateInput);
  clearElement(validationResult);
}
