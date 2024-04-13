import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

import './App.css'


function App() {
  // 1 resgatando dados
  const [products, setProducts] = useState([]);
  
  //4 custom hook
  const {data: items} = useFetch(url);
  
  
  useEffect(() => {
    
    async function getData() {

      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)

    }
    getData()

  },[])

  // 2 envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit =  async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };
    const res = await fetch(url,{
     method: "post",
     headers: {
      "content-type": "application/json",
     }, 
     body: JSON.stringify(product),
    });

    // 3 encapsulamento dinamico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

  };

  return (
    <div className='app'>
      <h1>http react</h1>
      {/* 1 resgate de dados*/}
      <ul>
        {items &&
         items.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ) )}
      </ul>
      {/* 2 enviando dados*/}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='digite seu nome:' />
          </label>

          <label>
            <span>preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='digite o preço:' />
          </label>
          <input type="submit" value= "enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
