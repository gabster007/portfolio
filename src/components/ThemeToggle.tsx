import React from 'react'
import Button from './ui/Button'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle(){
  const [dark, setDark] = React.useState(false)
  React.useEffect(()=>{
    const root = document.documentElement
    if(dark){ root.classList.add('dark') } else { root.classList.remove('dark') }
  },[dark])
  return (
    <Button aria-label="toggle theme" variant="ghost" size="icon" onClick={()=>setDark(d=>!d)}>
      {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
    </Button>
  )
}
