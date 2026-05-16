import React, { useState, useMemo } from 'react';
import PlayerCard from './PlayerCard';
import { Users, Filter, Search } from 'lucide-react';

const initialPlayers = [
  {
    id: 1, name: '김지현', role: 'Data Analyst', dept: 'Data 팀',
    ovr: 88, potential: 90, form: 'up', type: 'gold', isFavorite: true,
    stats: { job: 88, collab: 86, prob: 88, growth: 90, lead: 75, adapt: 82 },
    imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jihyun'
  },
  {
    id: 2, name: '이준호', role: 'Service PM', dept: 'CX 팀',
    ovr: 82, potential: 83, form: 'down', type: 'silver', isFavorite: false,
    stats: { job: 84, collab: 80, prob: 82, growth: 83, lead: 68, adapt: 79 },
    imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Junho'
  },
  {
    id: 3, name: '박서준', role: 'Product Manager', dept: 'PM 팀',
    ovr: 86, potential: 88, form: 'flat', type: 'gold', isFavorite: true,
    stats: { job: 87, collab: 84, prob: 86, growth: 88, lead: 78, adapt: 81 },
    imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Seojun'
  },
  {
    id: 4, name: '정민아', role: 'HRBP', dept: 'HR 팀',
    ovr: 76, potential: 76, form: 'flat', type: 'silver', isFavorite: false,
    stats: { job: 76, collab: 78, prob: 74, growth: 76, lead: 72, adapt: 75 },
    imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Mina'
  },
  {
    id: 5, name: '최도윤', role: 'Marketer', dept: '마케팅 팀',
    ovr: 80, potential: 83, form: 'up', type: 'blue', isFavorite: false,
    stats: { job: 81, collab: 79, prob: 80, growth: 83, lead: 70, adapt: 77 },
    imageUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Doyun'
  }
];

const tabs = ['전체 인재', '관심 인재', '내 팀', '프로젝트 매칭'];

const TransferMarket = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('전체 인재');
  const [sortDesc, setSortDesc] = useState(true);

  const filteredPlayers = useMemo(() => {
    let result = initialPlayers;

    // 1. 탭 필터링
    if (activeTab === '관심 인재') {
      result = result.filter(p => p.isFavorite);
    } else if (activeTab === '내 팀') {
      result = result.filter(p => p.dept === 'Data 팀'); // 가상 데이터
    }

    // 2. 검색어 필터링
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lower) || 
        p.role.toLowerCase().includes(lower) || 
        p.dept.toLowerCase().includes(lower)
      );
    }

    // 3. 정렬
    return result.sort((a, b) => sortDesc ? b.ovr - a.ovr : a.ovr - b.ovr);
  }, [searchTerm, activeTab, sortDesc]);

  return (
    <div className="glass-panel transfer-market-panel">
      <div className="tm-header">
        <h2 className="tm-title"><Users color="var(--text-main)" size={24} /> 인재 마켓</h2>
        <div className="tm-controls">
          <div className="tm-search">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="이름, 직무, 역량 검색" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="tm-btn" onClick={() => setSortDesc(!sortDesc)}>
            종합평가 순 {sortDesc ? '▼' : '▲'}
          </button>
        </div>
      </div>
      
      <div className="tm-tabs">
        {tabs.map(tab => (
          <div 
            key={tab} 
            className={`tm-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="tm-stats-bar">
        <span>👤 전체 인재 268명</span>
        <span>⭐ 핵심 인재 48명</span>
        <span>📁 프로젝트 참여 가능 76명</span>
        <span>🔄 사내 이동 가능 62명</span>
      </div>

      <div className="market-cards">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((p) => (
            <PlayerCard key={p.id} {...p} />
          ))
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
            조건에 맞는 인재가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default TransferMarket;
