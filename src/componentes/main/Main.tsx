import "./main.css"
import filme1 from "../img/gruporick1temp.jpg";
import filme2 from "src/componentes/img/a matriarca.jpg";
import filme3 from "src/componentes/img/noites brutais.jpg";
import filme4 from "src/componentes/img/stories.jpg";





function Main(){
    

    return(


        <main className="main">
            <div className="meio">
               <a className="assine" href="http://">ASSINE O STAR+</a>
                

                <p className="text1">Ferido enquanto cumpria seu dever, o xerife de uma cidade pequena da Geórgia, Rick Grimes, acorda do coma e encontra o mundo infestado por zumbis.</p>

                <p className="text2">Você também pode gostar de</p>
            </div>

    <section className="carrosel">
        <nav className="imgcarrosel">
        <div>
            
            
           <a href=""><img src={filme1} alt="#" /></a> 
        </div>

        <div>
            <a href=""><img src={filme2} alt="#" /></a> 
        </div>
        <div>
           <a href=""><img src={filme3} alt="#" /></a> 
        </div>

        <div>
            <a href=""><img src={filme4}alt="#" /></a> 
        </div>
        

        </nav>
    </section>

        </main>

    )
    }
    export default Main