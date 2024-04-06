
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

    const [sliders, setSliders] = useState([
      { id: 1, value: 50, min: 0, max: 100 },
      { id: 2, value: 25, min: 0, max: 50 },
      { id: 3, value: 75, min: 50, max: 100 }
    ]);

    const handleChange = (id, event) => {
      const newValue = parseInt(event.target.value);
      setSliders(prevSliders =>
          prevSliders.map(slider =>
              slider.id === id ? { ...slider, value: newValue } : slider
          )
      );
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