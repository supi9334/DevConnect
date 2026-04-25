import React from 'react';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#f3f2ef',
      padding: '40px 24px',
      borderTop: '1px solid #e0e0e0',
      marginTop: '40px'
    }}>
      <div style={{ maxWidth: '1128px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
        <div>
          <h4 style={{ color: 'var(--linkedin-blue)', marginBottom: '16px' }}>in</h4>
          <p style={{ fontSize: '0.75rem', color: 'gray' }}>© 2024 DevConnect Corporation</p>
        </div>
        <div>
          <h5 style={{ marginBottom: '12px', fontSize: '0.9rem' }}>General</h5>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem', color: 'gray', lineHeight: '2' }}>
            <li>Sign Up</li>
            <li>Help Center</li>
            <li>About</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h5 style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Browse DevConnect</h5>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem', color: 'gray', lineHeight: '2' }}>
            <li>Learning</li>
            <li>Jobs</li>
            <li>Salary</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h5 style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Business Solutions</h5>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem', color: 'gray', lineHeight: '2' }}>
            <li>Talent</li>
            <li>Marketing</li>
            <li>Sales</li>
            <li>Learning</li>
          </ul>
        </div>
        <div>
          <h5 style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Directories</h5>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem', color: 'gray', lineHeight: '2' }}>
            <li>Members</li>
            <li>Jobs</li>
            <li>Companies</li>
            <li>Salaries</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
