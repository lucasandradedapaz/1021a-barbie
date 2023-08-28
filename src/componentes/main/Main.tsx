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
            
           <a href=""><img src="gruporick1temp.jpg" alt="" /></a> 
        </div>

        <div>
            <a href=""><img src="a matriarca.jpg" alt="" /></a> 
        </div>
        <div>
           <a href=""><img src="noites brutais.jpg" alt="" /></a> 
        </div>

        <div>
            <a href=""><img src="stories.jpg" alt="" /></a> 
        </div>
        

        </nav>
    </section>

        </main>

    )
    }
    export default Main