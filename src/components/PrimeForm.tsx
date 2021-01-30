import React, { useState } from 'react';
import { calcPrime } from './Algo';

const PrimeForm = () => {
  const [inputNum, setInputNum] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNum(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num: number = +inputNum
    setAnswer(calcPrime(num));
  }

  return (
    <form id="frmFindHighestPrime" onSubmit={handleSubmit} className="container-fluid nambk-container-input text-center">
      <h2 className="nambk-header">Highest Prime</h2>
      <div className="nambk-header-desc">Lower than Input Number</div>
      <div>
        <input id="inputNumber" name="inputNumber" className="nambk-input" style={{width: '50%'}} 
                type="number" value={inputNum} aria-label="Input Number" autoFocus
                onChange={handleChange} placeholder="Enter a number"/>
        <input id="btnFindHighestPrime" className="nambk-btn nambk-btn-primary" 
                type="submit" value="Go"/>
      </div>
      <div id="result" className="mt-3" aria-readonly style={{minHeight: '2rem',}}>
        {answer}  
      </div>   
    </form>
  );
}
export default PrimeForm;