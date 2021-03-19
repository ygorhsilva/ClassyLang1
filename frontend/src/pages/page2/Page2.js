import api from "../../services/api";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./Page2.css";


export default function Page2(){
  const{nome} = useParams();
  const[linguagem,setLinguagem] = useState({});
  useEffect(()=>{
      api.get(`/linguagens/${nome}`, {params:{nome: nome}})
      .then(res=>{
        setLinguagem(res.data);
      })
  },[])
  return(
    <div className='App2'>
      <div className='home'>
      <Link to="/" >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      </Link>
      </div>
      <h1>
        ClassyLang
      </h1>
      <h2>
        {linguagem.nome}
      </h2>
      <h3>
        Paradigma:
        {linguagem.paradigmas && linguagem.paradigmas.split(", ").map(function(paradigma) {
        return <Link to={`/paradigma/${paradigma}`} >{" "+ paradigma + ", " }</Link>})}
      </h3>
      <p>
        {linguagem.descricao}
      </p>
    </div>
  )
}

