import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DestinationDetail from './pages/DestinationDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destino/:id" element={<DestinationDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Horizonte Travel · Agencia de Viajes · Desarrollo Frontend II (PFY2202)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
