import { useState } from "react";
import { Image, Video, Calendar, Newspaper } from "lucide-react";

function CreatePost({ addPost }) {
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text) return;
    addPost(text);
    setText("");
  };

  return (
    <div className="card create-post">
      <div className="create-top">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" 
          alt="avatar" 
          className="mini-avatar"
        />
        <button className="create-btn-trigger" onClick={() => {
          const content = prompt("What do you want to talk about?");
          if (content) addPost(content);
        }}>
          Start a post
        </button>
      </div>
      
      <div className="create-actions">
        <div className="action-btn">
          <Image size={20} color="#378fe9" />
          <span style={{ fontSize: '0.85rem' }}>Media</span>
        </div>
        <div className="action-btn">
          <Video size={20} color="#5f9b41" />
          <span style={{ fontSize: '0.85rem' }}>Video</span>
        </div>
        <div className="action-btn">
          <Calendar size={20} color="#c37d16" />
          <span style={{ fontSize: '0.85rem' }}>Event</span>
        </div>
        <div className="action-btn">
          <Newspaper size={20} color="#e06847" />
          <span style={{ fontSize: '0.85rem' }}>Write article</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
