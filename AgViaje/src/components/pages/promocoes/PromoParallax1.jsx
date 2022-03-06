import styles from '../destinos/Parallax1.module.css'

export default function PromoParallax1() {
    return (
        <section className={styles.header_promoPage}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h1 className={styles.text_center}>Não perca nossas promoções!</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}