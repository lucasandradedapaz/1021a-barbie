 import './Header.css'
 import Link from './../link/Links'

 function Header(){

    return(
        <header>
            <div>
                <h1>The Walking Dead</h1>
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
