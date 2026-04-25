import React from 'react';

const CommentBox = () => {
  return (
    <div style={{ marginTop: '16px', padding: '16px', background: 'var(--glass)', borderRadius: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <input 
          placeholder="Write a comment..." 
          style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', padding: '10px 16px' }}
        />
        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Reply</button>
      </div>
    </div>
  );
};

export default CommentBox;
