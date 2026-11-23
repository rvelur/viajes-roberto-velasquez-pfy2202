import { gql } from '@apollo/client';

export const GET_DESTINATION_DETAILS = gql`
  query GetDestinationDetails($destinationId: String!) {
    vuelos(destinationId: $destinationId) {
      id
      aerolinea
      origen
      fechaSalida
      fechaRegreso
      precio
      disponibilidad
    }
    hoteles(destinationId: $destinationId) {
      id
      nombre
      categoria
      fechasDisponibles
      precioPorNoche
      habitacionesDisponibles
    }
  }
`;
