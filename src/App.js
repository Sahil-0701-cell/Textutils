import { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";


function App() {
  const[mode, setMode]=useState('light'); //weather dark mode is enabled or not
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
    }
  }
  return (
    <>
 {/* <Navbar title="Text.Anaylzer.Tool" aboutText="About T.A.T"/> */}
 <Router> 
 <Navbar title="Text.Anaylzer.Tool" aboutText="ABout T.A.T" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Routes>
          <Route exact path="/aboutus" element={<Aboutus mode={mode}/>}> </Route>
          <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/>}></Route>
 </Routes>

 </div>
 </Router>
    </>
  );
}

export default App;

