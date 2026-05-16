import React, { useState } from 'react';
import { X, TrendingUp, GraduationCap, MessageSquare } from 'lucide-react';

const PlayerDetailModal = ({ player, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-fade-in" style={{ maxWidth: '700px', height: 'auto', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{player.name} 상세 프로필</h2>
          <button onClick={onClose} className="icon-btn" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', borderBottom: '1px solid var(--border-color)', marginBottom: '20px', overflowX: 'auto', flexShrink: 0 }}>
          <button className={`tm-tab ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>기본 정보</button>
          <button className={`tm-tab ${activeTab === 'growth' ? 'active' : ''}`} onClick={() => setActiveTab('growth')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={14}/> 성장 이력</button>
          <button className={`tm-tab ${activeTab === 'edu' ? 'active' : ''}`} onClick={() => setActiveTab('edu')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><GraduationCap size={14}/> 교육 추천</button>
          <button className={`tm-tab ${activeTab === 'meet' ? 'active' : ''}`} onClick={() => setActiveTab('meet')} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageSquare size={14}/> 면담 요청</button>
        </div>

        <div className="modal-body" style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
          {activeTab === 'info' && (
             <div className="animate-fade-in">
               <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                 <img src={player.imageUrl} alt="Profile" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '2px solid var(--accent-blue)', objectFit: 'cover' }} />
                 <div>
                   <h3 style={{ margin: '0 0 5px' }}>{player.name} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{player.role} | {player.dept}</span></h3>
                   <p style={{ margin: '0 0 5px', fontSize: '0.9rem' }}>종합 OVR: <strong style={{ color: 'var(--accent-gold)' }}>{player.ovr}</strong> | 잠재력: {player.potential}</p>
                   <p style={{ margin: 0, fontSize: '0.9rem' }}>현재 담당 업무: 2024 하반기 전략 기획 등</p>
                 </div>
               </div>
               <h4 style={{ margin: '0 0 10px' }}>능력치 상세 (스탯 바)</h4>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                 {Object.entries(player.stats).map(([key, val]) => (
                   <div key={key} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                       <span>{key}</span> <strong>{val}</strong>
                     </div>
                     <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${val}%`, height: '100%', background: 'var(--accent-blue)', borderRadius: '3px' }}></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {activeTab === 'growth' && (
            <div className="animate-fade-in">
              <h4 style={{ marginTop: 0 }}>최근 3개월 성장률</h4>
              <p style={{ fontSize: '0.95rem' }}>3월 82점 → 4월 85점 → 5월 <strong style={{color: 'var(--accent-green)'}}>{player.ovr}점</strong></p>
              <div className="course-box" style={{ background: 'rgba(234, 179, 8, 0.1)', color: 'var(--accent-gold)', marginTop: '20px' }}>
                가장 많이 성장한 역량: <strong>문제해결력 +6</strong>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>* 실무 보고서 작성 프로젝트 참여 이후 해당 역량이 크게 상승했습니다.</p>
            </div>
          )}

          {activeTab === 'edu' && (
            <div className="animate-fade-in">
              <h4 style={{ marginTop: 0 }}>부족 역량 진단</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>리더십({player.stats.lead}), 적응력({player.stats.adapt}) 항목이 타 역량 대비 상대적으로 낮습니다.</p>
              
              <h4 style={{ marginTop: '25px', marginBottom: '10px' }}>AI 추천 교육</h4>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '15px', borderRadius: '8px', border: '1px solid var(--accent-green)' }}>
                <h5 style={{ margin: '0 0 5px' }}>실전 프로젝트 리더십 과정</h5>
                <p style={{ fontSize: '0.85rem', margin: '0 0 15px', color: 'var(--text-main)' }}>예상 효과: 리더십 +3, 적응력 +1</p>
                <button className="btn-primary" onClick={() => alert('교육이 추천 및 신청되었습니다.')}>교육 추천하기</button>
              </div>
            </div>
          )}

          {activeTab === 'meet' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h4 style={{ margin: 0 }}>{player.name} 직원에게 면담을 요청합니다</h4>
              <select className="modal-input">
                <option>성과 피드백 면담</option>
                <option>교육훈련 상담</option>
                <option>직무 이동 상담</option>
                <option>업무 부담 조정 면담 (권장)</option>
                <option>보상 관련 면담</option>
                <option>심리적 어려움 확인 면담</option>
              </select>
              <textarea className="modal-input" placeholder="사전 메시지를 입력하세요 (선택)" rows="4"></textarea>
              <button className="btn-primary" onClick={() => { alert('면담 요청이 발송되었습니다.'); onClose(); }}>면담 요청 발송</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailModal;
