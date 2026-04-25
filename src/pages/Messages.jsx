import React from 'react';
import { Search, MoreHorizontal, Edit } from 'lucide-react';

function Messages() {
  const chats = [
    { id: 1, name: "Alex Rivera", lastMsg: "Thanks for the help!", time: "Oct 12" },
    { id: 2, name: "Sam Smith", lastMsg: "Check out this repo", time: "Oct 10" },
    { id: 3, name: "Maria Garcia", lastMsg: "Are you available for a call?", time: "Oct 8" },
    { id: 4, name: "Tech Hiring", lastMsg: "Your application status", time: "Oct 5" }
  ];

  return (
    <div className="app-layout" style={{ gridTemplateColumns: '320px 1fr' }}>
      <aside>
        <div className="card" style={{ padding: 0, height: '80vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Messaging</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <MoreHorizontal size={20} />
              <Edit size={20} />
            </div>
          </div>
          <div style={{ padding: '8px 16px' }}>
            <div className="search-box" style={{ width: '100%', margin: 0 }}>
              <Search size={16} />
              <input type="text" placeholder="Search messages" />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {chats.map(chat => (
              <div key={chat.id} style={{ display: 'flex', gap: '12px', padding: '12px 16px', borderBottom: '1px solid #f3f2ef', cursor: 'pointer' }}>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}`} alt="avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ margin: 0, fontSize: '0.9rem' }}>{chat.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'gray' }}>{chat.time}</span>
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'gray', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main>
        <div className="card" style={{ padding: 0, height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'gray' }}>
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Empty" alt="empty" style={{ width: 120, opacity: 0.5, marginBottom: '20px' }} />
           <h3>Select a message to view</h3>
           <p>Choose from existing conversations or start a new one.</p>
        </div>
      </main>
    </div>
  );
}

export default Messages;
