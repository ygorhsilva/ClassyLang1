import { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import api from "../../services/api";
import "./Page1.css"


export default function Page1(){
  const[nome,setNome]= useState("");
  const history = useHistory();

  async function busca(e){
    e.preventDefault();
    const response = await api.get("/linguagens/find", {params:{nome: nome}});
    if(response.data===null){
      window.alert("Linguagem não encontrada.")
    }else{
      history.push(`/linguagens/${nome}`);
    }
  }
  return(
    <div className="App1">
      <div>
        <h1>
          ClassyLang
        </h1>
        <p>
          Informações acerca de paradigmas de linguagens de programação
        </p>
      </div>
      <form>
        <input value={nome} placeholder='Digite uma Linguagem' onChange={e => setNome(e.target.value)}></input>
        <button type='submit' onClick={busca}> Buscar </button>
      </form>
      <Link className='botao' to='/addlinguagem'>Adicionar uma linguagem</Link>
      <div className='lista'>
        <h3>Linguagens mais Procuradas</h3>
        <Link to='/linguagens/python'>Python</Link>
        <Link to='/linguagens/go'>Go</Link>
        <Link to='/linguagens/r'>R</Link>
        <Link to='/linguagens/javascript'>JavaScript</Link>
        <Link to='/linguagens/c++'>C++</Link>
      </div>
    </div>
  )
}