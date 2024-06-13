import React, {useState} from 'react'
import MainCar from './MainCar'
export default function CarDetails() {
    const [car, setCar]=useState([
        {
            name :"Toyota",
            price : 10000,
            description : "The Toyota car is a high-efficiency, compact, and autonomous agricultural robot designed to enhance farming productivity through advanced AI and robotics technology.",
            picture : "https://s.yimg.com/fz/api/res/1.2/yBUi66ymU_YSMSec6bnKvg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/249934addfabc6dbdcd7ddd9db94e46b"
        },
        {
            name : "BMW 3 Series",
            price : 2000000,
            description : "A premium compact sedan offering a blend of performance and luxury.",
            picture : "https://s.yimg.com/fz/api/res/1.2/yBUi66ymU_YSMSec6bnKvg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/249934addfabc6dbdcd7ddd9db94e46b"
        },
        {
            name : "Audi Q5",
            price : 2500000,
            description : "A luxury compact SUV with advanced technology and a comfortable ride.", 
            picture : "https://s.yimg.com/fz/api/res/1.2/yBUi66ymU_YSMSec6bnKvg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/249934addfabc6dbdcd7ddd9db94e46b"
        }
    ])

  return (
    <div>
        <MainCar cars={car}/>
      
    </div>
  )
}
