import { useMemo, useState } from 'react'
import './App.css'
import ListaEventos from './components/ListaEventos.jsx'
import FiltroTipo from './components/FiltroTipo.jsx'
import { eventos } from './data/eventos.js'

console.log('eventos cargados:', eventos)

function App() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos')

  const eventosFiltrados = useMemo(() => {
    if (tipoSeleccionado === 'Todos') {
      return eventos
    }
    return eventos.filter((evento) => evento.tipo === tipoSeleccionado)
  }, [tipoSeleccionado])

  return (
    <main className="app">
      <header className="app-header">
        <h1>Agenda Cultural</h1>
        <p>Descubre eventos culturales cercanos y filtra por tipo.</p>
      </header>

      <FiltroTipo
        tipoSeleccionado={tipoSeleccionado}
        onChangeTipo={setTipoSeleccionado}
      />

      <ListaEventos eventos={eventosFiltrados} />
    </main>
  )
}

export default App
