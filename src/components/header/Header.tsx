'use client';
import { TextField, IconButton } from '@mui/material';
import {
  Search,
  Person,
  ShoppingCart,
  Menu,
  NewReleases,
  Inventory,
  VideogameAsset,
  Close,
  Facebook,
  X,
  YouTube,
} from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = () => {
    const trimmedValue = searchValue.trim();
    router.push(`?q=${trimmedValue}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className='flex flex-col items-center'>
      <div className='flex justify-between items-center w-screen px-4 py-2'>
        <IconButton className='lg:hidden' onClick={handleMenuOpen}>
          <Menu />
        </IconButton>
        {menuOpen && (
          <div className='fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50'>
            <ul className='w-screen flex flex-col justify-around bg-white'>
              <li className='self-end'>
                <IconButton className='p-3' onClick={handleMenuOpen}>
                  <Close />
                </IconButton>
              </li>
              <li className='flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700 p-4 border-b border-t border-gray-300'>
                <NewReleases />
                <span>New Releases</span>
              </li>
              <li className='flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700 p-4 border-b border-gray-300'>
                <Inventory />
                <span>TCG Accesories</span>
              </li>
              <li className='flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700 p-4 border-b border-gray-300'>
                <VideogameAsset />
                <a href='https://tcg.pokemon.com/es-es/tcgl/' target='_blank'>
                  Video Game
                </a>
              </li>
            </ul>
            <div className='bg-neutral-300'>
              <div className='px-6 py-3 w-52\] flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700'>
                <Person className='text-white' />
                <span className='text-white'>Sign In / Register</span>
              </div>
              <div className='flex justify-center p-4'>
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
        )}
        <div className='flex items-center'>
          <Image src='/pokeball.png' alt='Pokeball' width={35} height={35} priority />
          <h1 className='text-xl mx-2'>Pokemon Trade Center</h1>
        </div>
        <div className='flex'>
          <div className='flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700 px-4'>
            <Person />
            <span className='hidden lg:block'>Sign In / Register</span>
          </div>
          <div className='flex items-center cursor-pointer transition-colors duration-200 hover:text-blue-700 px-4'>
            <ShoppingCart />
            <span className='hidden lg:block'>My Cart</span>
          </div>
        </div>
      </div>
      <div className='flex items-center w-3/4 px-4 py-2'>
        <TextField
          id='search-input'
          fullWidth
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder='Search your favorites cards'
          onKeyUp={handleKeyPress}
        />
        <IconButton className='p-4' onClick={handleSearch}>
          <Search />
        </IconButton>
      </div>
      <ul className='hidden px-4 py-2 w-screen lg:flex lg:justify-around'>
        <li className='navbar-links'>
          <NewReleases />
          <span>New Releases</span>
        </li>
        <li className='navbar-links'>
          <Inventory />
          <span>TCG Accesories</span>
        </li>
        <li className='navbar-links'>
          <VideogameAsset />
          <a href='https://tcg.pokemon.com/es-es/tcgl/' target='_blank'>
            Video Game
          </a>
        </li>
      </ul>
    </header>
  );
}
