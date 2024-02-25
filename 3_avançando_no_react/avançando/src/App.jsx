import './App.css';

// 2 imagem em assets
import night from "./assets/night.jpg";
import CondicionalRender from './Components/CondicionalRender';

// 3 useState
import Data from './Components/Data';

//4 renderização de lista
import ListRender from './Components/listRender';

// 5 render 
import CondicionalRender from './Components/CondicionalRender';

// 6 props 
import ShowUserName from './Components/ShowUserName';

// 7 desestruturando props
import CarDetails from './Components/CarDetails';

// 9 fragments
import Fragment from './Components/fragment';

//10 children
import Container from './Components/Container';

// 11 execute função 
import ExecuteFunction from './Components/ExecuteFunction';

import { useState } from 'react';
import Message from './Components/Message';

// 8 redenrização de listas com componente
const cars = [
  {id: 1, brand: "ferrari", color: "amarelo",km:120},
  {id: 2, brand: "renault", color: "cinza",km:20000},
  {id: 3, brand: "bmw", color: "azul",km:56231},
];

function App() {

  // 12 state lift
  const [message,setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  return (
    <div className='app' style={{paddingBottom: "500px"}}>
      <h1>avançando em react </h1>
      {/* imagem em public*/}
      <img src="/img.jpg" alt="alguma imagem" />
      {/* imagem assets*/}
      <img src={night} alt="outra imagem" />
      {/* 3 use state*/}
      <Data/>
      {/*4 redenrização*/}
       <ListRender/>
       {/*render condicional*/}
       <CondicionalRender/>
       {/*props */}
       <ShowUserName name="paulo" />
       {/*desestruturando props*/}
       <CarDetails brand="vw" km={999} color="vermelho" />
       {/* reaproveitamento de componentes*/}
       <CarDetails brand="fiat" km={12533} color="branco" />
       <CarDetails brand="mercedes" km={9955} color="azul" />
       {/*redenrização de lista com componentes*/}
       {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      

       ))}
        {/*9 fragmentos*/}
        <Fragment/>
        {/*10 children*/}
        <Container>
          <p>alguma coisa</p>
        </Container>
        {/*11 execute função*/}
        function showMessage() {
          console.log("evento do componente pai")
          
        }
        <ExecuteFunction myFunction={showMessage}/>

        {/*13 state lift*/}
        <message msg={message}/>
    

    </div>
  );
  
}

export default App
