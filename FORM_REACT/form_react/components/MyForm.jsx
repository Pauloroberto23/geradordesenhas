import "./MyForm.css";

import { useState } from "react";

const MyForm = ({userName,useremail}) => {
  // 3 gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(useremail);

  const [bio, setBio] = useState("")

  const [role, setRole] = useState("");

 const handleName = (e) => {
   setName(e.target.value);
   
  };
// 5 envio de form
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name,email,bio,role);

  //7 limpar o form
  setName("");
  setEmail("");
  setBio("");
  setRole("");
}  
  console.log(name,email,bio);
  return (
    <div>
        {/*criação de form*/}
        {/* 5 envio de formulario*/}
        
        <form onSubmit={handleSubmit} >
           <div>
            <label htmlFor="name">nome:</label>
            <input type="text" name="name" placeholder="digite seu nome" 
            onChange={handleName}
            // 6 controlled input
            value={name || ""} 
            />
            
            </div> 
            {/*2 label involvendo o input*/ }
            <label>
              <span>E-mail:</span>
              <input type="text" name="email" placeholder="digite seu e-mail" 
              onChange={(e) => setEmail(e.target.value)} 
              // 6 controlled input
                value={email || ""} 
              />
            </label>
            {/* 8 textarea*/}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder="descrição do usuario" 
              onChange={(e) => setBio(e.target.value)} ></textarea>
            </label>
            {/* 9 select*/}
            <label>
              <span>Função no sistema</span>
              <select name="role"
              onChange={(e) => setRole(e.target.value)} value={role} >

                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
        

    </div>
  );
};

export default MyForm