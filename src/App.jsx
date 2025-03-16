import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const pic = 'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/473793442_1588523811868384_8150454761417647015_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHOl9JR-DYy4A9UN6NWV4VAVcfb9WYmWmJVx9v1ZiZaYvhtTjMNyv5c1KFR5D0NMzRy0lj3b6ioV0RzIgsy-Zv8&_nc_ohc=bmFXuBSTtnIQ7kNvgHE2gdN&_nc_oc=AdjCgEiWxjngYqLd0yVF6UfnVTTTWlYGPZvZZnu_r0LjPW9Gjko41OwnwdrUqOuY4uY8E8WQ9ogv2GA-W7iy_yET&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=_QsWtauTqUyo49dLHIiaxQ&oh=00_AYHs2-VDdD_mgzuHZsuUAoCJL91WFFEUJ8ubbUbqDrDwVQ&oe=67DCB90B'
const wellCome = [ " Xin chào", "Hello", "Bonjour", "Hola", "Ciao", "Hallo", "こんにちは", "안녕하세요", "สวัสดี", "Hi" ]

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

const name = "Xuân Bắc "
const isLogin = true
const person ={
  name: "Xuân Bắc",
  age: 30,
  address: "Hà Nội"
}
function DynamicValue() {
  return (
    <>
      <h2>Chào {name}</h2>
      <p>Kết quả: {1 + 2 + 3}</p>
      {/* Không sử dụng được câu lệnh chỉ sử dụng được toán tử 3 ngôi */}
      <p>{isLogin?"Bạn đã đăng nhập":"Bạn chưa đăng nhập"}</p>
      <p>{person.name} - {person.age} - {person.address}</p>
      <img src={pic} alt="" />
    </>
  )
}

function App() {

  return (
    <>
     <Header />
     <DynamicValue />
    </>
  )
}

export default App
