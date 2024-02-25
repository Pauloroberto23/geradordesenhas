import './App.css'

// 2 importando componente
import FirstComponent from './components/FirstComponent'


// 4 template expression
import TemplateExpression from './components/TemplateExpression';

// 5 hierarquia de componentes
import MyComponent from './components/MyComponent';

//  6 eventos
import Event from './components/Event';

function App() {
  // 3 comentarios
  
  return 
    <div className='app'>
      {/* 3 comentarios jsx */}
       <h1>fundamentos do react</h1>  
      
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Event/>
    </div>;
  
}

export default App;
