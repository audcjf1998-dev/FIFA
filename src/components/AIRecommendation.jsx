import React from 'react';
import { Sparkles, Folder, Briefcase, Target } from 'lucide-react';

const AIRecommendation = () => {
  return (
    <div className="glass-panel ai-recommendation">
      <h3 className="panel-header purple-header">
        <Sparkles className="header-icon" /> AI 추천
      </h3>
      
      <div className="rec-list">
        <div className="rec-item">
          <Folder className="rec-icon" />
          <div className="rec-content-box">
            <div className="rec-title-row">
              <span className="rec-title">A 프로젝트 적합도</span>
              <span className="rec-score" style={{color: 'var(--accent-green)'}}>92%</span>
            </div>
            <div className="rec-bar"><div className="rec-fill" style={{width: '92%', background: 'var(--accent-green)'}}></div></div>
          </div>
        </div>

        <div className="rec-item">
          <Briefcase className="rec-icon" />
          <div className="rec-content-box">
            <div className="rec-title-row">
              <span className="rec-title">마케팅 데이터 직무 적합도</span>
              <span className="rec-score" style={{color: 'var(--accent-blue)'}}>87%</span>
            </div>
            <div className="rec-bar"><div className="rec-fill" style={{width: '87%', background: 'var(--accent-blue)'}}></div></div>
          </div>
        </div>

        <div className="rec-item">
          <Target className="rec-icon" />
          <div className="rec-content-box">
            <div className="rec-title-row">
              <span className="rec-title">업무 방향성 일치도</span>
              <span className="rec-score" style={{color: '#a855f7'}}>90%</span>
            </div>
            <div className="rec-bar"><div className="rec-fill" style={{width: '90%', background: '#a855f7'}}></div></div>
          </div>
        </div>
      </div>
      
      <p className="rec-footer">AI가 최적의 기회와 역할을 추천합니다.</p>
    </div>
  );
};

export default AIRecommendation;
