'use client'
import { LoginBody, LoginBodyType } from '@/core/schema/auth.schema'
import InputField from '@/shared/components/input/InputField'
import { PasswordField } from '@/shared/components/input/PasswordField'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcCheckmark } from 'react-icons/fc'

export default function LoginPage() {
  // useForm
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  const handleLogin = (data: LoginBodyType) => console.log('data form: ', data)

  return (
    <div className='flex gap-x-6 my-20 justify-center'>
      <div className='form'>
        <h2 className='text'>Login Page</h2>
        <form className='form-control w-80' onSubmit={handleSubmit(handleLogin)}>
          <div className='relative'>
            <InputField control={control} label='Email' required name='phone' type='text' placeholder='nhập email' />
          </div>
          <div className='relative'>
            <PasswordField label='Password' required control={control} name='password' placeholder='Mật Khẩu' />
          </div>

          <button type='submit' className={`btn-primary ${!isValid ? 'btn-disabled' : ''}`}>
            Đăng nhập
          </button>

          <div className='form-item-forgot-pw'>
            <Link href='/register'>Đăng Ký</Link>
            <Link href='/reset_password'>Quên mật khẩu</Link>
          </div>
        </form>
      </div>

      <div className='content'>
        <h4 className='font-bold text-xl'>
          Sign in to get instant access to thousands of reviews and salary information
        </h4>
        <div className='flex items-center gap-x-2'>
          <FcCheckmark />
          <p>View salary to help you negotiate your offer or pay rise</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FcCheckmark />
          <p>Find out about benefits, interview, company culture via reviews</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FcCheckmark />
          <p>Easy apply with only 1 click</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FcCheckmark />
          <p>Manage your own profile & privacy</p>
        </div>
      </div>
    </div>
  )
}
