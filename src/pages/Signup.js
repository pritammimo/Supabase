import React,{useState} from 'react'
import supabase from '../config/supabaseClient';

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   const handleSubmit=async(e)=>{
    e.preventDefault()
    
const { user, session, error } = await supabase.auth.signUp(
    {
      email,
      password
    },
    {
      data: {
        name
      }
    }
  )
     
      alert("check your email for verification")
   }
   console.log("name",name,email,password);
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">Name:</label>
    <input 
      type="text" 
      id="title"
      value={name}
      onChange={(e) => setname(e.target.value)}
    />

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

    <button type="submit">Registration</button>
  </form>
  )
}

export default Signup