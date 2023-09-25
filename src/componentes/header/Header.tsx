
 
 import './Header.css'
 import Link from './../link/Links'
 import logoheader from "../img/The-Walking-Dead-PNG-Transparent.png"

 function Header(){

    return(
        <header>
            <div>
            <a className='logoheader' href=""><img src={logoheader} alt="#" /></a>
            </div>

            <nav>
                <ul>
                    
                    <li>
                       <Link texto='Home'/>
                    </li>

                    <li>
                       <Link texto='Noticias'/>
                    </li>

                    <li>
                        <Link texto='sobre'/>
                    </li>

                    <li>
                        <Link texto='contato'/>
                    </li>
                </ul>
            </nav>

           
           
        </header>



    )

} 
export default Header
