
import React, { useState } from 'react';
import "./design.css";

function MyCalculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e, input) => {
    const value = e.target.value;
    if (input === 'input1') {
      setInput1(value);
    } else {
      setInput2(value);
    }
  };

  const validateInputs = () => {
    if (!input1 || !input2 || isNaN(Number(input1)) || isNaN(Number(input2))) {
      setErrorMessage('Invalid input. Please enter valid numbers.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const performOperation = (operation) => {
    if (validateInputs()) {
      switch (operation) {
        case 'add':
          setResult(parseFloat(input1) + parseFloat(input2));
          break;
        case 'subtract':
          setResult(parseFloat(input1) - parseFloat(input2));
          break;
        case 'multiply':
          setResult(parseFloat(input1) * parseFloat(input2));
          break;
        case 'divide':
          if (parseFloat(input2) !== 0) {
            setResult(parseFloat(input1) / parseFloat(input2));
          } else {
            setErrorMessage('Division by zero is not allowed.');
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="calculator">
      <input id="box"
        type="text"
        placeholder="Enter number 1"
        value={input1}
        onChange={(e) => handleInputChange(e, 'input1')}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={input2}
        onChange={(e) => handleInputChange(e, 'input2')}
      />
      <div className="buttons">
        <button onClick={() => performOperation('add')}>+</button>
        <button onClick={() => performOperation('subtract')}>-</button>
        <button onClick={() => performOperation('multiply')}>*</button>
        <button onClick={() => performOperation('divide')}>/</button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {result !== '' && <div className="success">Result: {result}</div>}
    </div>
  );
}

export default MyCalculator;

