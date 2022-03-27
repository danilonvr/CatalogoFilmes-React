import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './salvos.css'
import { toast } from "react-toastify";

export default function Salvos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])


   function deletarItemLista(id){
       let filtroFilmes = filmes.filter((item)=>{
           return(item.id != id)
       })

       setFilmes(filtroFilmes)
       localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
       toast.success('Filme Removido com Sucesso!')
   }

   return(
    <div id="meus-filmes">
        <h1>Meus Filmes</h1>

        {filmes.length == 0 && <span>Ops, parece que você não possui nenhum filme salvo!</span>}

        <ul>
            {filmes.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.nome}</span>
                        <div className="botoes">
                            <Link to={`./filme/${item.id}`} >Detalhes</Link>
                            <button onClick={() => deletarItemLista(item.id)} >Remover da Lista</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
)
}