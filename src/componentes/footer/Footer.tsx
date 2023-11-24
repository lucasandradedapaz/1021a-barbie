import './Footer.css';
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp-removebg-preview.png";
import barbienegan from "../img/barbienegan.jpg"

 

 function Footer(){

    return(
        <footer>
            <nav>
            <a href=""><img className='barbienegan' src={barbienegan} alt="#" /></a>
        
            </nav>

            <nav className='contato'>

                <p>Você pode entrar em contato também em:</p>
                <a href=""><img src={instagram} alt="#" /></a> 
                <a href=""><img src={facebook} alt="#" /></a> 
                <a href=""><img className='whatsapp' src={whatsapp} alt="#" /></a> 

            </nav>

            <nav className='Sobreviventes'>
            <p>Sobreviventes</p>
                    <p>Rick</p>
                    <p>Daryl</p>
                    <p>Kerl</p>
                    <p>Shenon</p>
                    <p>Negan</p>
                </nav>

                <nav className='Mortos'>
                <p>Mortos</p>
                    <p>Glen</p>
                    <p>Governador</p>
                    <p>Carl</p>
                    <p>Merlin</p>
                    <p>Sofia</p>
                </nav>

        </footer>



    )

} 
export default Footer
