import { FaFacebookSquare, FaInstagram, FaLinkedin } 
from 'react-icons/fa'

import styles from './Footer.module.css'

export default function Footer() {

    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list} >
                <li><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            </ul>
            <p className={styles.copy_right}>
                <span>Agência Viaje!</span> &copy; 2022</p>
        </footer>
    )
}