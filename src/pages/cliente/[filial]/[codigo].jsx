import Layout from "../../../components/Layout";
import {useRouter} from "next/router";
import { useEffect } from "react";
export default function ClienteProCodigo(){
    const router = useRouter()
    useEffect(()=>{
        console.log(router.query);
    }, [])
    return(
        <Layout titulo="Navegação Dinâmica">

            <div>filial = {router.query.filial}</div>

            <div>Código = {router.query.codigo}</div>


        </Layout>
    )
}