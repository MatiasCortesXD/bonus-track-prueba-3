import EventoCard from './EventoCard.jsx'

function ListaEventos({ eventos, emptyMessage = 'No hay eventos que coincidan' }) {
  return (
    <section className="lista-eventos">
      {eventos.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        eventos.map((evento) => (
          <EventoCard key={evento.id} {...evento} />
        ))
      )}
    </section>
  )
}

export default ListaEventos
