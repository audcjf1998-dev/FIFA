import React from 'react';
import { TrendingUp, Brain, ShieldCheck, Repeat } from 'lucide-react';

const HRMConcept = () => {
  return (
    <div className="glass-panel hrm-concept">
      <h3 className="concept-title">HRM CONCEPT</h3>
      
      <div className="concept-item">
        <TrendingUp size={42} className="concept-icon" />
        <div className="concept-text">
          <h4>교육훈련으로 능력치 상승</h4>
          <p>역량 개발 현황을 한눈에</p>
        </div>
      </div>
      
      <div className="concept-item">
        <Brain size={42} className="concept-icon" />
        <div className="concept-text">
          <h4>직무 적합도 AI 추천</h4>
          <p>최적의 역할과 기회를 연결</p>
        </div>
      </div>
      
      <div className="concept-item">
        <ShieldCheck size={42} className="concept-icon" />
        <div className="concept-text">
          <h4>성과·공정성·리더십 통합 관리</h4>
          <p>공정하고 투명한 인재 관리</p>
        </div>
      </div>

      <div className="concept-item">
        <Repeat size={42} className="concept-icon" />
        <div className="concept-text">
          <h4>사내 이동 / 프로젝트 매칭</h4>
          <p>내부 인재의 최적 배치 실현</p>
        </div>
      </div>
    </div>
  );
};

export default HRMConcept;
