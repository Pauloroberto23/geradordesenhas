// components
import {GrFormNext,GrFormPrevious} from 'react-icons/gr';
import UseForm from './components/UseForm';
import ReviewForm from './components/ReviewForm';
import  Thanks  from './components/Thanks';

// hooks
import { UseForm } from './hooks/useForm';

import './App.css';

function App() {

  const formComponents = [<UseForm/>, <ReviewForm/>, <Thanks/>];
  
  const {currentStep, currentComponent} = UseForm(formComponents)

  return (
    <div className='app'>
     <div className="header">
      <h2>Deixe sua avaliação</h2>
      <p>Ficamos felizes com sua compra, Utilize o formulario abaixo para 
        avaliar o produto
      </p>
     </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container">
           {currentComponent}
          </div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious/>
            <span>Voltar</span>
            </button>
           
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
