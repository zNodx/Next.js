import Cabecalho from "../components/cabecalho";
import Layout from "../components/Layout"

export default function Exemplo(){
    return(
    <Layout titulo="Usando Componente">
        <div>
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprenda Next na prática"/>
        </div>
    </Layout>
    )
}