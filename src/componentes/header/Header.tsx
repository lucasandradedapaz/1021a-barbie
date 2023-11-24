 import './Header.css'
 import LinkNav from '../linknav/LinkNav'
 import barbienegan from "../img/barbienegan.jpg"
 function Header(){
     return(
         <header>
             <div>
             <img src={barbienegan}></img>
             </div>
             <nav>
                 <ul>
                     <li>
                         <LinkNav url="/" texto='Home'/>
                     </li>
                     <li>
                         <LinkNav url="/noticias" texto='Notícia'/>
                     </li>
                     <li>
                         <LinkNav url="/sobre" texto='Sobre'/>
                     </li>
                     <li>
                         <LinkNav url="/contato" texto='Contato'/>
                     </li>
                 </ul>
             </nav>
         </header>
     )
 }
 
 export default Header