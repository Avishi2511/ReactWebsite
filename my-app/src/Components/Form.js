/*
import "./FormStyles.css"

import React, { useState } from 'react';

function FinancialCalculator() {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [futureValue, setFutureValue] = useState(null);

    const calculateFutureValue = () => {
        const p = parseFloat(principal);
        const r = parseFloat(interestRate) / 100;
        const t = parseFloat(years);
        const fv = p * Math.pow(1 + r, t);
        setFutureValue(fv.toFixed(2)); // Round to 2 decimal places
    };

    return (
      <div className="form">
            <form>
            <h2>Financial Calculator</h2>
                <label>Principal Amount:</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
                <label>Interest Rate (%):</label>
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />            
                <label>Number of Years:</label>
                <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
            </form>
            <button className="btn" onClick={calculateFutureValue} style={{margin:"0 40%",}} >Calculate</button>
            {futureValue !== null && (
                <div style={{margin:"0 45%",}}>
                    <h3>Future Value:</h3>
                    <p>{futureValue}</p>
                </div>
            )} 
        </div>
    );
}

export default FinancialCalculator;
*/

/*
const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>E-Mail</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
*/

import React, { useState } from 'react';
import "./FormStyles.css";

function FinancialCalculator() {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [futureValue, setFutureValue] = useState(null);

    const handlePrincipalChange = (event) => {
        setPrincipal(parseInt(event.target.value));
    };

    const handleInterestRateChange = (event) => {
        setInterestRate(parseInt(event.target.value));
    };

    const handleYearsChange = (event) => {
        setYears(parseInt(event.target.value));
    };

    const calculateFutureValue = () => {
        const p = principal;
        const r = interestRate / 100;
        const t = years;
        const fv = p * Math.pow(1 + r, t);
        setFutureValue(fv.toFixed(2)); // Round to 2 decimal places
    };

    return (
      <div className='form'>
          <form>
              <label>Principal Amount:</label>
              <input
                  type="text"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="text-input"
              />
              <input
                  type="range"
                  min="100"
                  max="10000"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="slider"
              />
              <label>Interest Rate (%):</label>
              <input
                  type="text"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="text-input"
              />
              <input
                  type="range"
                  min="1"
                  max="30"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="slider"
              />
              <label>Number of Years:</label>
              <input
                  type="text"
                  value={years}
                  onChange={handleYearsChange}
                  className="text-input"
              />
              <input
                  type="range"
                  min="1"
                  max="10"
                  value={years}
                  onChange={handleYearsChange}
                  className="slider"
              />
          </form>
          <button onClick={calculateFutureValue} className='btn' style={{margin:"0 40%",}}>Calculate</button>
          {futureValue !== null && (
              <div style={{margin:"0 45%",}}>
                  <h3>Future Value:</h3>
                  <p>{futureValue}</p>
              </div>
          )}
      </div>
  );
}

export default FinancialCalculator;
