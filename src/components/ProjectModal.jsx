import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ onClose }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ['데이터 분석', '보고서 작성', '문제해결력', '협업력', '커뮤니케이션', '리더십', '민원 대응 경험', '기획력', 'AI 활용 능력'];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>새 프로젝트 생성</h2>
          <button onClick={onClose} className="icon-btn" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        <p className="modal-subtitle">필요 역량을 입력하면 AI가 적합한 사내 인재를 추천합니다.</p>
        
        <div className="modal-body">
          <div className="form-group">
            <label>프로젝트명</label>
            <input type="text" placeholder="예: 2024 하반기 글로벌 마케팅 캠페인" className="modal-input" />
          </div>
          <div className="form-group">
            <label>프로젝트 목적</label>
            <textarea placeholder="프로젝트의 주요 목표를 입력하세요" rows="2" className="modal-input"></textarea>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>담당 부서</label>
              <input type="text" placeholder="예: 마케팅 팀" className="modal-input" />
            </div>
            <div className="form-group">
              <label>모집 인원</label>
              <input type="number" placeholder="0명" className="modal-input" />
            </div>
          </div>
          <div className="form-group">
            <label>필요 역량 (다중 선택 가능)</label>
            <div className="tag-selector">
              {tags.map(tag => (
                <button 
                  key={tag} 
                  className={`tag-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>예상 업무 부담도</label>
            <select className="modal-input">
              <option>낮음 (기존 업무 10% 미만)</option>
              <option>보통 (기존 업무 10~30%)</option>
              <option>높음 (전업 수준, 50% 이상)</option>
            </select>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>취소</button>
          <button className="btn-primary" onClick={() => { alert('프로젝트가 생성되어 AI가 적합한 인재를 스캐닝합니다.'); onClose(); }}>
            프로젝트 생성 및 AI 추천 받기
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
