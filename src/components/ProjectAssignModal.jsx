import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const ProjectAssignModal = ({ player, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>프로젝트 배치 후보 추가</h2>
          <button onClick={onClose} className="icon-btn" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        
        <div className="modal-body">
          <p style={{ marginBottom: '20px', fontSize: '0.95rem' }}><strong>{player.name}</strong> 직원을 다음 진행 중인 프로젝트에 배치 검토합니다.</p>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '15px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h4 style={{ margin: 0 }}>민원 데이터 분석 프로젝트</h4>
              <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>적합도 92%</span>
            </div>
            <p style={{ margin: '0 0 5px', fontSize: '0.85rem' }}>예상 역할: 데이터 분석 담당</p>
            <p style={{ margin: '0 0 5px', fontSize: '0.85rem' }}>현재 업무 부담도: <strong>보통</strong></p>
            <p style={{ margin: '0 0 15px', fontSize: '0.85rem' }}>참여 가능 여부: <span style={{ color: 'var(--accent-green)' }}>참여 가능</span></p>
            <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }} onClick={() => { alert(`${player.name} 직원이 프로젝트 배치 후보로 등록되었습니다.`); onClose(); }}>
              <CheckCircle size={16} /> 최종 배치 신청
            </button>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h4 style={{ margin: 0 }}>하반기 글로벌 마케팅 캠페인</h4>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>적합도 75%</span>
            </div>
            <p style={{ margin: '0 0 5px', fontSize: '0.85rem' }}>예상 역할: 서브 기획자</p>
            <p style={{ margin: '0 0 15px', fontSize: '0.85rem' }}>참여 가능 여부: <span style={{ color: 'var(--accent-gold)' }}>업무 조율 필요</span></p>
            <button className="btn-secondary" style={{ width: '100%' }} onClick={() => { alert('배치 신청되었습니다.'); onClose(); }}>배치 신청</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectAssignModal;
