import {useState} from 'react';

const Data = () => {

    let somaData = 10;

    const [anotherNumber, setanotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>valor:{somaData}</p>
            <button onClick={() => (somaData = 15)}>mudar variavel</button>
        </div>
        <div>
        <p>valor: {anotherNumber}</p>
        <button onClick={() => setanotherNumber(20)}>trocar valor</button>
        </div>
    </div>
  );
};

export default Data;