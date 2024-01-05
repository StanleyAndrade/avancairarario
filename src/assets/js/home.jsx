//Importing CSS
import '../css/responsive.css'
import '../css/home.css'

//Importing IMG
import Logo from '../img/Imagem do WhatsApp de 2023-12-13 à(s) 17.22.05_45691183.jpg'

//Importing React Router Dom
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className='father'>
            <div className="children">
                <img className='logo' src={Logo} alt=''/>
                <div className='divBtnHome'>
                    <p>Não é batizado? <br/> Clique aqui</p>
                    <Link to="reset"><button className='btn-home'>RESET</button></Link>
                    <p>Já é batizado? <br/> Clique aqui</p>
                    <Link to="start"><button className='btn-home'>START</button></Link>
                    <p>Já terminou o START? <br/> Clique aqui</p>
                    <Link to="cdv"><button className='btn-home'>CDV</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Home