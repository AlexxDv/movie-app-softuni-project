import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import "./lib/font-awesome/css/all.min.css";
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { GlobalProvider } from './components/context/GlobalState';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Footer } from './components/Footer';

function App() {
  return (
    <>

      <div className="page-container2">
        <div className="content-wrap2">
          <GlobalProvider>
            <Header />
            <Routes>

              <Route path="/" element={<Watchlist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/watched" element={<Watched />} />
              <Route path="/add" element={<Add />} />

            </Routes>
          </GlobalProvider>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
