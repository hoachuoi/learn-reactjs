import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const wellCome = [ " Xin chào", "Hello", "Bonjour", "Hola", "Ciao", "Hallo", "こんにちは", "안녕하세요", "สวัสดี","Hi" ]

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [greeting, setGreating] = useState(wellCome[Math.floor(Math.random()*10)])
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toLocaleDateString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    const interval1 = setInterval(() => {
      setGreating(wellCome[Math.floor(Math.random()*10)])
    }, 3000)
    return () => clearInterval(interval1)
  }, [])
  return (
    <>
      <h1>{greeting}</h1>
      <p>Hôm nay là: <strong> {date} </strong>, Thời gian hiện tại: 
      <strong>{time}</strong></p>
    </>
  )
}

function App() {

  return (
    <>
     <Header />
    </>
  )
}

export default App
