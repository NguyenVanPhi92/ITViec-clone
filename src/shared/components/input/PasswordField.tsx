'use client'
import React, { useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri'

type PasswordFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, any> & {
  control: Control<any>
  name: string
  className?: string
  label?: string
}

export const PasswordField = ({
  className = '',
  label,
  control,
  name,
  // defaultValue,
  // onChange: externalOnChange,
  // onBlur: externalOnBlur,
  // ref: externalRef,
  // value: externalValue,
  ...attributes
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
    // defaultValue,
  })

  return (
    <div className={`form-item ${className}`}>
      {label && (
        <label htmlFor={name} className='form-label text-gray-color-7'>
          {label}
          {attributes?.required ? '*' : ''}
        </label>
      )}

      <div className='form-item-wrapper'>
        <input
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          value={value}
          className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
          id={name}
          type={showPassword ? 'text' : 'password'}
          {...attributes}
        />

        <span
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(20%)'
          }}
          onClick={() => setShowPassword((prev) => !prev)}
          className='form-item-input-pw-icon'
        >
          {!showPassword ? <RiEyeCloseLine /> : <RiEyeFill />}
        </span>
      </div>

      {error ? <p className='form-err-msg'>{error?.message}</p> : null}
    </div>
  )
}
