import { validationResult } from './elements';
import { ValidationResult } from './types';

export function clearElement(htmlElement: HTMLElement | null) {
  if (!htmlElement) {
    return;
  }

  if (htmlElement instanceof HTMLInputElement) {
    htmlElement.value = '';
    return;
  }

  htmlElement.innerHTML = '';
}

export function setResult(
  result: ValidationResult,
  customElement: HTMLElement = validationResult
) {
  customElement.innerHTML = result;
}
