import './Footer.css'
import logofooter from "../img/logofooter.jpg"

 

 function Footer(){

    return(
        <footer className='menu'>
            <nav>
            <a className='logofooter' href=""><img src={logofooter} alt="#" /></a>

            <p className='Serie'>A série acompanha um grupo de sobreviventes durante um apocalipse zumbi. Às vezes, os conflitos interpessoais geram tanto perigo que alguns fazem de tudo para sobreviver.</p>
            
            </nav>


<section className='descricaofooter'>

            <nav className='menu1'>
                <p>Duração: 1h 7min</p>
                <p>Data de lançamento: 2010-2021</p>
                <p>Gênero:Sobrevivência, Drama, Terror</p>
                <p>Classificação da temporada 1:Medo e Violência Extrema</p>
            </nav>

            <nav className='menu2'>
                <p>Criação: Frank Darabont</p>
                <p>Elenco:</p>
                <p>Andrew Lincoln</p>
                <p>Jon Bernthal</p>
                <p>Sarah Wayne Callies</p>
            </nav>
            </section>

           
         


     </footer>




    )

} 
export default Footer
