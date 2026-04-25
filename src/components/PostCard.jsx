import { ThumbsUp, MessageSquare, Repeat2, Send, MoreHorizontal, Globe } from "lucide-react";

function PostCard({ post, toggleLike, deletePost, addComment }) {
  return (
    <div className="card">
      <div className="post-header">
        <div className="post-author-info">
          <img 
            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}`} 
            alt="avatar" 
            style={{ width: 48, height: 48, borderRadius: '4px' }}
          />
          <div style={{ marginLeft: '4px' }}>
            <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>Developer Community</h4>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'gray' }}>500,234 followers</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'gray', display: 'flex', alignItems: 'center', gap: '4px' }}>
              2h • <Globe size={12} />
            </p>
          </div>
        </div>
        <button style={{ color: 'gray', padding: '4px', borderRadius: '50%' }}><MoreHorizontal size={20} /></button>
      </div>

      <div className="post-content">
        <p style={{ margin: 0 }}>{post.text}</p>
      </div>

      <div className="post-stats">
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
           <div style={{ display: 'flex', marginLeft: '4px' }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#378fe9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}><ThumbsUp size={8} color="white" fill="white" /></div>
           </div>
           <span>{post.likes}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>{post.comments.length} comments</span>
          <span>•</span>
          <span>4 reposts</span>
        </div>
      </div>

      <div className="post-actions">
        <div className={`post-action ${post.likes > 0 ? 'active' : ''}`} onClick={() => toggleLike(post.id)}>
          <ThumbsUp size={20} />
          <span>Like</span>
        </div>
        <div className="post-action">
          <MessageSquare size={20} />
          <span>Comment</span>
        </div>
        <div className="post-action">
          <Repeat2 size={20} />
          <span>Repost</span>
        </div>
        <div className="post-action">
          <Send size={20} />
          <span>Send</span>
        </div>
      </div>

      <div className="comment-section">
        <div className="comment-input-area">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" 
            alt="me" 
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          />
          <input
            placeholder="Add a comment..."
            style={{ border: '1px solid #ccc', outline: 'none' }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value) {
                addComment(post.id, e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>

        {post.comments.map((c, i) => (
          <div key={i} className="comment-item">
            <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#eee', flexShrink: 0 }}></div>
            <div className="comment-bubble">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 600 }}>Connection {i + 1}</h4>
                <span style={{ fontSize: '0.7rem', color: 'gray' }}>1h</span>
              </div>
              <p style={{ margin: '4px 0', fontSize: '0.85rem' }}>{c}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
