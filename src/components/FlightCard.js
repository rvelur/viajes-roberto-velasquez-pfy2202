import React from 'react';

function FlightCard({ vuelo, isSelected, onSelect }) {
  return (
    <div className={`option-card ${isSelected ? 'selected' : ''}`}>
      <div className="option-header">
        <h4>🛫 {vuelo.aerolinea}</h4>
        <span className="price-tag">${vuelo.precio} USD</span>
      </div>
      <p className="option-meta">
        <strong>Ruta:</strong> {vuelo.origen}
      </p>
      <p className="option-meta">
        <strong>Fechas:</strong> {vuelo.fechaSalida} al {vuelo.fechaRegreso}
      </p>
      <p className="option-meta">
        <strong>Disponibilidad:</strong>{' '}
        <span className={vuelo.disponibilidad <= 3 ? 'stock-low' : 'stock-ok'}>
          {vuelo.disponibilidad} asientos disponibles
        </span>
      </p>
      <button
        type="button"
        className={`btn ${isSelected ? 'btn-selected' : 'btn-outline'}`}
        onClick={() => onSelect(vuelo)}
      >
        {isSelected ? '✓ Vuelo Seleccionado' : 'Seleccionar Vuelo'}
      </button>
    </div>
  );
}

export default FlightCard;
