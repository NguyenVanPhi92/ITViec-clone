'use client'
import { LoginBody, LoginBodyType } from '@/core/schema/auth.schema'
import InputField from '@/shared/components/input/InputField'
import { PasswordField } from '@/shared/components/input/PasswordField'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcCheckmark } from 'react-icons/fc'
import forgetImg from '../../../shared/assets/images/404.png'
import Image from 'next/image'

export default function ForgetPasswordPage() {
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
        <h2 className='text'>Quên mật khẩu?</h2>
        <form className='form-control w-96' noValidate onSubmit={handleSubmit(handleLogin)}>
          <div className='relative'>
            <InputField required control={control} label='Email' name='email' type='text' placeholder='nhập email' />
          </div>

          <button className='w-full mt-2 bg-red-600 py-1 rounded-lg text-white font-bold'>Đặt Lại Mật Khẩu</button>
          <p className='text-center py-2'>Hoặc</p>
          <button className='w-full border border-red-600 py-1 rounded-lg text-red-600 font-bold'>
            <Link href='login'>Đăng Nhập</Link>
          </button>
        </form>
      </div>

      <div className='content'>
        <Image src={forgetImg} alt='forget' width={400} height={400} />
      </div>
    </div>
  )
}
