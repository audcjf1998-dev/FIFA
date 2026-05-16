import React from 'react';
import { Calendar, Activity, Scale, Bot } from 'lucide-react';

const WeeklyLoop = () => {
  return (
    <div className="glass-panel weekly-loop animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h2 className="loop-header">
        <Activity color="var(--accent-green)" />
        주간 HR 루프 (Weekly HR Loop)
      </h2>
      <div className="loop-steps">
        <div className="loop-step">
          <div className="step-icon"><Calendar size={24} /></div>
          <div className="step-content">
            <h4>1. [월요일] Priority Sync (우선순위 동기화)</h4>
            <p>실무자가 핵심 업무 3가지를 입력하고 관리자가 조정. AI 일치도 90% 달성 시 삽질 제로.</p>
          </div>
        </div>
        <div className="loop-step">
          <div className="step-icon"><Activity size={24} /></div>
          <div className="step-content">
            <h4>2. [수시] Context Tracker (진행 상태 추적)</h4>
            <p>합의된 목표를 바탕으로 업무 진행. 관리자의 방향성 안에서 심리적 안정감을 얻고 성과 도출.</p>
          </div>
        </div>
        <div className="loop-step">
          <div className="step-icon"><Scale size={24} /></div>
          <div className="step-content">
            <h4>3. [금요일] Equity Pulse (공정성 체감 체크)</h4>
            <p>프로젝트 피드백. 아담스의 공정성 이론을 적용하여 '투입(야근) 대비 산출(보상)'의 균형 분석.</p>
          </div>
        </div>
        <div className="loop-step">
          <div className="step-icon"><Bot size={24} /></div>
          <div className="step-content">
            <h4>4. [주말] AI Leadership Mirror (리더십 성찰 거울)</h4>
            <p>감정이 배제된 정제된 리더십 성찰 리포트 제공. 다음 주 우선순위 회의 전 칭찬/업무량 재분배 유도.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyLoop;
