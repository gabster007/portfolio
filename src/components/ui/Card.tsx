import React from 'react'
export function Card({ children, className='' }:{children:React.ReactNode; className?:string}){
  return <div className={`rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}>{children}</div>
}
export function CardHeader({ children, className='' }:{children:React.ReactNode; className?:string}){
  return <div className={`p-5 ${className}`}>{children}</div>
}
export function CardTitle({ children, className='' }:{children:React.ReactNode; className?:string}){
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}
export function CardDescription({ children, className='' }:{children:React.ReactNode; className?:string}){
  return <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
}
export function CardContent({ children, className='' }:{children:React.ReactNode; className?:string}){
  return <div className={`p-5 pt-0 ${className}`}>{children}</div>
}
