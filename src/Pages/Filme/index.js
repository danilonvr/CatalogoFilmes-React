import './filme-info.css'
import {useParams, useHistory} from 'react-router-dom'
import api from '../../Services/api'
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";


export default function Filme(){

    const { id } = useParams();
    const history = useHistory();
    const [filme,setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadFilme(){
            const resposta = await api.get(`r-api/?api=filmes/${id}`)
            if(resposta.data.length == 0){
                //acesso com um id desconhecido. Redireciona para Home
                history.replace('/');
                return;
            }
            //console.log(resposta.data)
            setFilme(resposta.data)
            setLoading(false)
        }
        loadFilme();

        return() => {
            console.log('Desmontado')
        }


    },[history,id])

    function salvaFilme(){
        const listaFav = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(listaFav) || []
        //em caso de filme repetido(mesmo id), necessario ignorar
        const temFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id == filme.id)
        //devolve um valor boolean, que pode ser usado para verificar
        if(temFilme){
            toast.error('Filme ja foi adicionado aos favoritos anteriormente!')
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }


    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse: </h3>
            {filme.sinopse}
            <div className='botoes'>
                <button onClick={salvaFilme} >Salvar</button>
                <button>
                    <a target='blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}