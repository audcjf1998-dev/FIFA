import React from 'react';
import HRMConcept from './components/HRMConcept';
import TransferMarket from './components/TransferMarket';
import TrainingEffect from './components/TrainingEffect';
import AIRecommendation from './components/AIRecommendation';
import WeeklyLoop from './components/WeeklyLoop';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1 className="header-title animate-fade-in" style={{ fontSize: '3rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '10px' }}>
          HR <span style={{ color: 'var(--accent-green)' }}>Transfer Market</span>
        </h1>
        <p className="header-subtitle animate-fade-in">사내 인재 역량 카드 기반 HRM 플랫폼</p>
      </header>

      <main className="dashboard-grid animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="area-concept">
          <HRMConcept />
        </div>
        
        <div className="area-market">
          <TransferMarket />
        </div>
        
        <div className="area-right">
          <TrainingEffect />
          <AIRecommendation />
        </div>
        
        <div className="area-loop">
          <WeeklyLoop />
        </div>
      </main>

      <footer className="app-footer">
        평가를 넘어, <span>성장과 배치</span>를 연결하는 AI 기반 HRM
      </footer>
    </div>
  );
}

export default App;
