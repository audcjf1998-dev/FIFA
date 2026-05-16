import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, Heart, CheckSquare, Square, FileText, UserPlus, AlertCircle } from 'lucide-react';
import './PlayerCard.css';

const PlayerCard = ({ player, isCompared, toggleCompare, onOpenDetail, onOpenAssign, onOpenWorkload }) => {
  // player가 undefined인 경우를 대비한 안전 장치 (예외처리)
  if (!player) return null;

  const [isFavorite, setIsFavorite] = useState(player.isFavorite || false);
  const FormIcon = player.form === 'up' ? TrendingUp : player.form === 'down' ? TrendingDown : Minus;
  const formClass = player.form === 'up' ? 'form-up' : player.form === 'down' ? 'form-down' : 'form-flat';

  return (
    <div className={`player-card card-${player.type || 'gold'} animate-fade-in`} style={{ position: 'relative' }}>
      <button 
        onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); alert(isFavorite ? '관심 인재에서 해제되었습니다.' : '관심 인재로 등록되었습니다.'); }}
        style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
        title="관심 인재 등록"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Heart size={22} color={isFavorite ? '#ef4444' : 'rgba(255,255,255,0.4)'} fill={isFavorite ? '#ef4444' : 'transparent'} />
      </button>

      {toggleCompare && (
        <button 
          onClick={(e) => { e.stopPropagation(); toggleCompare(player.id); }}
          style={{ position: 'absolute', top: '40px', right: '12px', zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', color: isCompared ? 'var(--accent-blue)' : 'rgba(255,255,255,0.4)' }}
          title="비교하기"
        >
          {isCompared ? <CheckSquare size={20} /> : <Square size={20} />}
        </button>
      )}

      <div className="card-top">
        <div className="card-ovr">
          <span className="ovr-value">{player.ovr}</span>
          <span className="ovr-role">{player.role ? player.role.substring(0, 2).toUpperCase() : ''}</span>
        </div>
        <div className="card-image-container">
          <img src={player.imageUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${player.name}`} alt={player.name} className="card-image" />
        </div>
      </div>

      <div className="card-info">
        <h3 className="card-name">{player.name}</h3>
        <p className="card-dept">{player.role} | {player.dept}</p>
      </div>

      <div className="card-stats">
        <div className="stat-row"><span>업무력</span><strong>{player.stats?.job}</strong></div>
        <div className="stat-row"><span>협업력</span><strong>{player.stats?.collab}</strong></div>
        <div className="stat-row"><span>해결력</span><strong>{player.stats?.prob}</strong></div>
        <div className="stat-row"><span>잠재력</span><strong>{player.stats?.growth}</strong></div>
        <div className="stat-row" style={{ gridColumn: 'span 2', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '2px' }}>
          * 리더십/적응력 등 상세 역량은 상세 보기에서 확인
        </div>
      </div>

      <div className="card-footer" style={{ paddingBottom: '10px', borderBottom: 'none' }}>
        <div className="footer-item">
          <span>포텐셜</span>
          <strong>{player.potential}</strong>
        </div>
        <div className="footer-item" style={{ cursor: 'pointer' }} onClick={onOpenWorkload}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>업무부담 <AlertCircle size={12} color="var(--accent-red)"/></span>
          <strong style={{ color: 'var(--accent-red)' }}>135%</strong>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', padding: '0 15px 15px' }}>
        <button className="btn-secondary" style={{ flex: 1, padding: '6px', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }} onClick={() => onOpenDetail && onOpenDetail(player)}>
          <FileText size={14} /> 상세
        </button>
        <button className="btn-primary" style={{ flex: 1, padding: '6px', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }} onClick={() => onOpenAssign && onOpenAssign(player)}>
          <UserPlus size={14} /> 배치
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
