import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import { isElectron } from './utils';


import NewUser from './components/NewUser';
import Main from './components/Main';
import Monitoring from './components/Monitoring';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import WithRouter from './components/Redireccion';
import MasEstadisticas from './components/MasEstadisticas';
import Album from './components/Album';
import ConsolaAdmin from './components/ConsolaAdmin'


export const history = isElectron()
  ? createHashHistory()
  : createBrowserHistory();


function App() {
  return(
    <div className='App'>
      <React.StrictMode>
        <Router  history={history}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login/:usuario' element={<WithRouter/>}></Route>
            <Route path='/NewUser' element={<NewUser />}></Route>
            <Route path='/Main' element={<Main/>}></Route>
            <Route path='/Monitoring' element={<Monitoring/>}></Route>
            <Route path='/Work' element={<Work/>}></Route>
            <Route path='/Gallery' element={<Gallery/>}></Route>
            <Route path='/Statistics' element={<Statistics/>}></Route>
            <Route path='/MasEstadisticas' element={<MasEstadisticas/>}></Route>
            <Route path='/Album' element={<Album/>}></Route>
            <Route path='/Consola' element={<ConsolaAdmin />}></Route>
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
