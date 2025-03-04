'use client'
import React from 'react'
import { Control, useController } from 'react-hook-form'
type InputFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, any> & {
  control: Control<any>
  name: string
  className?: string
  label?: string
}

export default function InputField({
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
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
    // defaultValue
  })
  return (
    <div className={`form-item ${className}`}>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label} <span className='text-red-500'>{attributes?.required ? '*' : ''}</span>
        </label>
      )}

      <div className=''>
        <div className='w-full relative'>
          <input
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            value={value}
            className={`w-full bg-transparent ${
              error?.message ? 'border-[#ff3d3d] focus:border-[#ff3d3d]' : 'border-slate-200 focus:border-slate-400'
            } placeholder:text-slate-400 text-slate-700 text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300`}
            {...attributes}
          />
        </div>

        {error ? <p className='text-red-500 text-md'>{error?.message}</p> : null}
      </div>
    </div>
  )
}
