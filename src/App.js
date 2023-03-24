import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import "./lib/font-awesome/css/all.min.css";
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <React.Fragment>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </React.Fragment>
      </Routes>


    </>
  );
}

export default App;
