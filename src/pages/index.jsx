import Link from 'next/link'
import Navegador from '../components/Navegador'
export default function Inicio() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Navegador cor='#f53131' destino="/estiloso" texto="Estiloso"/>
        <Navegador cor='#e80f0f' destino="/exemplo" texto="Exemplo"/>
        <Navegador cor='#f50000' destino="/jsx" texto="JSX"/>
        <Navegador cor='#DC5f0f' destino="/navegacao" texto="NAVEGAÇÃO"/>
        <Navegador cor='#DC5fff' destino="/cliente/SP-PG/123" texto="NAVEGAÇÃO 2"/>
        <Navegador cor='#e85f0f' destino="/estado" texto="Componente com estado"/>

      </div>
  )
}