import React from 'react';
import PlayerCard from './PlayerCard';
import { Users, Filter } from 'lucide-react';

const TransferMarket = () => {
  const players = [
    {
      name: '김지현', role: 'Data Analyst', dept: 'Data 팀',
      ovr: 88, potential: 92, form: 'up', type: 'gold',
      stats: { job: 88, collab: 86, prob: 88, growth: 90, lead: 75, adapt: 82 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jihyun'
    },
    {
      name: '이준호', role: 'Service PM', dept: 'CX 팀',
      ovr: 82, potential: 88, form: 'flat', type: 'silver',
      stats: { job: 84, collab: 80, prob: 82, growth: 83, lead: 68, adapt: 79 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Junho'
    },
    {
      name: '박서준', role: 'Backend', dept: 'Dev 팀',
      ovr: 86, potential: 89, form: 'up', type: 'blue',
      stats: { job: 87, collab: 84, prob: 86, growth: 88, lead: 78, adapt: 81 },
      imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Seojun'
    }
  ];

  return (
    <div className="glass-panel transfer-market animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="market-header">
        <h2 className="market-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users color="var(--accent-gold)" /> 사내 이적 시장
        </h2>
        <button style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Filter size={16} /> 필터
        </button>
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
