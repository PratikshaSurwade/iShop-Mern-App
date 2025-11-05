import { Route, Routes } from "react-router-dom"
import Hero from "./Pages/Hero"
import Navbar from "./Pages/Navbar"
import Storepage from "./Pages/Storepage"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login" 

function App() {

  return (
    <>
      <Navbar />
      <Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/store" element={<Storepage />} />
        <Route path="/store/:category" element={<Storepage />} />
        <Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
