import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import PingPong from './router/pingpong';
import LinkPortal from './router/linkportal';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color: '#AEA1EA'}}>게임 링크 포털(2인용 탁구게임)</h1>
        <Link 
          to="/pingpong"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#AEA1EA',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          탁구 게임
        </Link>

        <Link 
          to="/linkportal"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#AEA1EA',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          게임 링크
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
      <Route path="/linkportal" element={<LinkPortal />} />
    </Routes>
  );
}

export default App;