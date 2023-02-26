import React, { useState } from 'react';

function Index() {
  const [number, setNumber] = useState('');
  const [romanNumeral, setRomanNumeral] = useState('');

 
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRomanNumeral(convertToRoman(parseInt(number)));
  };

  const convertToRoman = (num) => {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let roman = '';
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        roman += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    return roman;
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <br/>
          <br/>
          <input type="text" value={number} onChange={handleInputChange} />
        </label>
        <br/>
        <br/>
        <button type="submit">Convert to Roman Numeral</button>
      </form>
      
      {romanNumeral && (
        
        <p>
          <br/>
          <br/>
          {number} in Roman numerals is {romanNumeral}
        </p>
      )}
    </div>
    
  );
}

export default Index;
