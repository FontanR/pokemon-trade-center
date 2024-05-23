interface Card {
  id: string;
  name: string;
  images?: {
    small: string;
    large: string;
  };
  number: string;
  cardmarket?: {
    prices: {
      averageSellPrice: number;
    };
  };
  set: {
    name: string;
    printedTotal: number;
  };
}

export const seedCards: Card[] = [
  {
    id: 'sv5-203',
    name: 'Iron Leaves ex',
    set: {
      name: 'Temporal Forces',
      printedTotal: 162,
    },
    number: '203',
    images: {
      small: 'https://images.pokemontcg.io/sv5/203.png',
      large: 'https://images.pokemontcg.io/sv5/203_hires.png',
    },
    cardmarket: {
      prices: {
        averageSellPrice: 45.91,
      },
    },
  },
  {
    id: 'sv5-204',
    name: 'Gouging Fire ex',
    set: {
      name: 'Temporal Forces',
      printedTotal: 162,
    },
    number: '204',
    images: {
      small: 'https://images.pokemontcg.io/sv5/204.png',
      large: 'https://images.pokemontcg.io/sv5/204_hires.png',
    },
    cardmarket: {
      prices: {
        averageSellPrice: 51.62,
      },
    },
  },
  {
    id: 'sv5-208',
    name: 'Raging Bolt ex',
    set: {
      name: 'Temporal Forces',
      printedTotal: 162,
    },
    number: '208',
    images: {
      small: 'https://images.pokemontcg.io/sv5/208.png',
      large: 'https://images.pokemontcg.io/sv5/208_hires.png',
    },
    cardmarket: {
      prices: {
        averageSellPrice: 76.92,
      },
    },
  },
  {
    id: 'sv5-205',
    name: 'Walking Wake ex',
    set: {
      name: 'Temporal Forces',
      printedTotal: 162,
    },
    number: '205',
    images: {
      small: 'https://images.pokemontcg.io/sv5/205.png',
      large: 'https://images.pokemontcg.io/sv5/205_hires.png',
    },
    cardmarket: {
      prices: {
        averageSellPrice: 65.97,
      },
    },
  },
];
