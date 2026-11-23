import { http, graphql, HttpResponse, delay } from 'msw';

const destinos = [
  {
    id: 'cancun',
    nombre: 'Cancún',
    pais: 'México',
    descripcion: 'Playas de arena blanca, aguas turquesas del Caribe y cultura maya.',
    imagen: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=800&q=80',
    actividadesPopulares: [
      'Excursión a Chichén Itzá',
      'Snorkel en Isla Mujeres',
      'Parque Xcaret',
      'Tour de cenotes sagrados'
    ]
  },
  {
    id: 'madrid',
    nombre: 'Madrid',
    pais: 'España',
    descripcion: 'Capital vibrante con museos de clase mundial, gastronomía y arquitectura histórica.',
    imagen: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    actividadesPopulares: [
      'Visita al Museo del Prado',
      'Paseo por el Parque del Retiro',
      'Ruta de tapas por La Latina',
      'Tour Estadio Santiago Bernabéu'
    ]
  },
  {
    id: 'tokio',
    nombre: 'Tokio',
    pais: 'Japón',
    descripcion: 'Fusión perfecta entre templos milenarios, tecnología de vanguardia y gastronomía.',
    imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    actividadesPopulares: [
      'Templo Senso-ji en Asakusa',
      'Cruce peatonal de Shibuya',
      'Excursión al Monte Fuji',
      'Experiencia gastronómica en Tsukiji'
    ]
  },
  {
    id: 'patagonia',
    nombre: 'Torres del Paine',
    pais: 'Chile',
    descripcion: 'Montañas escarpadas, glaciares milenarios y lagos esmeralda en el fin del mundo.',
    imagen: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
    actividadesPopulares: [
      'Trekking Base las Torres',
      'Navegación Glaciar Grey',
      'Avistamiento de fauna silvestre',
      'Circuito W guiado'
    ]
  }
];

const detallesPorDestino = {
  cancun: {
    vuelos: [
      {
        id: 'FL-101',
        aerolinea: 'LATAM Airlines',
        origen: 'Santiago (SCL)',
        fechaSalida: '2026-12-10',
        fechaRegreso: '2026-12-17',
        precio: 540,
        disponibilidad: 8
      },
      {
        id: 'FL-102',
        aerolinea: 'Aeroméxico',
        origen: 'Santiago (SCL)',
        fechaSalida: '2026-12-12',
        fechaRegreso: '2026-12-19',
        precio: 610,
        disponibilidad: 3
      }
    ],
    hoteles: [
      {
        id: 'HT-201',
        nombre: 'Grand Fiesta Americana Coral Beach',
        categoria: '5 Estrellas · Todo Incluido',
        fechasDisponibles: '10 Dic - 17 Dic 2026',
        precioPorNoche: 280,
        habitacionesDisponibles: 5
      },
      {
        id: 'HT-202',
        nombre: 'Hotel Nyx Cancún',
        categoria: '4 Estrellas · Frente al mar',
        fechasDisponibles: '10 Dic - 19 Dic 2026',
        precioPorNoche: 165,
        habitacionesDisponibles: 11
      }
    ]
  },
  madrid: {
    vuelos: [
      {
        id: 'FL-301',
        aerolinea: 'Iberia',
        origen: 'Santiago (SCL)',
        fechaSalida: '2026-12-05',
        fechaRegreso: '2026-12-15',
        precio: 890,
        disponibilidad: 6
      },
      {
        id: 'FL-302',
        aerolinea: 'LATAM Airlines',
        origen: 'Santiago (SCL)',
        fechaSalida: '2026-12-08',
        fechaRegreso: '2026-12-18',
        precio: 845,
        disponibilidad: 4
      }
    ],
    hoteles: [
      {
        id: 'HT-401',
        nombre: 'Hotel Riu Plaza España',
        categoria: '4 Estrellas · Gran Vía',
        fechasDisponibles: '05 Dic - 18 Dic 2026',
        precioPorNoche: 195,
        habitacionesDisponibles: 7
      },
      {
        id: 'HT-402',
        nombre: 'Only YOU Boutique Hotel',
        categoria: '5 Estrellas · Centro',
        fechasDisponibles: '05 Dic - 15 Dic 2026',
        precioPorNoche: 260,
        habitacionesDisponibles: 2
      }
    ]
  },
  tokio: {
    vuelos: [
      {
        id: 'FL-501',
        aerolinea: 'Japan Airlines (JAL)',
        origen: 'Santiago (SCL)',
        fechaSalida: '2027-01-10',
        fechaRegreso: '2027-01-22',
        precio: 1320,
        disponibilidad: 5
      }
    ],
    hoteles: [
      {
        id: 'HT-601',
        nombre: 'Hotel Gracery Shinjuku',
        categoria: '4 Estrellas · Shinjuku',
        fechasDisponibles: '10 Ene - 22 Ene 2027',
        precioPorNoche: 180,
        habitacionesDisponibles: 9
      },
      {
        id: 'HT-602',
        nombre: 'Park Hyatt Tokyo',
        categoria: '5 Estrellas · Lujo',
        fechasDisponibles: '10 Ene - 22 Ene 2027',
        precioPorNoche: 420,
        habitacionesDisponibles: 2
      }
    ]
  },
  patagonia: {
    vuelos: [
      {
        id: 'FL-701',
        aerolinea: 'SKY Airline',
        origen: 'Santiago (SCL) → Puerto Natales (PNT)',
        fechaSalida: '2026-12-14',
        fechaRegreso: '2026-12-20',
        precio: 145,
        disponibilidad: 12
      },
      {
        id: 'FL-702',
        aerolinea: 'LATAM Airlines',
        origen: 'Santiago (SCL) → Punta Arenas (PUQ)',
        fechaSalida: '2026-12-14',
        fechaRegreso: '2026-12-20',
        precio: 170,
        disponibilidad: 7
      }
    ],
    hoteles: [
      {
        id: 'HT-801',
        nombre: 'Hotel Lago Grey',
        categoria: '4 Estrellas · Parque Nacional',
        fechasDisponibles: '14 Dic - 20 Dic 2026',
        precioPorNoche: 240,
        habitacionesDisponibles: 4
      },
      {
        id: 'HT-802',
        nombre: 'EcoCamp Patagonia',
        categoria: 'Domos Sustentables · Todo Incluido',
        fechasDisponibles: '14 Dic - 20 Dic 2026',
        precioPorNoche: 350,
        habitacionesDisponibles: 3
      }
    ]
  }
};

export const handlers = [
  http.get(/\/api\/destinos/, async () => {
    await delay(400);
    return HttpResponse.json(destinos);
  }),

  graphql.query('GetDestinationDetails', async ({ variables }) => {
    const { destinationId } = variables;
    await delay(500);

    const detalle = detallesPorDestino[destinationId];

    if (!detalle) {
      return HttpResponse.json({
        errors: [
          {
            message: `No se encontraron vuelos ni hoteles para el destino "${destinationId}".`
          }
        ]
      });
    }

    return HttpResponse.json({
      data: {
        vuelos: detalle.vuelos,
        hoteles: detalle.hoteles
      }
    });
  })
];