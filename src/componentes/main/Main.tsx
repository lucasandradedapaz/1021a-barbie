
import "./main.css"
import filme1 from "../img/the old man.jpg";
import filme2 from "../img/a matriarca.jpg";
import filme3 from "../img/noites brutais.jpg";
import filme4 from "../img/stories.jpg";
import neganelucia from "../img/neganelucia.png";



function Main(){

  
  

  return(

    <main className="main">

<div id="divBusca">
 <input type="text" id="txtBusca" placeholder="Buscar..."/>

</div>



      <div className="meio">
       <a className="assine" href="http://">ASSINE O STAR+</a>
        

        <p className="text1">Ferido enquanto cumpria seu dever, o xerife de uma cidade pequena da Geórgia, Rick Grimes, acorda do coma e encontra o mundo infestado por zumbis.</p>

        <p className="text2">Você também pode gostar de</p>

      </div>



  <section className="carrosel">
    <nav className="imgcarrosel">
    <div className="casa">
      
      
     <a href=""><img src={filme1} alt="#" /></a> 
     <h2>Dan</h2>
     <p className="descricao">Dan Chase deixou a CIA há décadas e vive fora do circuito desde então. Quando um assassino chega e tenta matar Chase, o velho agente descobre que para garantir seu futuro, ele agora deve reconciliar seu passado.</p>
    </div>

    <div className="casa">
      <a href=""><img src={filme2} alt="#" /></a> 
      <p className="descricao">Após sobreviver a uma overdose, uma mulher retorna à casa onde cresceu para enfrentar seus demônios interiores, mas descobre a presença de uma entidade real.</p>
    </div>
    <div className="casa">
     <a href=""><img src={filme3} alt="#" /></a> 
     <p className="descricao">Chegando a Detroit para uma entrevista de emprego, uma jovem aluga uma casa. Mas quando chega tarde da noite, ela descobre que a casa já havia sido alugada e ocupada por um homem estranho. </p>
    </div>

    <div className="casa">
      <a href=""><img src={filme4}alt="#" /></a> 
      <p className="descricao">Uma série de antologia dos criadores de "American Horror Story", que traz uma história diferente de terror a cada episódio.</p>
    </div>

    <div className="imgdireito">
        <a href=""><img src={neganelucia} alt="#" /></a>
        
      </div>
  
    </nav>

    

   

  </section>

  

    </main>

  )
  }
  export default Main