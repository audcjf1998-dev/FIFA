import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import './PlayerCard.css';

const PlayerCard = ({ name, role, dept, ovr, stats, form, potential, imageUrl, type = 'gold' }) => {
  const FormIcon = form === 'up' ? TrendingUp : form === 'down' ? TrendingDown : Minus;
  const formClass = form === 'up' ? 'form-up' : form === 'down' ? 'form-down' : 'form-flat';

  return (
    <div className={`player-card card-${type} animate-fade-in`}>
      <div className="card-top">
        <div className="card-ovr">
          <span className="ovr-value">{ovr}</span>
          <span className="ovr-role">{role.substring(0, 2).toUpperCase()}</span>
        </div>
        <div className="card-image-container">
          <img src={imageUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${name}`} alt={name} className="card-image" />
        </div>
      </div>

      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-dept">{role} | {dept}</p>
      </div>

      <div className="card-stats">
        <div className="stat-row"><span>업무력</span><strong>{stats.job}</strong></div>
        <div className="stat-row"><span>협업력</span><strong>{stats.collab}</strong></div>
        <div className="stat-row"><span>해결력</span><strong>{stats.prob}</strong></div>
        <div className="stat-row"><span>잠재력</span><strong>{stats.growth}</strong></div>
        <div className="stat-row"><span>리더십</span><strong>{stats.lead}</strong></div>
        <div className="stat-row"><span>적응력</span><strong>{stats.adapt}</strong></div>
      </div>

      <div className="card-footer">
        <div className="footer-item">
          <span>포텐셜</span>
          <strong>{potential}</strong>
        </div>
        <div className="footer-item">
          <span>컨디션</span>
          <FormIcon size={16} className={formClass} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
