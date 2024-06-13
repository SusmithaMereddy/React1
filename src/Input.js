import React, { useState } from 'react'

export default function Input() {
    const [username, setUserName] = useState('')
    const [password, setPassword]=useState('')
    function Submit(e){
          console.log(username,password)
    }
    return (
        <div>
            <p>
                <input placeholder='Enter Name' onChange={(e)=>{setUserName(e.target.value)}}/>
                <p>
                    <input placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <button onClick={Submit}>Submit</button>
            </p>
        </div>
    )
}
