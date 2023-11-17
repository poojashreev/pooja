import React, { useState } from 'react'

const Header = () => {
    const[name,setName]=useState("pooja")
  return (
    <div>
        <h2> my name is {name}</h2>
        <button onClick={()=>setName("ram")}>Click here</button>
      
    </div>

    
  )
}

export default Header