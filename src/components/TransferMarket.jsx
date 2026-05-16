import React, { useState, useMemo } from 'react';
import PlayerCard from './PlayerCard';
import PlayerDetailModal from './PlayerDetailModal';
import ProjectAssignModal from './ProjectAssignModal';
import WorkloadModal from './WorkloadModal';
import { Users, Filter, Search, BarChart2 } from 'lucide-react';

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

  // Compare state
  const [comparedIds, setComparedIds] = useState([]);

  // Modal states
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalType, setModalType] = useState(null); // 'detail', 'assign', 'workload'

  const filteredPlayers = useMemo(() => {
    let result = initialPlayers;
    if (activeTab === '관심 인재') result = result.filter(p => p.isFavorite);
    else if (activeTab === '내 팀') result = result.filter(p => p.dept === 'Data 팀');

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lower) || p.role.toLowerCase().includes(lower) || p.dept.toLowerCase().includes(lower));
    }
    return result.sort((a, b) => sortDesc ? b.ovr - a.ovr : a.ovr - b.ovr);
  }, [searchTerm, activeTab, sortDesc]);

  const toggleCompare = (id) => {
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(cid => cid !== id));
    } else {
      if (comparedIds.length >= 3) {
        alert('최대 3명까지만 비교할 수 있습니다.');
        return;
      }
      setComparedIds([...comparedIds, id]);
    }
  };

  const handleOpenModal = (player, type) => {
    setSelectedPlayer(player);
    setModalType(type);
  };

  return (
    <div className="glass-panel transfer-market-panel" style={{ position: 'relative' }}>
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
          <div key={tab} className={`tm-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </div>
        ))}
      </div>

      <div className="market-cards" style={{ paddingBottom: comparedIds.length > 0 ? '60px' : '10px' }}>
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((p) => (
            <PlayerCard 
              key={p.id} 
              player={p} 
              isCompared={comparedIds.includes(p.id)}
              toggleCompare={toggleCompare}
              onOpenDetail={(player) => handleOpenModal(player, 'detail')}
              onOpenAssign={(player) => handleOpenModal(player, 'assign')}
              onOpenWorkload={() => handleOpenModal(p, 'workload')}
            />
          ))
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>조건에 맞는 인재가 없습니다.</div>
        )}
      </div>

      {comparedIds.length > 0 && (
        <div className="compare-floating-bar animate-fade-in" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-blue)', color: 'white', padding: '12px 24px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.4)', zIndex: 50 }}>
          <span style={{ fontWeight: 'bold' }}>{comparedIds.length}명 비교 선택됨</span>
          <button style={{ background: 'white', color: 'var(--accent-blue)', border: 'none', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => { alert('비교하기 모달을 띄웁니다.\n선택된 직원들의 능력치, 적합도, 업무 부담도가 한눈에 비교됩니다.'); setComparedIds([]); }}>
            <BarChart2 size={16} /> 비교하기
          </button>
          <button style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', marginLeft: '5px' }} onClick={() => setComparedIds([])}>초기화</button>
        </div>
      )}

      {/* Modals */}
      {modalType === 'detail' && selectedPlayer && <PlayerDetailModal player={selectedPlayer} onClose={() => setModalType(null)} />}
      {modalType === 'assign' && selectedPlayer && <ProjectAssignModal player={selectedPlayer} onClose={() => setModalType(null)} />}
      {modalType === 'workload' && selectedPlayer && <WorkloadModal player={selectedPlayer} onClose={() => setModalType(null)} />}
    </div>
  );
};

export default TransferMarket;
