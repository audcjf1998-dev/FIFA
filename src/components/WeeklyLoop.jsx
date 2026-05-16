import React, { useState } from 'react';
import { RefreshCw, Calendar, Activity, Scale, Users } from 'lucide-react';

const steps = [
  { id: 1, title: '월요일 Priority Sync', desc: '업무 우선순위 합의', icon: Calendar, color: 'var(--accent-blue)' },
  { id: 2, title: '수시 Context Tracker', desc: '진행 상태 추적', icon: Activity, color: 'var(--accent-green)' },
  { id: 3, title: '금요일 Equity Pulse', desc: '공정성 체감 체크', icon: Scale, color: '#a855f7' },
  { id: 4, title: '주말 AI Leadership Mirror', desc: '리더십 성찰 리포트', icon: Users, color: 'var(--accent-gold)' }
];

const WeeklyLoop = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="weekly-loop-container glass-panel">
      <div className="loop-left-title">
        <RefreshCw 
          className={`loop-spin-icon ${activeStep ? 'animate-spin-slow' : ''}`} 
          size={32} 
          color={steps[activeStep-1].color} 
          style={{ transition: 'color 0.5s', animationDuration: '3s' }}
        />
        <div className="loop-title-text">
          <h3>WEEKLY</h3>
          <h3>HR LOOP</h3>
          <p>지속적인 성장과 공정한 관리의 루프</p>
        </div>
      </div>

      <div className="loop-horizontal-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div 
              className={`h-step ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(step.id)}
              style={activeStep === step.id ? { borderColor: step.color } : {}}
            >
              <div 
                className="step-number" 
                style={activeStep === step.id ? { borderColor: step.color, background: step.color, color: '#000' } : { borderColor: step.color, color: step.color }}
              >
                {step.id}
              </div>
              <div className="h-step-content">
                <h4 style={{color: step.color}}><step.icon size={16}/> {step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="step-arrow">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeeklyLoop;
