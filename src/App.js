
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
  
  
  
  
// } from "react-router-dom";




function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert= (messge,type)=>{
    setAlert({
      msg: messge,
      type: type
    })

  }


  const toggle= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#000b48'
      document.body.style.color="white"
      showAlert("Dark Mode is on")
    //   setInterval(()=>{


    
    //   document.title="Enable Dark Mode"
    // },2000)
    // setInterval(()=>{
    //   document.title="Install Now"
    // },1500)


    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'

      showAlert("Light Mode Is On")
    }
  }
  
  

  return (
   <>
   {/* <Router> */}
   
   <Navbar  title="title2" about="About Uss" mode={mode} toggle={toggle}  />
   <Alert alert={alert}/>
   {/* <Navbar/> */}

   <div className="container my-3">
   {/* <Routes> */}
          {/* <Route path="/about"
          element={<About/>} 
          /> */}
         
          {/* <Route path="/"
          element={<TextForm heading="Enter text to analyze below " mode={mode}/>}
          /> */}
          {/* </Routes>. */}
          <TextForm heading="Enter text to analyze below " mode={mode}/>
    
   
           
         
         
   

   
   </div>
   
   {/* </Router> */}
   
   </>
   
  );
}

export default App;
