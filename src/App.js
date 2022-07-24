import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import { Route, Routes,useLocation } from 'react-router-dom';
import Signup from './pages/Signup';



function App() {
  const [loading,setLoading]=useState(true)
const spinner=document.getElementById("spinner")
const location=useLocation()

if(spinner){
  setTimeout(()=>{
    spinner.style.display="none";
    setLoading(false)
},3500)
}

  return (
    !loading && (
    <div className="App">
      {location.pathname==="/signup" || location.pathname==="/Login" ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {location.pathname==="/signup" || location.pathname==="/Login" ? null :<Footer />}
      
    </div>
  )
  );
}

export default App;
