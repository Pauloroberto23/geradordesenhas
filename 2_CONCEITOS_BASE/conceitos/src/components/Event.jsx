import React from 'react';

const Event = () => {

    const handleClick = (e) => {
        console.log(e);
        console.log("executou");
    };

    // 8 função de renderização 
    const renderSomething = (x) => {
        if (x) {
            return <h1>redenrizando isso</h1>
        }else {
            return <h1>redenrizado</h1>
        }
    }
  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>clique aqui</button>
        </div>
        {/* 7 evento com função */}
        <div>
            <button onClick={handleClick}>clique aqui com função</button>
        </div>
        {/* função com render */}
        {renderSomething(true)}
        {renderSomething(false)}

    </div>
  )
}

export default Event