import React from 'react';
import { Bookmark, ClipboardList, Bell, Settings } from 'lucide-react';

function Jobs() {
  const jobList = [
    { id: 1, title: "Frontend Developer", company: "Meta", location: "Remote", time: "2 days ago" },
    { id: 2, title: "React Engineer", company: "Amazon", location: "Bangalore, India", time: "4 hours ago" },
    { id: 3, title: "Junior Web Developer", company: "StartupX", location: "Gurgaon, India", time: "1 day ago" },
    { id: 4, title: "Full Stack Developer", company: "Google", location: "Hyderabad, India", time: "6 hours ago" }
  ];

  return (
    <div className="app-layout" style={{ gridTemplateColumns: '300px 1fr' }}>
      <aside>
        <div className="card" style={{ padding: '12px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', fontWeight: 600 }}>
              <Bookmark size={20} /> My jobs
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', fontWeight: 600 }}>
              <Bell size={20} /> Job alerts
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', fontWeight: 600 }}>
              <ClipboardList size={20} /> Skill Assessments
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', fontWeight: 600 }}>
              <Settings size={20} /> Application Settings
            </li>
          </ul>
        </div>
        <button style={{ width: '100%', border: '1px solid var(--linkedin-blue)', color: 'var(--linkedin-blue)', padding: '12px', borderRadius: '4px', fontWeight: 600, background: 'none' }}>Post a free job</button>
      </aside>

      <main>
        <div className="card" style={{ padding: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>Recommended for you</h3>
          <p style={{ fontSize: '0.85rem', color: 'gray', marginBottom: '20px' }}>Based on your profile and search history</p>
          
          {jobList.map(job => (
            <div key={job.id} style={{ display: 'flex', gap: '16px', padding: '16px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ width: 48, height: 48, backgroundColor: '#eee', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{job.company[0]}</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: 'var(--linkedin-blue)', fontSize: '1rem' }}>{job.title}</h4>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>{job.company}</p>
                <p style={{ margin: '4px 0', fontSize: '0.85rem', color: 'gray' }}>{job.location}</p>
                <p style={{ margin: '4px 0', fontSize: '0.85rem', color: '#057642', fontWeight: 600 }}>Active recruiting</p>
                <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: 'gray' }}>{job.time}</p>
              </div>
              <Bookmark size={24} color="gray" />
            </div>
          ))}
          <button style={{ width: '100%', border: 'none', background: 'none', color: 'gray', padding: '16px', fontWeight: 600, cursor: 'pointer' }}>Show all</button>
        </div>
      </main>
    </div>
  );
}

export default Jobs;
