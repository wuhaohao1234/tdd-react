import React , {useState} from 'react';
import fizzBuzz from '../utils/fizzBuzz';
export default function FizzBuzz() {
  const [value, setValue] = useState(0)
  return (
      <div>
        <div data-testid="result" >{value}</div>
        <button onClick={() => setValue(3)} >3</button>
        <button onClick={() => setValue(5)} >5</button>
        <button onClick={() => setValue(fizzBuzz(value))} >=</button>
      </div>
  );

  
}
