import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Bell, Shield, ShieldOff, Plus } from 'lucide-react';
import ProjectModal from './ProjectModal';

const modes = [
  { id: 'admin', label: '관리자 모드' },
  { id: 'hr', label: 'HR 담당자 모드' },
  { id: 'leader', label: '팀장 모드' },
  { id: 'personal', label: '개인 모드' }
];

const Header = ({ currentMode, setCurrentMode }) => {
  const [isPrivacyOn, setIsPrivacyOn] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, text: '김지현 직원의 업무 부담도가 팀 평균 대비 135%입니다. 업무 재배분 검토가 필요합니다.', type: 'warning', time: '10분 전' },
    { id: 2, text: '새로운 프로젝트 [글로벌 마케팅 캠페인]에 적합한 인재 3명이 추천되었습니다.', type: 'info', time: '1시간 전' },
    { id: 3, text: '박서준 님께서 이번 주 Priority Sync 작성을 완료했습니다.', type: 'success', time: '3시간 전' },
  ];

  const handlePrivacyToggle = () => {
    const newState = !isPrivacyOn;
    setIsPrivacyOn(newState);
    if (newState) {
      alert('개인정보 보호 모드 ON\n개인별 세부 성과는 권한이 있는 사용자만 확인할 수 있습니다.');
    } else {
      alert('개인정보 보호 모드 OFF\n조직 전체 데이터가 상세히 노출됩니다.');
    }
  };

  return (
    <>
      <div className="app-top-navbar glass-panel">
        <div className="nav-left">
          <div className="brand-title">HR Transfer Market</div>
          <div className="mode-selector">
            {modes.map(mode => (
              <button 
                key={mode.id} 
                className={`mode-btn ${currentMode === mode.id ? 'active' : ''}`}
                onClick={() => setCurrentMode(mode.id)}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-center">
          <button className="nav-link">전사 인재맵</button>
          <button className="nav-link">교육훈련 관리</button>
          <button className="nav-link">보상 관리</button>
        </div>

        <div className="nav-right">
          <button className="btn-create-project" onClick={() => setShowProjectModal(true)}>
            <Plus size={16} /> 프로젝트 생성
          </button>
          
          <div className="notification-wrapper" ref={notifRef}>
            <button className="icon-btn notification-btn" onClick={() => setShowNotifications(!showNotifications)}>
              <Bell size={20} />
              <span className="badge">3</span>
            </button>
            {showNotifications && (
              <div className="notification-dropdown glass-panel animate-fade-in">
                <div className="nd-header">알림 센터</div>
                <div className="nd-list">
                  {notifications.map(n => (
                    <div key={n.id} className="nd-item">
                      <p>{n.text}</p>
                      <span>{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="privacy-toggle" onClick={handlePrivacyToggle}>
            {isPrivacyOn ? <Shield size={16} color="var(--accent-green)" /> : <ShieldOff size={16} color="var(--text-muted)" />}
            <span className={isPrivacyOn ? 'text-green' : 'text-muted'}>개인정보 보호 {isPrivacyOn ? 'ON' : 'OFF'}</span>
            <div className={`toggle-switch ${isPrivacyOn ? 'on' : 'off'}`}>
              <div className="toggle-knob"></div>
            </div>
          </div>
        </div>
      </div>

      {showProjectModal && createPortal(<ProjectModal onClose={() => setShowProjectModal(false)} />, document.body)}
    </>
  );
};

export default Header;
