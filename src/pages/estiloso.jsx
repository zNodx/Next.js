import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Estiloso(){
    return (
        <Layout titulo="Exemplo de Css Modularizado">

        <div className={styles.roxo}>
            <h1>
                Estilo Usando css Módulos
            </h1>
        </div>

        </Layout>
        
    )
}