import { useEffect, useState } from 'react';
import api from '../../Services/api'
import { Link } from 'react-router-dom';
import './Home.css'




export default function Home() {

  const [filmes, setFilmes] = useState([])

  useEffect( ()=>{

    async function loadFilmes(){
        const resposta = await api.get('r-api/?api=filmes')
        //console.log(resposta.data)
        setFilmes(resposta.data)
    }
    loadFilmes();
  }, [])


    return (
      <div className='container'>
        <div className='lista-filmes'>
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt=""/>
              <Link to= {`/filme/${filme.id}`} >Acessar</Link>
            </article>
          )
        })}
        </div>
      </div>
    );
  }