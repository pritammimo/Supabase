import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import supabase from "./config/supabaseClient";


function App() {
  console.log(localStorage.getItem("supabase.auth.token"));
  const handleLogout=async()=>{
const { error } = await supabase.auth.signOut()
alert("Successfully logout")
  }
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {localStorage.getItem("supabase.auth.token") !==null && 
        <button onClick={handleLogout}>Logout</button>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
