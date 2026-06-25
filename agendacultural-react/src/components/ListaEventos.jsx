import EventoCard from './EventoCard.jsx'

function ListaEventos({ eventos }) {
  return (
    <section className="lista-eventos">
      {eventos.length === 0 ? (
        <p>No hay eventos disponibles.</p>
      ) : (
        eventos.map((evento) => (
          <EventoCard key={evento.id} {...evento} />
        ))
      )}
    </section>
  )
}

export default ListaEventos
