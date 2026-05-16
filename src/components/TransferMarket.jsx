import React from 'react';
import PlayerCard from './PlayerCard';
import { Users, Filter, Search } from 'lucide-react';

const TransferMarket = () => {
  const players = [
    {
      name: '김지현', role: 'Data Analyst', dept: 'Data 팀',
      ovr: 88, potential: 90, form: 'up', type: 'gold',
      stats: { job: 88, collab: 86, prob: 88, growth: 90, lead: 75, adapt: 82 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jihyun'
    },
    {
      name: '이준호', role: 'Service PM', dept: 'CX 팀',
      ovr: 82, potential: 83, form: 'down', type: 'silver',
      stats: { job: 84, collab: 80, prob: 82, growth: 83, lead: 68, adapt: 79 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Junho'
    },
    {
      name: '박서준', role: 'Product Manager', dept: 'PM 팀',
      ovr: 86, potential: 88, form: 'flat', type: 'gold',
      stats: { job: 87, collab: 84, prob: 86, growth: 88, lead: 78, adapt: 81 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Seojun'
    },
    {
      name: '정민아', role: 'HRBP', dept: 'HR 팀',
      ovr: 76, potential: 76, form: 'flat', type: 'silver',
      stats: { job: 76, collab: 78, prob: 74, growth: 76, lead: 72, adapt: 75 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Mina'
    },
    {
      name: '최도윤', role: 'Marketer', dept: '마케팅 팀',
      ovr: 80, potential: 83, form: 'up', type: 'blue',
      stats: { job: 81, collab: 79, prob: 80, growth: 83, lead: 70, adapt: 77 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Doyun'
    }
  ];

  return (
    <div className="glass-panel transfer-market-panel">
      <div className="tm-header">
        <h2 className="tm-title"><Users color="var(--text-main)" size={24} /> 인재 마켓</h2>
        <div className="tm-controls">
          <div className="tm-search">
            <Search size={16} />
            <input type="text" placeholder="이름, 직무, 역량 검색" />
          </div>
          <button className="tm-btn"><Filter size={16} /> 필터</button>
          <button className="tm-btn">종합평가 순 ▼</button>
        </div>
      </div>
      
      <div className="tm-tabs">
        <div className="tm-tab active">전체 인재</div>
        <div className="tm-tab">관심 인재</div>
        <div className="tm-tab">내 팀</div>
        <div className="tm-tab">프로젝트 매칭</div>
        <div className="tm-tab">인재 검색</div>
      </div>

      <div className="tm-stats-bar">
        <span>👤 전체 인재 268명</span>
        <span>⭐ 핵심 인재 48명</span>
        <span>📁 프로젝트 참여 가능 76명</span>
        <span>🔄 사내 이동 가능 62명</span>
      </div>

      <div className="market-cards">
        {players.map((p, i) => (
          <PlayerCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default TransferMarket;
