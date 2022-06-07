import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h2>
                Sobre o Blog do <span>ALE</span>
            </h2>
            <p>
                Esse projeto tratasse de um blog feito com React.js no Front-end
                e Firebase no Back-end com intuito de reforçar meus
                conhecimentos e desenvolver aplicações e projetos legais com
                estas duas tecnologias incríveis!
            </p>
            <Link to="/posts/create" className="btn">
                Criar um Post
            </Link>
        </div>
    )
}
export default About
