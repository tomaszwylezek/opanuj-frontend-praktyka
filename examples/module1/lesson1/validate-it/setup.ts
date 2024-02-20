import {
  clearButton,
  validateButton,
  validateInput,
  validationResult,
} from './elements';

import { onClearButtonClick, onValidateButtonClick } from './events';
import { validators } from './validators';

export function setup() {
  if (!validateButton || !clearButton || !validateInput || !validationResult) {
    throw new Error('Element not found');
  }

  validateButton.addEventListener('click', () =>
    onValidateButtonClick(validators)
  );
  clearButton.addEventListener('click', onClearButtonClick);
}
