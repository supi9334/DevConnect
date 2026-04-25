import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function Notifications() {
  const notifications = [
    { id: 1, type: "view", text: "Alex Johnson and 4 others viewed your profile.", time: "2h" },
    { id: 2, type: "like", text: "Maria Garcia liked your post: 'Just finished a project...'", time: "4h" },
    { id: 3, type: "job", text: "There are 5 new jobs matching your alerts.", time: "1d" },
    { id: 4, type: "post", text: "Sam Lee shared a post: 'What are your thoughts on React 19?'", time: "2d" }
  ];

  return (
    <div className="app-layout" style={{ gridTemplateColumns: '225px 1fr 300px' }}>
      <aside>
        <div className="card" style={{ padding: '16px' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>Manage your Notifications</h3>
          <p style={{ color: 'var(--linkedin-blue)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>View Settings</p>
        </div>
      </aside>

      <main>
        <div className="card" style={{ padding: 0 }}>
          {notifications.map(notif => (
            <div key={notif.id} style={{ display: 'flex', gap: '12px', padding: '16px', borderBottom: '1px solid #f3f2ef', cursor: 'pointer', backgroundColor: notif.id === 1 ? '#eef3f8' : 'transparent' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#eee', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                {notif.type === 'view' ? '👀' : notif.type === 'like' ? '❤️' : notif.type === 'job' ? '💼' : '📝'}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.4' }}>{notif.text}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'gray' }}>{notif.time}</span>
                <MoreHorizontal size={16} color="gray" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <aside className="widgets">
        <div className="card" style={{ padding: '12px' }}>
          <p style={{ fontSize: '0.8rem', color: 'gray', textAlign: 'center' }}>Keep up with your network and career opportunities.</p>
        </div>
      </aside>
    </div>
  );
}

export default Notifications;
