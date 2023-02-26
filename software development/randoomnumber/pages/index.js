import { useState } from 'react';
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);

  function handleClick() {
    const number = generateRandomNumber();
    setRandomNumber(number);
  }

  return (
    <div>
      <h1 id='shortenedURL'>Random Number Generator</h1>
      <button onClick={handleClick}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}
