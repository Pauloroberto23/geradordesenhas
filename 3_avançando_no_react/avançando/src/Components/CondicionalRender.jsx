import React from 'react'

const CondicionalRender = () => {
    const x = true;

    const name = 'paulo'

  return ( <div>
    {/* render condicional*/}
     <h3>isso será exibido?</h3>
     {x && <p>se x for true sim!</p> }
     {/* 8 else */}
     <h3>render ternario</h3>
     {name === 'joão' ? (
        <div>
            <p>ola joão!</p>
         </div>   
     ) : (
        <div>
          <p>nome não encontrado!</p>
        </div>   
     )}


    </div>
  )
}

export default CondicionalRender