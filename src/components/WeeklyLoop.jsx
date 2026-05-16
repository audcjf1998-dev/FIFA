import React from 'react';
import { RefreshCw, Calendar, Activity, Scale, Users } from 'lucide-react';

const WeeklyLoop = () => {
  return (
    <div className="weekly-loop-container glass-panel">
      <div className="loop-left-title">
        <RefreshCw className="loop-spin-icon" size={32} color="var(--accent-blue)" />
        <div className="loop-title-text">
          <h3>WEEKLY</h3>
          <h3>HR LOOP</h3>
          <p>지속적인 성장과 공정한 관리의 루프</p>
        </div>
      </div>

      <div className="loop-horizontal-steps">
        <div className="h-step active">
          <div className="step-number">1</div>
          <div className="h-step-content">
            <h4 style={{color: 'var(--accent-blue)'}}><Calendar size={16}/> 월요일 Priority Sync</h4>
            <p>업무 우선순위 합의</p>
          </div>
        </div>
        
        <div className="step-arrow">→</div>
        
        <div className="h-step">
          <div className="step-number" style={{borderColor: 'var(--accent-green)', color: 'var(--accent-green)'}}>2</div>
          <div className="h-step-content">
            <h4 style={{color: 'var(--accent-green)'}}><Activity size={16}/> 수시 Context Tracker</h4>
            <p>진행 상태 추적</p>
          </div>
        </div>

        <div className="step-arrow">→</div>
        
        <div className="h-step">
          <div className="step-number" style={{borderColor: '#a855f7', color: '#a855f7'}}>3</div>
          <div className="h-step-content">
            <h4 style={{color: '#a855f7'}}><Scale size={16}/> 금요일 Equity Pulse</h4>
            <p>공정성 체감 체크</p>
          </div>
        </div>

        <div className="step-arrow">→</div>
        
        <div className="h-step">
          <div className="step-number" style={{borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)'}}>4</div>
          <div className="h-step-content">
            <h4 style={{color: 'var(--accent-gold)'}}><Users size={16}/> AI Leadership Mirror</h4>
            <p>리더십 성찰 리포트</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyLoop;
