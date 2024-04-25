'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
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
interface HomeProps {
  cards: Card[];
}

export default function Home({ cards }: HomeProps) {
  const [cardsData, setCardsData] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData(query: string) {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': '9c9f753a-78c4-4927-a514-c6ba01cc1e88',
          },
        });
        const data = await response.json();
        setCardsData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData('charizard');
  }, []);

  console.log('cards', cardsData);

  return (
    <main>
      <h1 className='text-center'>Pokémon TCG Cards</h1>
      <div className='flex flex-wrap justify-around items-center'>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            sx={{ maxWidth: 280, height: '100%', margin: '0.5rem', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
            <CardActionArea>
              <CardMedia
                sx={{ height: 390, width: '100%', objectFit: 'cover' }}
                component='img'
                image={card.images?.small}
                alt={card.name}
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div' sx={{ height: 90 }}>
                  {card.name} {card.number}/{card.set.printedTotal} [{card.set.name}]
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  ${card.cardmarket?.prices.averageSellPrice}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </main>
  );
}
