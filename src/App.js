import React, { useState } from 'react'

const operand1DefaultValue = '';
const operand2DefaultValue = '';
const operationDefaultValue = '+';

function App() {
  const [ operand1, setOperand1 ] = useState(operand1DefaultValue)
  const [ operand2, setOperand2 ] = useState(operand2DefaultValue)
  const [ operation, setOperation ] = useState(operationDefaultValue)
  const [ operandoSelect, setOperandoSelect ] = useState(1)
  
  function getValueFormated(value) {
    let valueCopy = value.slice(0);
    console.log(valueCopy);
    if(valueCopy.length > 0) {
      if(valueCopy[0] === '.') {
        valueCopy = `0${valueCopy}`
      }
      if(valueCopy[valueCopy.length - 1] === '.') {
        valueCopy = `${valueCopy}0`
      }
      console.log(valueCopy);
      return valueCopy;
    } else {
      return ''
    } 
  }
  
  function formatResult(value) {
    let valueString = String(value);
    const partes = valueString.split('.')
    return `${partes[0]}${partes.length > 1 ? `.${partes[1].length > 3 ? partes[1].substring(0, 3) : partes[1]}` : ''}`
  }

  function getResult() {
    switch (operation) {
      case '+':
        return formatResult(Number(getValueFormated(operand1)) + Number(getValueFormated(operand2)));
      case '-':
        return formatResult(Number(getValueFormated(operand1)) - Number(getValueFormated(operand2)));
      case '*':
        return formatResult(Number(getValueFormated(operand1)) * Number(getValueFormated(operand2)));
      case '/':
        return formatResult(Number(getValueFormated(operand1)) / Number(getValueFormated(operand2)));
      default:
        return 0;
    }
  }

  function clearCalculator() {
    setOperand1(operand1DefaultValue);
    setOperand2(operand2DefaultValue);
    setOperation(operationDefaultValue);
  }

  function updateCalculator(value) {
    if(operandoSelect === 1) {
      setOperand1(`${operand1}${value}`);
    } else {
      setOperand2(`${operand2}${value}`);
    }
  }
  
  function insertPoint() {
    if(operandoSelect === 1) {
      if(!operand1.includes('.')) {
        setOperand1(`${operand1}.`);
      }
    } else {
      if(!operand2.includes('.')) {
        setOperand2(`${operand2}.`);
      }
    }
  }
  
  function removeDigit() {
    if(operandoSelect === 1) {
      if(operand1.length > 0) {
        setOperand1(operand1.slice(0, -1));
      }
    } else {
      if(operand2.length > 0) {
        setOperand2(operand2.slice(0, -1));
      }
    }
  }
  
  return (
    <div className="App">
      <section id="container-page">
      <h1>Meu mais novo filho, Calculator!</h1>
        <section id="container-calculator">
          <header>
            <div id="visor">
              {operandoSelect === 1 ? operand1 : operand2}
            </div>
          </header>
          <main>
            <div class="container-btn">
              <button id="btn-ac" class="btn btn-green" onClick={() => {
                clearCalculator();
                setOperandoSelect(1)
                setOperand1('')
                setOperand2('')
              }}>AC</button>
            </div>
            <div class="container-btn-ce">
              <button id="btn-ce" class="btn btn-green" onClick={() => {
                removeDigit();
              }}>CE</button>
            </div>
            <div class="container-btn">
              <button id="btn-divisao" class="btn btn-green" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('/');
              }}>÷</button>
            </div>
            <div class="container-btn">
              <button id="btn-7" class="btn btn-green" onClick={() => {
                updateCalculator('7');
              }}>7</button>
            </div>
            <div class="container-btn">
              <button id="btn-8" class="btn btn-green" onClick={() => {
                updateCalculator('8');
              }}>8</button>
            </div>
            <div class="container-btn">
              <button id="btn-9" class="btn btn-green" onClick={() => {
                updateCalculator('9');
              }}>9</button>
            </div>
            <div class="container-btn">
              <button id="btn-multiplicacao" class="btn btn-green" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('*');
              }}>x</button>
            </div>
            <div class="container-btn">
              <button id="btn-4" class="btn btn-green" onClick={() => {
                updateCalculator('4');
              }}>4</button>
            </div>
            <div class="container-btn">
              <button id="btn-5" class="btn btn-green" onClick={() => {
                updateCalculator('5');
              }}>5</button>
            </div>
            <div class="container-btn">
              <button id="btn-6" class="btn btn-green" onClick={() => {
                updateCalculator('6');
              }}>6</button>
            </div>
            <div class="container-btn">
              <button id="btn-menos" class="btn btn-green" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('-');
              }}>-</button>
            </div>
            <div class="container-btn">
              <button id="btn-1" class="btn btn-green" onClick={() => {
                updateCalculator('1');
              }}>1</button>
            </div>
            <div class="container-btn">
              <button id="btn-2" class="btn btn-green" onClick={() => {
                 updateCalculator('2');
              }}>2</button>
            </div>
            <div class="container-btn">
              <button id="btn-3" class="btn btn-green" onClick={() => {
                updateCalculator('3');
              }}>3</button>
            </div>
            <div class="container-btn">
              <button id="btn-mais" class="btn btn-green" onClick={() => {
                if(operandoSelect === 2) {
                  setOperand1(operand2);
                  setOperand2('');
                }
                setOperandoSelect(2)
                setOperation('+');
              }}>+</button>
            </div>
            <div class="container-btn">
              <button id="btn-0" class="btn btn-green" onClick={() => {
                updateCalculator('0');
              }}>0</button>
            </div>
            <div class="container-btn">
              <button id="btn-ponto" class="btn btn-green" onClick={() => {
                insertPoint();
              }}>.</button>
            </div>
            <div class="container-btn-equal">
              <button id="btn-equal" class="btn btn-green" onClick={() => {
                setOperand1(String(getResult()));
                setOperand2('');
                setOperandoSelect(1)
              }}>=</button>
            </div>
          </main>
        </section>
      </section>
    </div>
  );
}

export default App;
