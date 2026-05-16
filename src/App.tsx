import React, { useState } from 'react';
import Header from './components/Header';
import HRMConcept from './components/HRMConcept';
import TransferMarket from './components/TransferMarket';
import TrainingEffect from './components/TrainingEffect';
import AIRecommendation from './components/AIRecommendation';
import WeeklyLoop from './components/WeeklyLoop';
import './App.css';

const modeData = {
  admin: { title: '전사 조직 현황', desc: '현재 업무 과부하 부서 2곳, 핵심 인재 이탈 위험 1건, 교육훈련 필요 부서 3곳이 감지되었습니다.', color: '#ef4444' },
  hr: { title: 'HR 담당자 대시보드', desc: '전사 직원의 역량, 교육, 성과, 보상 데이터를 기반으로 인사 업무를 지원합니다.', color: '#3b82f6' },
  leader: { title: '팀장 대시보드', desc: '팀원의 업무 흐름, 부담도, 프로젝트 적합도를 확인하고 균형 있는 팀 구성을 지원합니다.', color: '#eab308' },
  personal: { title: '나의 성장 대시보드', desc: '나의 역량, 업무, 교육, 컨디션을 확인하고 성장 방향을 관리합니다.', color: '#22c55e' },
};

function App() {
  const [currentMode, setCurrentMode] = useState('admin');

  return (
    <div className="container">
      <Header currentMode={currentMode} setCurrentMode={setCurrentMode} />
      
      <div className="mode-banner animate-fade-in" style={{ borderLeftColor: modeData[currentMode].color }}>
        <h2 style={{ color: modeData[currentMode].color }}>{modeData[currentMode].title}</h2>
        <p>{modeData[currentMode].desc}</p>
      </div>

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
