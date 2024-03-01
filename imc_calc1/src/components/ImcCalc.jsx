import { useState } from "react"

import Button from "./Button"



const ImcCalc = ({calcImc}) => {
   const [height, setHeight] = useState("");
   const [weight, setWeight] = useState("");

   const ClearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
   }

   const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
   }

   const handleHeightChange = (e) => { // habdleheightchange mudar identificador de altura
    const updatedValue = validDigits(e.target.value);

    setHeight(updatedValue);

   }

   const handleWeighttChange = (e) => { // habdleheightchange mudar identificador de altura
    const updatedValue = validDigits(e.target.value);

    setHeight(updatedValue);

   }


  return (
    <div id="calc-container" >
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
           <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name="heigth" id="height" placeholder="Ex 1,75" 
                onChange={(e) => handleHeightChange(e)} 
                value={height} />
            </div>
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name="weight" id="weight" placeholder="Ex 75"
                onChange={(e) => handleWeighttChange(e)} 
                value={weight}/>
            </div>
           </div>
           <div className="action-control">
            <Button id="calc-btn" Text="calcular" action={calcImc}/>
            <Button id="clear-btn" Text="Limpar" action={ClearForm}/>
            
           </div>
           
        </form>
    </div>
  )
}

export default ImcCalc