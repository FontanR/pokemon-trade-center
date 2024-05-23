'use client'
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import userSchema from './validations/validations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { create } from '@/app/api/user/route'

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: joiResolver(userSchema) });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: any) => {
    const response = await create(data);
  }

  return (
    <>
      <div className='p-14 px-16'>
        <div className='mb-8'>
          <h1 className='text-2xl mb-4'>Create an account</h1>
          <p className='text-sm'>Please provide the following information</p>
          <p className='text-sm'>All fields are required (*)</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:flex justify-between gap-14'>
            <TextField
              className='mb-2'
              fullWidth
              label='First Name'
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name ? String(errors.name.message) : ' '}
            />
            <TextField
              className='mb-2'
              fullWidth
              label='Last Name'
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName ? String(errors.lastName.message) : ' '}
            />
          </div>
          <div className='lg:flex justify-between gap-14'>
            <TextField
              className='mb-2'
              fullWidth
              label='Email'
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? String(errors.email.message) : ' '}
            />
            <TextField
              className='mb-2'
              fullWidth
              label='Verify Email'
              {...register('verify_email')}
              error={!!errors.verify_email}
              helperText={errors.verify_email ? String(errors.verify_email) : ' '}
            />
          </div>
          <div className='lg:flex justify-between gap-14'>
            <TextField
              className='mb-2'
              fullWidth
              label='Password'
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? String(errors.password.message) : ' '}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className='mb-2'
              fullWidth
              label='Verify Password'
              type={showPassword ? 'text' : 'password'}
              {...register('verify_password')}
              error={!!errors.verify_password}
              helperText={errors.verify_password ? String(errors.verify_password.message) : ' '}
            />
          </div>
          <div className='flex justify-around'>
            <Link href='/'>
              <Button className='px-6' style={{ backgroundColor: '#818181' }} variant='contained'>
                Cancel
              </Button>
            </Link>
            <Button className='px-6' style={{ backgroundColor: '#1976d9' }} type='submit' variant='contained'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
