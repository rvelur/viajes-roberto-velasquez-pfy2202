import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';

function HomePage() {
  const [destinos, setDestinos] = useState([]);
  const [filtroPais, setFiltroPais] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.PUBLIC_URL || ''}/api/destinos`);
        if (!response.ok) {
          throw new Error('Error al obtener los destinos desde la API REST.');
        }
        const data = await response.json();
        setDestinos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinos();
  }, []);

  const paisesDisponibles = ['Todos', ...new Set(destinos.map((d) => d.pais))];

  const destinosFiltrados =
    filtroPais === 'Todos'
      ? destinos
      : destinos.filter((destino) => destino.pais === filtroPais);

  if (loading) {
    return <div className="status-message">Cargando destinos disponibles...</div>;
  }

  if (error) {
    return <div className="status-message error">Error: {error}</div>;
  }

  return (
    <section>
      <div className="hero-banner">
        <h1>Descubre tu próximo destino</h1>
        <p>
          Explora destinos internacionales, actividades populares y arma tu paquete de vuelos y
          hoteles en un solo lugar.
        </p>
      </div>

      <div className="filter-bar">
        <label htmlFor="filtro-pais">Filtrar por país:</label>
        <select
          id="filtro-pais"
          value={filtroPais}
          onChange={(e) => setFiltroPais(e.target.value)}
        >
          {paisesDisponibles.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
      </div>

      <div className="destinations-grid">
        {destinosFiltrados.map((destino) => (
          <DestinationCard key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
