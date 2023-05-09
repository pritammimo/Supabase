import React,{useState} from 'react'
import supabase from '../config/supabaseClient';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   const handleSubmit=async(e)=>{
    e.preventDefault()
    
const { user, session, error } = await supabase.auth.signIn({
    email,
    password
  })
  if(user){
    navigate("/")
    localStorage.setItem("user",session)
  }
      console.log("error",user,session);
   }
   console.log("name",email,password);
  return (
    <form onSubmit={handleSubmit}>
    

    <label htmlFor="method">Email:</label>
    <input
      type="email"
      id="method"
      value={email}
      onChange={(e) => setemail(e.target.value)}
    />

    <label htmlFor="password">Password:</label>
    <input 
      type="password"
      id="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    />

    <button type="submit">Login</button>
  </form>
  )
}

export default Login