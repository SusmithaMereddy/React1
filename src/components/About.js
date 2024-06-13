import React, {useState} from 'react'

export default function About() {
  const[newUser,setNewUser]=useState({
    username:'',
    email:'',
    password:''
  })
  //const handleuser=()=>
  function handleUser(e){
    const{name,value}=e.target
    console.log(name,value)
    setNewUser(prevUser=>({
      ...prevUser,[name]:value
    }))
  }
function Submit(){
  console.log(newUser)
  setNewUser({username:'',email:'',password:''})
}
  
  return (
    <div>
      <h1>This is about page</h1>
      <p>
      <input placeholder='Enter Name'
             name='username'
             value={newUser.username}
             onChange={handleUser}/>
      </p>
      <p>
        <input placeholder='Enter mail'
        name='email'
        value={newUser.email}
        onChange={handleUser}/>
      </p>
      <p>
        <input placeholder='Password'
        name='password'
        value={newUser.password}
        onChange={handleUser}/>
      <button onClick={(Submit)}>Submit</button>
      </p>
    </div>
  )
}
