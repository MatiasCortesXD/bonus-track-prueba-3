function EventoCard({ evento }) {
  return (
    <article className="evento-card">
      <h3>{evento.nombre}</h3>
      <p>{evento.descripcion}</p>
      <p>
        <strong>Tipo:</strong> {evento.tipo} | <strong>Lugar:</strong> {evento.lugar}
      </p>
      <p>
        <strong>Fechas:</strong> {evento.fechas.join(', ')}
      </p>
      <p>
        <strong>Gratuito:</strong> {evento.esGratuito ? 'Sí' : 'No'}
      </p>
    </article>
  )
}

export default EventoCard
