import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const {setUser} = useContext(userContext);

    const handleClick = (e)=>{
       e.preventDefault();
       setUser({userName, password});
    }

  return (
    <div>
      <input
      type="text"
      placeholder='Enter your username'
      value={userName}
      onChange={(e)=> setUserName(e.target.value)}  
      />

      <input
      type="text"
      placeholder='Enter your password'
      value={password}
      onChange={(e)=> setPassWord(e.target.value)}  
      />

      <button type='submit' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login
