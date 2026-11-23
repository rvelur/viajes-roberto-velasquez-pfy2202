import React from 'react';

function HotelCard({ hotel, isSelected, onSelect }) {
  return (
    <div className={`option-card ${isSelected ? 'selected' : ''}`}>
      <div className="option-header">
        <h4>🏨 {hotel.nombre}</h4>
        <span className="price-tag">${hotel.precioPorNoche} USD / noche</span>
      </div>
      <p className="option-meta">
        <strong>Categoría:</strong> {hotel.categoria}
      </p>
      <p className="option-meta">
        <strong>Fechas disponibles:</strong> {hotel.fechasDisponibles}
      </p>
      <p className="option-meta">
        <strong>Disponibilidad:</strong>{' '}
        <span className={hotel.habitacionesDisponibles <= 3 ? 'stock-low' : 'stock-ok'}>
          {hotel.habitacionesDisponibles} habitaciones disponibles
        </span>
      </p>
      <button
        type="button"
        className={`btn ${isSelected ? 'btn-selected' : 'btn-outline'}`}
        onClick={() => onSelect(hotel)}
      >
        {isSelected ? '✓ Hotel Seleccionado' : 'Seleccionar Hotel'}
      </button>
    </div>
  );
}

export default HotelCard;
