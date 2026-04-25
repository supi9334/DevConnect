import { Link, useLocation } from "react-router-dom";
import { Home, Users, Briefcase, MessageSquare, Bell, Search, LayoutGrid } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/" className="logo">in</Link>
          <div className="search-box">
            <Search size={16} color="gray" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        
        <div className="nav-right">
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link to="/network" className="nav-item">
            <Users size={24} />
            <span>My Network</span>
          </Link>
          <Link to="/jobs" className="nav-item">
            <Briefcase size={24} />
            <span>Jobs</span>
          </Link>
          <Link to="/messages" className="nav-item">
            <MessageSquare size={24} />
            <span>Messaging</span>
          </Link>
          <Link to="/notifications" className="nav-item">
            <Bell size={24} />
            <span>Notifications</span>
          </Link>
          <Link to="/profile" className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#ddd' }}></div>
            <span>Me</span>
          </Link>
          <div style={{ borderLeft: '1px solid #eee', height: '100%', margin: '0 10px' }}></div>
          <Link to="/work" className="nav-item">
            <LayoutGrid size={24} />
            <span>For Business</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
