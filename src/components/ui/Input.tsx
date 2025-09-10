import React from 'react'
export default function Input(props:React.InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className={`w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black ${props.className??''}`} />
}
