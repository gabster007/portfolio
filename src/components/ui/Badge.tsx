import React from 'react'
export default function Badge({ children, variant='solid', className='' }:{ children:React.ReactNode; variant?:'solid'|'outline'; className?:string }){
  const base = 'inline-flex items-center rounded-full px-2.5 py-1 text-xs'
  const style = variant==='outline' ? 'border border-gray-300 dark:border-gray-600' : 'bg-gray-100 dark:bg-gray-800'
  return <span className={`${base} ${style} ${className}`}>{children}</span>
}
