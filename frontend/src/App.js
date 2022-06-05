import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Pay from './pages/Pay';
import Receive from './pages/Receive';
import Extract from './pages/Extract';
import Auth from './pages/Auth';

import { AuthContextProvider } from './data/context/AuthContext';
import { AppContextProvider } from './data/context/AppContext';


export default function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contas-pagar" element={<Pay/>}/>
          <Route path="/contas-receber" element={<Receive/>}/>
          <Route path="/extrato" element={<Extract/>}/>
          <Route path="/autenticacao" element={<Auth/>}/>
        </Routes>
      </AppContextProvider>
    </AuthContextProvider>
  );
}