import "./main.css"


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
            
           <a href=""><img src="src/componentes/img/gruporick1temp.jpg" alt="src/componentes/img/gruporick1temp.jpg" /></a> 
        </div>

        <div>
            <a href=""><img src="src/componentes/img/a matriarca.jpg" alt="#" /></a> 
        </div>
        <div>
           <a href=""><img src="src/componentes/img/noites brutais.jpg" alt="#" /></a> 
        </div>

        <div>
            <a href=""><img src="src/componentes/img/stories.jpg" alt="#" /></a> 
        </div>
        

        </nav>
    </section>

        </main>

    )
    }
    export default Main