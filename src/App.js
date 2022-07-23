import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Navbar from "./Components/Navbar"


function App() {
  const [loading,setLoading]=useState(true)
const spinner=document.getElementById("spinner")

if(spinner){
  setTimeout(()=>{
    spinner.style.display="none";
    setLoading(false)
},3500)
}

  return (
    !loading && (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  )
  );
}

export default App;
