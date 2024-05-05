'use client';

import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { Facebook, X, YouTube } from '@mui/icons-material';

export default function Footer() {

  return (
    <footer className='flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center uppercase space-y-2 bg-neutral-300 w-screen lg:flex-row'>
          <div className='flex flex-col justify-center items-center text-center w-screen bg-white lg:bg-neutral-300 lg:justify-around lg:w-1/4 lg:min-h-72'>
            <Image src='/pikachu.png' alt='Pikachu' width={150} height={150} quality={100} />
            <Button className='my-4' variant='outlined'>Get email updates</Button>
          </div>
          <div className='flex flex-col justify-center items-center text-center lg:justify-normal lg:w-1/4 lg:min-h-72'>
            <h2 className='font-bold pt-6 text-xl'>Categories</h2>
            <ul className='flex flex-col justify-center items-center text-sm lg:justify-normal'>
              <li className='cursor-pointer hover:underline'>Gift Cards</li>
              <li className='cursor-pointer hover:underline'>New Releases</li>
              <li className='cursor-pointer hover:underline'>Plus</li>
              <li className='cursor-pointer hover:underline'>Figures & Pins</li>
              <li className='cursor-pointer hover:underline'>Trading Card Game</li>
              <li className='cursor-pointer hover:underline'>Clothing</li>
              <li className='cursor-pointer hover:underline'>Home</li>
              <li className='cursor-pointer hover:underline'>Video Game</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-center text-center lg:justify-normal lg:w-1/4 lg:min-h-72'>
            <h2 className='font-bold pt-6 text-xl'>Customer Services</h2>
            <ul className='flex flex-col justify-center items-center text-sm lg:justify-normal'>
              <li className='cursor-pointer hover:underline'>Shipping</li>
              <li className='cursor-pointer hover:underline'>Return Policy</li>
              <li className='cursor-pointer hover:underline'>Order Status</li>
              <li className='cursor-pointer hover:underline'>Contact Us</li>
              <li className='cursor-pointer hover:underline'>FAQ</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-center text-center lg:justify-normal lg:w-1/4 lg:min-h-72'>
            <h2 className='font-bold pt-6 text-xl'>Site Info</h2>
            <ul className='flex flex-col justify-center items-center text-sm lg:justify-normal'>
              <li className='cursor-pointer hover:underline'>About pokemoncenter.com</li>
              <li className='cursor-pointer hover:underline'>About our plus</li>
            </ul>
            <div className='flex justify-center mt-4 lg:w-1/4 lg:mt-7'>
              <IconButton>
                <Facebook className='m-4' />
              </IconButton>
              <IconButton>
                <X className='m-4' />
              </IconButton>
              <IconButton>
                <YouTube className='m-4' />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
