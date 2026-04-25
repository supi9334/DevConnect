import React from 'react';
import { Target, Users, Layout, ShieldCheck } from 'lucide-react';

function Business() {
  const products = [
    { title: "Learning", desc: "Develop talent with online courses.", icon: <Layout size={32} color="#0a66c2" /> },
    { title: "Insights", desc: "Analyze and benchmark your talent.", icon: <Target size={32} color="#0a66c2" /> },
    { title: "Post a Job", desc: "Find the right candidates fast.", icon: <ShieldCheck size={32} color="#0a66c2" /> },
    { title: "Advertise", desc: "Reach and engage your audience.", icon: <Users size={32} color="#0a66c2" /> }
  ];

  return (
    <div className="app-layout" style={{ gridTemplateColumns: '1fr' }}>
      <main>
        <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>DevConnect for Business</h1>
          <p style={{ color: 'gray', marginBottom: '40px' }}>Everything you need to find, hire, and grow your talent.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {products.map((product, i) => (
              <div key={i} className="card" style={{ padding: '24px', textAlign: 'left', cursor: 'pointer', transition: 'transform 0.2s' }}>
                <div style={{ marginBottom: '16px' }}>{product.icon}</div>
                <h3 style={{ marginBottom: '8px' }}>{product.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'gray', lineHeight: '1.4' }}>{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: '40px', padding: '24px', background: '#eef3f8', border: 'none' }}>
             <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Want to grow your business?</h2>
             <button style={{ background: 'var(--linkedin-blue)', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Get Started</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Business;
