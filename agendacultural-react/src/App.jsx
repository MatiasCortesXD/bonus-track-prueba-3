import { useMemo, useState } from 'react'
import './App.css'
import ListaEventos from './components/ListaEventos.jsx'
import FiltroTipo from './components/FiltroTipo.jsx'
import { eventos } from './data/eventos.js'

console.log('eventos cargados:', eventos)

function App() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const MAX_BUSQUEDA_LENGTH = 50

  const handleBusquedaChange = (value) => {
    const textoNormalizado = value.replace(/\s+/g, ' ').trimStart()
    setBusqueda(textoNormalizado.slice(0, MAX_BUSQUEDA_LENGTH))
  }

  const eventosFiltrados = useMemo(() => {
    const textoBusqueda = busqueda.trim().toLowerCase().slice(0, MAX_BUSQUEDA_LENGTH)

    return eventos.filter((evento) => {
      const coincideTipo =
        tipoSeleccionado === 'Todos' || evento.tipo === tipoSeleccionado
      const coincideNombre = evento.nombre
        .toLowerCase()
        .includes(textoBusqueda)

      return coincideTipo && coincideNombre
    })
  }, [tipoSeleccionado, busqueda])

  const gratuitosFiltrados = eventosFiltrados.filter((evento) => evento.esGratuito).length

  return (
    <main className="app">
      <header className="app-header">
        <h1>Agenda Cultural</h1>
        <p>Descubre eventos culturales cercanos y filtra por tipo.</p>
      </header>

      <section className="app-controls">
        <FiltroTipo
          tipoSeleccionado={tipoSeleccionado}
          onChangeTipo={setTipoSeleccionado}
        />

        <label className="campo-busqueda">
          Buscar por nombre:
          <input
            type="search"
            value={busqueda}
            onChange={(e) => handleBusquedaChange(e.target.value)}
            maxLength={MAX_BUSQUEDA_LENGTH}
            placeholder="Busca un evento..."
          />
        </label>
      </section>

      <p className="conteo-gratuitos">
        {gratuitosFiltrados} evento{gratuitosFiltrados === 1 ? '' : 's'} gratuito{gratuitosFiltrados === 1 ? '' : 's'}
      </p>

      <ListaEventos
        eventos={eventosFiltrados}
        emptyMessage="No hay eventos que coincidan"
      />
    </main>
  )
}

export default App
