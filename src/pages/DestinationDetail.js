import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DESTINATION_DETAILS } from '../graphql/queries';
import FlightCard from '../components/FlightCard';
import HotelCard from '../components/HotelCard';
import TripSummary from '../components/TripSummary';

const NOMBRES_DESTINOS = {
  cancun: 'Cancún, México',
  madrid: 'Madrid, España',
  tokio: 'Tokio, Japón',
  patagonia: 'Torres del Paine, Chile'
};

function DestinationDetail() {
  const { id } = useParams();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const { loading, error, data } = useQuery(GET_DESTINATION_DETAILS, {
    variables: { destinationId: id }
  });

  const destinationName = NOMBRES_DESTINOS[id] || id.toUpperCase();

  if (loading) {
    return <div className="status-message">Consultando vuelos y hoteles disponibles...</div>;
  }

  if (error) {
    return (
      <div className="status-container">
        <div className="status-message error">Error: {error.message}</div>
        <Link to="/" className="btn btn-primary">
          ← Volver a Destinos
        </Link>
      </div>
    );
  }

  return (
    <section className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">
          ← Volver al listado de destinos
        </Link>
        <h1>Opciones de viaje para {destinationName}</h1>
        <p>Selecciona un vuelo y un alojamiento para configurar tu itinerario completo.</p>
      </div>

      <div className="detail-layout">
        <div className="options-column">
          <div className="options-block">
            <h2>Vuelos Disponibles</h2>
            <div className="options-grid">
              {data.vuelos.map((vuelo) => (
                <FlightCard
                  key={vuelo.id}
                  vuelo={vuelo}
                  isSelected={selectedFlight?.id === vuelo.id}
                  onSelect={(v) =>
                    setSelectedFlight(selectedFlight?.id === v.id ? null : v)
                  }
                />
              ))}
            </div>
          </div>

          <div className="options-block">
            <h2>Hoteles Disponibles</h2>
            <div className="options-grid">
              {data.hoteles.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  isSelected={selectedHotel?.id === hotel.id}
                  onSelect={(h) =>
                    setSelectedHotel(selectedHotel?.id === h.id ? null : h)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <TripSummary
          destinationName={destinationName}
          selectedFlight={selectedFlight}
          selectedHotel={selectedHotel}
        />
      </div>
    </section>
  );
}

export default DestinationDetail;
