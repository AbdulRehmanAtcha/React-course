import Navbar from './components/Navbar';
import './App.css';
import Form from './components/Form';
import Alerts from './components/Alerts';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }



  return (
    <>
      <Navbar titles="TextUtils" />
      <Alerts alert={alert} />
      <Routes>
        <Route path='/' element={<Form showAlert={showAlert} heading="Textutils - Word And Character Counter." />}/>
        <Route path='*' element={<Form showAlert={showAlert} heading="Textutils - Word And Character Counter." />}/>
      </Routes>
      
      
    </>
  );

}

export default App;
