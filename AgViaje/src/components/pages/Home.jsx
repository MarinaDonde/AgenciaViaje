import styles from './Home.module.css';
import banner from '../../img/banner.jpg'

export default function Home() {
    return (
        <>
            <img src={banner} alt="Escolhendo seu destino" className={styles.banner} />
            <section className={styles.section_index}>
                <h1>Quem Somos</h1>
                <p className={styles.texto}>A Agência Viaje! é uma agência que trabalha com uma proposta de atendimento personalizado ao cliente.</p>
                <p className={styles.texto}>Aqui você será atendido por pessoas capacitadas, que realmente conhecem o assunto, fornecendo informações sobre os melhores destinos e os melhores hotéis, sempre associando qualidade e preços justos. Tudo de acordo com o seu gosto e o seu bolso.</p>
                <p className={styles.texto}>Nossa missão é trabalhar para que o cliente desfrute da satisfação de viajar em sua plenitude.</p>
            </section>
        </>
    )
}