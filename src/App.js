import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import PingPong from './router/pingpong';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEB-GAME-PACK</h1>
        <p>
          만든이 : 고강서
        </p>
        <Link 
          to="/pingpong"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#61dafb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          PingPong
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pingpong" element={<PingPong />} />
    </Routes>
  );
}

export default App;