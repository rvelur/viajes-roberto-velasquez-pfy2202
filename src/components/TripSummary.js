import React, { useState } from 'react';

function TripSummary({ destinationName, selectedFlight, selectedHotel }) {
  const [noches, setNoches] = useState(5);
  const [errorNoches, setErrorNoches] = useState('');
  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  const esNochesValido = !selectedHotel || (noches !== '' && Number(noches) >= 1);
  const nochesCalculo = noches !== '' && Number(noches) >= 1 ? Number(noches) : 0;

  const costoVuelo = selectedFlight ? selectedFlight.precio : 0;
  const costoHotel = selectedHotel ? selectedHotel.precioPorNoche * nochesCalculo : 0;
  const totalEstimado = costoVuelo + costoHotel;

  const handleNochesChange = (e) => {
    const valor = e.target.value;
    setReservaConfirmada(false);

    if (valor === '') {
      setNoches('');
      setErrorNoches('La cantidad de noches no puede quedar vac\u00eda.');
      return;
    }

    const numero = parseInt(valor, 10);
    if (!isNaN(numero) && numero >= 1) {
      setNoches(Math.min(30, numero));
      setErrorNoches('');
    }
  };

  const handleNochesBlur = () => {
    if (noches === '' || Number(noches) < 1) {
      setErrorNoches('La cantidad de noches no puede quedar vac\u00eda.');
    }
  };

  const handleConfirmar = () => {
    if (selectedHotel && (noches === '' || Number(noches) < 1)) {
      setErrorNoches('La cantidad de noches no puede quedar vac\u00eda.');
      return;
    }
    setErrorNoches('');
    setReservaConfirmada(true);
  };

  return (
    <aside className="trip-summary-box">
      <h3>{'\u{1F9F3}'} Tu Planificaci{'\u00f3'}n de Viaje</h3>
      <p className="summary-destination">
        Destino: <strong>{destinationName}</strong>
      </p>

      <div className="summary-item">
        <span>Vuelo:</span>
        <strong>
          {selectedFlight
            ? `${selectedFlight.aerolinea} ($${selectedFlight.precio} USD)`
            : 'Sin seleccionar'}
        </strong>
      </div>

      <div className="summary-item">
        <span>Hotel:</span>
        <strong>
          {selectedHotel
            ? `${selectedHotel.nombre} ($${selectedHotel.precioPorNoche}/noche)`
            : 'Sin seleccionar'}
        </strong>
      </div>

      {selectedHotel && (
        <div className="nights-block">
          <div className="nights-selector">
            <label htmlFor="noches-input">Cantidad de noches:</label>
            <input
              id="noches-input"
              type="number"
              min="1"
              max="30"
              value={noches}
              className={errorNoches ? 'input-error' : ''}
              onChange={handleNochesChange}
              onBlur={handleNochesBlur}
            />
          </div>
          {errorNoches && (
            <p className="field-error" role="alert">
              {errorNoches}
            </p>
          )}
        </div>
      )}

      <div className="summary-total">
        <span>Total estimado:</span>
        <strong>${totalEstimado} USD</strong>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block"
        disabled={(!selectedFlight && !selectedHotel) || !esNochesValido}
        onClick={handleConfirmar}
      >
        Confirmar Planificaci{'\u00f3'}n
      </button>

      {reservaConfirmada && (
        <div className="alert-success" role="status">
          {'\u00a1'}Itinerario guardado! Tu viaje a <strong>{destinationName}</strong> por{' '}
          <strong>${totalEstimado} USD</strong> est{'\u00e1'} listo.
        </div>
      )}
    </aside>
  );
}

export default TripSummary;