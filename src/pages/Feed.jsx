import { useState, useEffect } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { ChevronDown, Info } from "lucide-react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts"));
    if (saved) setPosts(saved);
    else {
      setPosts([
        {
          id: 1,
          text: "Excited to share that I've started a new position as a Front End Developer! Looking forward to this new chapter. #fresher #webdev",
          likes: 42,
          comments: ["Congratulations!", "Well deserved!"]
        },
        {
          id: 2,
          text: "Just finished a project using React and CSS Grid. It's amazing how powerful modern CSS has become! 💻✨",
          likes: 15,
          comments: ["Nice work!", "Could you share the repo?"]
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text,
      likes: 0,
      comments: []
    };
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const addComment = (id, comment) => {
    setPosts(posts.map(p =>
      p.id === id
        ? { ...p, comments: [...p.comments, comment] }
        : p
    ));
  };

  return (
    <div className="app-layout">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="card sidebar-profile">
          <div className="sidebar-header"></div>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="avatar" className="sidebar-avatar" />
          <div className="sidebar-info">
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Supriya Dev</h3>
            </Link>
            <p>Front End Developer | React Enthusiast</p>
          </div>
          <div style={{ padding: '12px', textAlign: 'left', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', cursor: 'pointer' }}>
              <span style={{ color: 'gray', fontWeight: 600 }}>Profile viewers</span>
              <span style={{ color: 'var(--linkedin-blue)', fontWeight: 600 }}>124</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span style={{ color: 'gray', fontWeight: 600 }}>Post impressions</span>
              <span style={{ color: 'var(--linkedin-blue)', fontWeight: 600 }}>1,042</span>
            </div>
          </div>
          <div style={{ padding: '12px', borderTop: '1px solid var(--border-color)', textAlign: 'left', fontSize: '0.75rem' }}>
            <p style={{ color: 'gray', marginBottom: '4px' }}>Access exclusive tools & insights</p>
            <p style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Try Premium for free</p>
          </div>
          <div style={{ padding: '12px', borderTop: '1px solid var(--border-color)', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
             My items
          </div>
        </div>

        <div className="card" style={{ padding: '12px', position: 'sticky', top: '70px' }}>
          <p style={{ color: 'var(--linkedin-blue)', fontWeight: 600, fontSize: '0.75rem', marginBottom: '12px' }}>Groups</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ color: 'var(--linkedin-blue)', fontWeight: 600, fontSize: '0.75rem' }}>Events</p>
            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>+</span>
          </div>
          <p style={{ color: 'var(--linkedin-blue)', fontWeight: 600, fontSize: '0.75rem' }}>Followed Hashtags</p>
          <div style={{ borderTop: '1px solid var(--border-color)', margin: '12px -12px', padding: '12px', textAlign: 'center', color: 'gray', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
            Discover more
          </div>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="feed">
        <CreatePost addPost={addPost} />
        <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--border-color)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px', fontSize: '0.75rem', color: 'gray' }}>
            <span>Sort by:</span>
            <span style={{ fontWeight: 600, color: 'black', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Top <ChevronDown size={14} /></span>
          </div>
        </div>
        {posts.map(p => (
          <PostCard
            key={p.id}
            post={p}
            toggleLike={toggleLike}
            deletePost={deletePost}
            addComment={addComment}
          />
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="widgets">
        <div className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>LinkedIn News</h3>
            <Info size={16} color="gray" />
          </div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
            <li style={{ marginBottom: '12px', cursor: 'pointer' }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>• Freshers hiring on the rise</div>
              <div style={{ color: 'gray', fontSize: '0.75rem' }}>Top news • 8,502 readers</div>
            </li>
            <li style={{ marginBottom: '12px', cursor: 'pointer' }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>• React 19: What's new?</div>
              <div style={{ color: 'gray', fontSize: '0.75rem' }}>2d ago • 15,120 readers</div>
            </li>
            <li style={{ marginBottom: '12px', cursor: 'pointer' }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>• Best portfolio tips for 2024</div>
              <div style={{ color: 'gray', fontSize: '0.75rem' }}>4h ago • 5,930 readers</div>
            </li>
            <li style={{ marginBottom: '12px', cursor: 'pointer' }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>• Remote jobs in Gurgaon</div>
              <div style={{ color: 'gray', fontSize: '0.75rem' }}>1d ago • 3,240 readers</div>
            </li>
          </ul>
          <button style={{ background: 'none', border: 'none', color: 'gray', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Show more <ChevronDown size={16} />
          </button>
        </div>

        <div className="card" style={{ padding: '12px', textAlign: 'center', position: 'sticky', top: '70px' }}>
           <p style={{ fontSize: '0.75rem', color: 'gray', marginBottom: '12px' }}>Get the latest insights</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
              <div style={{ width: 40, height: 40, background: 'var(--linkedin-blue)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>in</div>
           </div>
           <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '12px' }}>Supriya, explore relevant opportunities with <b>LinkedIn Premium</b></p>
           <button style={{ border: '1px solid var(--linkedin-blue)', color: 'var(--linkedin-blue)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600, background: 'none', cursor: 'pointer' }}>Subscribe</button>
        </div>
      </aside>
    </div>
  );
}

export default Feed;
