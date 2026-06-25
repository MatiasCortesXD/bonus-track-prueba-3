function FiltroTipo({ tipoSeleccionado, onChangeTipo }) {
  return (
    <label className="filtro-tipo">
      Filtrar por tipo:
      <select value={tipoSeleccionado} onChange={(e) => onChangeTipo(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Concierto">Concierto</option>
        <option value="Exposición">Exposición</option>
        <option value="Teatro">Teatro</option>
        <option value="Taller">Taller</option>
      </select>
    </label>
  )
}

export default FiltroTipo
