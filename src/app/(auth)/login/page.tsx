'use client'
import { LoginBody, LoginBodyType } from '@/core/schema/auth.schema'
import InputField from '@/shared/components/input/InputField'
import { PasswordField } from '@/shared/components/input/PasswordField'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
  // useForm
  const {
    control,
    // handleSubmit,
    formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })
  return (
    <div className=''>
      <h2 className='text'>Login Page</h2>

      <form className='form-control w-80 mx-auto'>
        <div className='relative'>
          <InputField control={control} label='Email' required name='phone' type='text' placeholder='Số điện thoại' />
        </div>
        <div className='relative'>
          <PasswordField label='Password' required control={control} name='password' placeholder='Mật Khẩu' />
        </div>

        <button type='submit' className={`btn-primary ${!isValid ? 'btn-disabled' : ''}`}>
          Đăng nhập
        </button>

        <div className='form-item-forgot-pw'>
          <Link href='/reset_password'>Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  )
}
