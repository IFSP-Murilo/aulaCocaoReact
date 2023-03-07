
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rotas from './rotas/Rotas';
import Dashboard from './pages/Dashboard';
import Lista from './pages/professor/Lista';
import Incluir from './pages/professor/Incluir';
import IncluirCidade from './pages/cidade/Incluir';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
     <>
    
     <BrowserRouter>
      <Routes> 
        <>  
        <Route element={<Rotas/>}>
          <Route path="/" element={<Dashboard/>} /> 
          <Route path="/home" element={<Dashboard/>} /> 
          <Route path="/professor/lista" element={<Lista/>}/>
          <Route path="/professor/incluir" element={<Incluir/>}/>
          <Route path="/professor/alterar/:id" element={<Incluir/>}/>
          <Route path="/cidade/incluir" element={<IncluirCidade/>}/>
          <Route path="/cidade/lista" element={<Lista/>}/>
        </Route>   
        <ToastContainer />     
        </>
      </Routes>  
     </BrowserRouter>
     </>
     
  );
}

export default App;
