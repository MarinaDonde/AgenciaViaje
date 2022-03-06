import styles from './Parallax1.module.css'

export default function Parallax1() {
    return (
        <section className={styles.header_site}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h1 className={styles.text_center}>Qual é o seu próximo destino?</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}