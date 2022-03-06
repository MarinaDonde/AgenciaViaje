import styles from './Contato.module.css'
import banner from '../../img/banner1.jpg'

export default function Contato() {

    return (
        <>
            <h1>Entre em Contato:</h1>
            <form>
                <div>
                    <div className={styles.formulario}>
                        <label>Nome:</label>
                        <input
                            type="text" placeholder="Digite seu nome"
                            name="nome" required />
                    </div>
                    <div className={styles.formulario}>
                        <label>Telefone:</label>
                        <input type="text" placeholder="Digite seu telefone" name="telefone" required/>
                    </div>
                    <div className={styles.formulario}>
                        <label>Email:</label>
                        <input type="text" placeholder="Digite seu email" name="email" />
                    </div>
                    <div className={styles.formulario}>
                        <label>Destino:</label>
                        <input type="text" placeholder="Digite o nome da cidade" name="destino" required/>
                    </div>
                    <button className={styles.btnformulario}>Enviar</button>
                </div>
            </form>
            <img src={banner} alt="Escolhendo seu destino" className={styles.banner} />
        </>
    )
}