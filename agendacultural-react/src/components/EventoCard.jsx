import PropTypes from 'prop-types'

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas, esGratuito }) {
  const normalizedTipo = tipo
    ? tipo
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/\s+/g, '-')
    : 'desconocido'

  return (
    <article
      className={`evento-card evento-card--${normalizedTipo} ${
        esGratuito ? 'evento-card--gratis' : ''
      }`}
    >
      <div className="evento-card__header">
        <span className="evento-card__type">{tipo}</span>
        <h3>{nombre}</h3>
      </div>

      {esGratuito && <span className="evento-card__badge">GRATIS</span>}

      <p className="evento-card__description">{descripcion}</p>

      <div className="evento-card__detail">
        <strong>Lugar:</strong> {lugar}
      </div>
      <div className="evento-card__detail">
        <strong>Duración:</strong>{' '}
        {duracion > 0 ? `${duracion} min` : 'No aplica'}
      </div>
      <div className="evento-card__detail">
        <strong>Fechas:</strong> {fechas.length > 0 ? fechas.join(', ') : 'Sin fechas'}
      </div>
    </article>
  )
}

EventoCard.propTypes = {
  nombre: PropTypes.string,
  lugar: PropTypes.string,
  duracion: PropTypes.number,
  tipo: PropTypes.string,
  descripcion: PropTypes.string,
  fechas: PropTypes.arrayOf(PropTypes.string),
  esGratuito: PropTypes.bool,
}

EventoCard.defaultProps = {
  nombre: 'Evento sin nombre',
  lugar: 'Lugar no especificado',
  duracion: 0,
  tipo: 'Desconocido',
  descripcion: 'Descripción no disponible.',
  fechas: [],
  esGratuito: false,
}

export default EventoCard
