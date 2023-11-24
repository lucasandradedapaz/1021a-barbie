import {useEffect, useState} from "react"
import Filme from './../filme/Filme'
import './Main.css'
import axios from "axios"
import rickbarbie from "../img/rickbarbie.jpg"
import carlbarbie from "../img/carlbarbie.jpg"

type FilmeType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes"

export default function Main(){
    const [texto, setTexto] = useState("");
    const [filmes, setFilmes] = useState<FilmeType[]>([]);

    useEffect(()=>{
        const buscarFilmes = async () => {

        try{
            const reposta = await axios.get<FilmeType[]>(URL_API);
            setFilmes(reposta.data);
    }
    catch(error){
        console.log("nao foi possivel encontrar");
    }
    };
   buscarFilmes()
},[]);

function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto(e.target.value)
    }



    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />


                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                titulo={filme.titulo}
                                descricao={filme.descricao}
                                imagem={filme.imagem}
                            />
                    )
                }
                
            </main>
        </>
    )

}
