import React from 'react';
import { Link } from 'react-router-dom';

function DestinationCard({ destino }) {
  return (
    <article className="card destination-card">
      <div className="card-image-wrapper">
        <img src={destino.imagen} alt={destino.nombre} className="card-image" />
        <span className="badge-country">{destino.pais}</span>
      </div>
      <div className="card-body">
        <h3>{destino.nombre}</h3>
        <p className="card-description">{destino.descripcion}</p>

        <div className="activities-section">
          <h4>Actividades populares:</h4>
          <ul className="activities-list">
            {destino.actividadesPopulares.map((actividad, index) => (
              <li key={index}>{actividad}</li>
            ))}
          </ul>
        </div>

        <Link to={`/destino/${destino.id}`} className="btn btn-primary btn-block">
          Ver Vuelos y Hoteles →
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;
