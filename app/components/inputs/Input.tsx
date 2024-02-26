'use client'

import clsx from 'clsx'
import React, { ChangeEventHandler, HTMLInputTypeAttribute, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PREFIX_LIST = [
  { id: "1", label: '+62' },
  { id: "2", label: '+61' },
]

type Props = {
  id: string
  type?: HTMLInputTypeAttribute
  label: string
  name: string
  value?: string | number
  htmlFor?: string
  placeholder: string
  disabled?: boolean
  styles?: string
  labelStyles?: string
  onChange?: ChangeEventHandler
  isError?: boolean
  errorMessage?: string
  isPhoneNumber?: boolean
}

const Input: React.FC<Props> = ({
  id,
  type,
  label,
  name,
  value,
  htmlFor,
  placeholder,
  disabled,
  styles,
  labelStyles,
  onChange = () => {},
  isError,
  isPhoneNumber = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles}>
      <label
        htmlFor={htmlFor}
        className={`
        ${labelStyles}
          block
          text-xs
          font-medium
          text-neutral-400
          text-start
        `}
      >
        {value && label}
        <div className='relative mt-2'>
          {isPhoneNumber && (
            <select className='absolute inset-y-0 left-4 bg-transparent text-sm' name="prefix" id="prefix" defaultValue={PREFIX_LIST[0].id}>
              {PREFIX_LIST.map((item, index) => (
                <option key={index} value={item.id}>{item.label}</option>
              ))}
            </select>
          )}
          <input
            id={id}
            type={showPassword ? 'text' : type}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={clsx(`
              form-input
              text-gray-900
              sm:text-sm
              sm:leading-6
              items-center
              w-full
              rounded-lg
              border-0
              shadow-sm
              ring-1
              ring-inset
              ring-[#D9D9D9]
              placeholder:text-gray-400 p-4`,
              isError && 'focus:ring-rose-500',
              disabled && 'opacity-50 cursor-default',
              isPhoneNumber && 'ps-20'
            )}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center px-4"
            >
              {showPassword ? <FaEyeSlash color='#9A9A9A' /> : <FaEye color='#9A9A9A' />}
            </button>
          )}
        </div>
      </label>
    </div>
  )
}

export default Input