import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrahPage from './orahPage';
import BrigAIPage from './brigAIPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orah" element={<OrahPage />} />
        <Route path="/brigai" element={<BrigAIPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
