import React from 'react'

export default function MainCar(props) {

    console.log(props)
  return (
    <div>
     {
         props.cars.map((car)=>(
            <div>
                <p>{car.name}</p>
                <p>{car.price}</p>
                <p>{car.description}</p>
                <img src={car.picture} alt={car.name}/>
            </div>
          ))
     }
    </div>
  )
}
