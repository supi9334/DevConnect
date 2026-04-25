import React from 'react';

function SearchResults() {
  return (
    <div className="app-layout" style={{ gridTemplateColumns: '1fr' }}>
      <main>
        <div className="card" style={{ padding: '24px' }}>
          <h2>Search Results</h2>
          <div style={{ padding: '40px', textAlign: 'center', color: 'gray' }}>
            <p style={{ fontSize: '3rem' }}>🔍</p>
            <h3>No results found</h3>
            <p>Try searching for people, jobs, or posts.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchResults;
