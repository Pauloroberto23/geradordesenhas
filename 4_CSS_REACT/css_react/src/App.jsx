
import './App.css'

//2 css de componentes
import MyConponent from './Component/MyConponent';



function App() {
 

  return (
    <div className='app'>
     {/*css global*/}
     <h1>css no react</h1>
      {/* css componentes*/}
    <MyConponent/>
    <p>pegou o css do componente</p>
    {/*3 inline style*/}
    <p style={{color:'blue'}}>este elemento tem estilos inline</p>
    {/*6 css modulos*/}
    <title/>

    </div>
   
      
        
  );
}

export default App
