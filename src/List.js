import React, {useState} from 'react'
import './List.css'
export default function List() {
    const [employees, setEmployees]=useState([
        {
            id:101,
            name :"Reethu",
            age:21,
            gender:"female"
        },
        {
            id:102,
            name:"Priya",
            age:22,
            gender:"female"
        },
        {
          id: 103,
          name:"Shree",
          age:23,
          gender:"female"
        },
        {
          id:104,
          name:"Radha",
          age:21,
          gender:"female"
        }
    ])
  return (
    <div className='employee-container'>
      {
        employees.map((emp)=>(
          <div className='employee' key={emp.id}>
            <p>Name : {emp.name}</p>
            <p>Age : {emp.age}</p>
            <p>Gender : {emp.gender}</p>
            <p>ID : {emp.id}</p>
          </div>
        ))
      }
    </div>
  )
}
