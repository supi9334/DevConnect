

function Profile() {
  const user = {
    name: "Supriya Dev",
    username: "supriya_dev",
    headline: "Front End Developer | React Enthusiast",
    location: "Delhi, Gurgaon, India",
    connections: "500+",
    about: "I am a frontend developer and a fresher.I have skills in HTML, CSS, Javascript, React.I am passionate about creating responsive and user-friendly websites."
  };

  return (
    <>

      <div className="app-layout" style={{ gridTemplateColumns: '1fr 300px' }}>
        <main>
          <div className="card">
            <div style={{ height: '200px', backgroundColor: '#a0b4b7' }}></div>
            <div style={{ padding: '0 24px 24px' }}>
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
                alt="avatar"
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  border: '4px solid white',
                  marginTop: '-80px',
                  backgroundColor: 'white'
                }}
              />
              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{user.name}</h1>
                  <p style={{ margin: '4px 0', fontSize: '1rem' }}>{user.headline}</p>
                  <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'gray' }}>
                    {user.location} • <span style={{ color: 'var(--linkedin-blue)', fontWeight: 600 }}>Contact info</span>
                  </p>
                  <p style={{ margin: '12px 0', fontSize: '0.9rem', color: 'var(--linkedin-blue)', fontWeight: 600 }}>
                    {user.connections} connections
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: 32, height: 32, backgroundColor: '#ddd' }}></div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>DevConnect University</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ backgroundColor: 'var(--linkedin-blue)', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '20px', fontWeight: 600 }}>Open to</button>
                <button style={{ backgroundColor: 'white', color: 'var(--linkedin-blue)', border: '1px solid var(--linkedin-blue)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600 }}>Add profile section</button>
                <button style={{ backgroundColor: 'white', color: 'gray', border: '1px solid gray', padding: '6px 16px', borderRadius: '20px', fontWeight: 600 }}>More</button>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '1.2rem', margin: '0 0 12px 0' }}>About</h2>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{user.about}</p>
          </div>
        </main>

        <aside>
          <div className="card" style={{ padding: '12px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>Ad</h3>
            <p style={{ fontSize: '0.8rem', color: 'gray' }}>See who's hiring on DevConnect</p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Profile;
