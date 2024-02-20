export type Validator = (value: number) => boolean;

export enum ValidationResult {
  VALID = 'Valid',
  INVALID = 'Invalid',
}
