import { useState } from "react";
import api from "../../services/api";
import {useHistory, Link} from "react-router-dom";
import "./Page4.css";

export default function Page2(){
  const [nome,setNome] = useState("");
  const [paradigmas,setParadigmas] = useState("");
  const [descricao,setDescricao] = useState("");
  const history = useHistory();

  async function adicionar(e){
    e.preventDefault();
      const response = await api.post("/linguagensAdd/store",{
      nome: nome,
      paradigmas: paradigmas,
      descricao: descricao
    });
    if(response.data===null){
      window.alert("Preencha todos os campos.");
    }else{
      window.alert("A linguagem será adicionada em breve.");
      history.push(`/`);
    }
  }
  return(
    <div className="App4">
      <div className='home'>
      <Link to="/" >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </Link>
      </div>
      <h1>
        ClassyLang
      </h1>
      <form>
        Nome: <input type='text' placeholder='Digite o nome da Linguagem'
        onChange={e=>setNome(e.target.value)}></input>
        Paradigma: <input type='text' placeholder='Digite o paradigama a qual ela pertence'
        onChange={e=>setParadigmas(e.target.value)}></input>
        Descrição: <textarea className='box' placeholder='Digite um pequeno texto sobre a linguagem'
        onChange={e=>setDescricao(e.target.value)}></textarea>
        <button type='submit' onClick={adicionar}> Enviar </button>
      </form>
    </div>
  )
}