import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

const WorkloadModal = ({ player, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <h2>업무 부담 상세 확인</h2>
          <button onClick={onClose} className="icon-btn" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        
        <div className="modal-body">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '2.5rem', margin: '10px 0', color: 'var(--accent-red)' }}>135%</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{player.name} 직원의 이번 주 업무량 (팀 평균 대비)</p>
          </div>
          
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--accent-red)', borderRadius: '8px', padding: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '15px' }}>
            <AlertTriangle color="var(--accent-red)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              추가 프로젝트 배정 시 과부하(번아웃) 위험이 높습니다. 업무 재분배 및 면담이 강력히 권장됩니다.
            </p>
          </div>

          <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
            <li>진행 중인 프로젝트 수: <strong>3개</strong></li>
            <li>마감 임박 업무: <strong style={{ color: 'var(--accent-red)' }}>2건</strong></li>
            <li>주간 초과 근무(야근): <strong>8시간</strong></li>
            <li>추가 배정 가능 여부: <strong style={{ color: 'var(--accent-red)' }}>불가</strong></li>
          </ul>
        </div>
        <div className="modal-footer" style={{ marginTop: '20px' }}>
          <button className="btn-primary" style={{ width: '100%' }} onClick={onClose}>확인</button>
        </div>
      </div>
    </div>
  );
};
export default WorkloadModal;
