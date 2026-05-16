import React from 'react';
import WeeklyLoop from './components/WeeklyLoop';
import TransferMarket from './components/TransferMarket';
import './App.css';

function App() {
  return (
    <div className="container">
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 className="header-title animate-fade-in">HR Transfer Market</h1>
        <p className="header-subtitle animate-fade-in">사내 인재 역량 카드 기반 AI HRM 플랫폼</p>
      </header>

      <main className="dashboard-grid">
        <div className="main-content">
          <TransferMarket />
        </div>
        <div className="side-panel">
          <WeeklyLoop />
        </div>
      </main>
    </div>
  );
}

export default App;
