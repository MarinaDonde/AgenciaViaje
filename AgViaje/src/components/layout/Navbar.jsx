import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logoviajepqn.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar} >
            <Container>
                <Link to="/">
                    <img src={logo} alt="AgênciaViaje!" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Destinos">Destinos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Promocoes">Promoções</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}