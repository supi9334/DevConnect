import React from 'react';
import { UserPlus, Users, Calendar, Newspaper, Hash } from 'lucide-react';

function Network() {
  const suggestions = [
    { id: 1, name: "Alex Johnson", role: "Software Engineer at Google", connections: 12 },
    { id: 2, name: "Maria Garcia", role: "Frontend Developer at Meta", connections: 8 },
    { id: 3, name: "Sam Lee", role: "Full Stack Dev at Amazon", connections: 15 },
    { id: 4, name: "Chris Evans", role: "UI/UX Designer", connections: 5 }
  ];

  return (
    <div className="app-layout" style={{ gridTemplateColumns: '300px 1fr' }}>
      <aside>
        <div className="card" style={{ padding: '12px' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '16px' }}>Manage my network</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: 'gray' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Users size={20} /> Connections</span>
              <span>450</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: 'gray' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><UserPlus size={20} /> Following & followers</span>
              <span>120</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: 'gray' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Calendar size={20} /> Events</span>
              <span>3</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: 'gray' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Newspaper size={20} /> Pages</span>
              <span>24</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: 'gray' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Hash size={20} /> Hashtags</span>
              <span>8</span>
            </li>
          </ul>
        </div>
      </aside>

      <main>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>Invitations</h3>
            <button style={{ background: 'none', border: 'none', color: 'gray', fontWeight: 600 }}>See all</button>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', color: 'gray' }}>
            No pending invitations
          </div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>People you may know</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {suggestions.map(person => (
              <div key={person.id} className="card" style={{ textAlign: 'center', padding: '12px', margin: 0 }}>
                <div style={{ height: '60px', background: '#a0b4b7', margin: '-12px -12px 30px' }}></div>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`} alt="avatar" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white', marginTop: '-60px' }} />
                <h4 style={{ margin: '8px 0 2px', fontSize: '0.9rem' }}>{person.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'gray', height: '32px', overflow: 'hidden' }}>{person.role}</p>
                <p style={{ fontSize: '0.7rem', color: 'gray', margin: '8px 0' }}>{person.connections} mutual connections</p>
                <button style={{ width: '100%', border: '1px solid var(--linkedin-blue)', color: 'var(--linkedin-blue)', padding: '6px', borderRadius: '20px', fontWeight: 600, background: 'none' }}>Connect</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Network;
