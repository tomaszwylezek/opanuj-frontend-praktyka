import React, { useMemo, useState } from 'react';
import { add, substract, multiply, divide } from './functions';
import { Button } from './Button';

type CalculationFn = (a: number, b: number) => number;

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const executeCalculation = (calculationFn: CalculationFn) => {
    setResult(calculationFn(firstNumber, secondNumber));
  };

  const incorrectInput = useMemo(() => {
    // some validation in case of incorrect input, below is just an example
    return Number.isNaN(firstNumber) || Number.isNaN(secondNumber);
  }, [firstNumber, secondNumber]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button
          disabled={incorrectInput}
          onClick={() => executeCalculation(add)}
        >
          +
        </Button>
        <Button
          disabled={incorrectInput}
          onClick={() => executeCalculation(substract)}
        >
          -
        </Button>
        <Button
          disabled={incorrectInput}
          onClick={() => executeCalculation(multiply)}
        >
          *
        </Button>
        <Button
          disabled={incorrectInput}
          onClick={() => executeCalculation(divide)}
        >
          /
        </Button>
      </div>
      <div>Result: {result}</div>
      {incorrectInput && (
        <div className="text-red-500">Please enter a valid number</div>
      )}
    </div>
  );
};

export default App;
