import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'secondary'|'ghost', size?: 'sm'|'md'|'icon' }
export default function Button({ className='', variant='default', size='md', ...props }: Props) {
  const variants = {
    default: 'bg-black text-white hover:opacity-90',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200',
    ghost: 'bg-transparent hover:bg-gray-100'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-xl',
    md: 'px-4 py-2 rounded-xl',
    icon: 'p-2 rounded-xl'
  }
  return <button className={`${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
