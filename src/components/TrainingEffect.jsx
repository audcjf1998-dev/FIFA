import React from 'react';
import { GraduationCap, TrendingUp } from 'lucide-react';

const TrainingEffect = () => {
  return (
    <div className="glass-panel training-effect h-full flex flex-col">
      <h3 className="panel-header" style={{color: 'var(--accent-green)'}}>
        <GraduationCap className="header-icon" /> 교육훈련 효과
      </h3>
      
      <div className="profile-row">
        <div className="profile-img">
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Jihyun" alt="김지현" />
        </div>
        <div className="profile-info">
          <h4>김지현</h4>
          <p>데이터 분석가 | Data팀</p>
        </div>
      </div>

      <div className="course-box">
        데이터 분석 교육 수료
      </div>

      <div className="stat-increase">
        <div className="stat-row-flex">
          <span>문제해결력</span>
          <div className="stat-value">78 <span className="arrow">→</span> 82 <span className="up-badge">+4 ↑</span></div>
        </div>
        <div className="stat-row-flex">
          <span>협업력</span>
          <div className="stat-value">74 <span className="arrow">→</span> 76 <span className="up-badge">+2 ↑</span></div>
        </div>
      </div>
      
      <div className="success-banner">
        <TrendingUp size={18} /> 역량이 향상되었습니다!
      </div>
    </div>
  );
};

export default TrainingEffect;
