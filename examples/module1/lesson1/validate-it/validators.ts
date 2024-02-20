import { Validator } from './types';

const biggerThan = (value: number, limit: number) => value > limit;
const smallerThan = (value: number, limit: number) => value < limit;
const divableBy = (value: number, divider: number) => value % divider === 0;

const biggerThanZero: Validator = (value) => biggerThan(value, 0);
const smallerThanHundred: Validator = (value) => smallerThan(value, 100);
const isEven: Validator = (value) => divableBy(value, 2);

export const validators = [biggerThanZero, smallerThanHundred, isEven];
