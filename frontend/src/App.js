import './app.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import ContasPagar from './pages/ContasPagar';
import ContasReceber from './pages/ContasReceber';
import Extrato from './pages/Extrato';
import Auth from './pages/Auth';
import { AuthContextProvider } from './data/context/AuthContext';
import { AppContextProvider } from './data/context/AppContext';

export default function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contas-pagar" element={<ContasPagar/>}/>
            <Route path="/contas-receber" element={<ContasReceber/>}/>
            <Route path="/extrato" element={<Extrato/>}/>
            <Route path="/autenticacao" element={<Auth/>}/>
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </div>
  );
}

