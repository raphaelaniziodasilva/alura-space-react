import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Populares from "../../componentes/Populares";
import Rodape from "../../componentes/Rodape";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (        
        <>
            <Cabecalho />

            {/* Para criar o banner da pagina, eu vou adiciona-lo direto na pagina nao vou criar um componente pois so vai ser uma img */}
            <main>
                <section className={styles.principal}>
                    <Menu />

                    <div className={styles.principal__imagem}>
                        <h1>A Galeria mais completa do espaço</h1>
                        <img src={banner} alt="Imagem da terra vista do espaço" />
                    </div>
                </section>

                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />         
        </>
    )
}
