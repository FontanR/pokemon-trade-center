'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { seedCards } from '@/lib/seeds/seedCards';
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

export default function Home() {
  const [cardsData, setCardsData] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    async function fetchData(query: string) {
      try {
        const encodedQuery = query.replace(/ /g, '*');
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${encodedQuery}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': `${process.env.POKEMON_API_KEY}`,
          },
        });
        const data = await response.json();
        setCardsData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
    if (query !== null) {
      fetchData(query!);
    }
  }, [query]);

  useEffect(() => {
    if (query === null) {
      setCardsData(seedCards);
      setIsLoading(false);
    }
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className='flex justify-center p-10 text-2xl'>Loading...</div>
      ) : (
        <div className='flex flex-wrap justify-around items-center'>
          {cardsData &&
            cardsData.map((card) => (
              <Card
                key={card.id}
                sx={{ maxWidth: 280, height: '100%', margin: '0.5rem', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 390, width: '100%', objectFit: 'cover' }}
                    component='img'
                    image={card.images?.small}
                    alt={card.name}
                    className='lazy-load'
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
      )}
    </main>
  );
}
