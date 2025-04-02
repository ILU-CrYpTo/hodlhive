const MaintenancePage = () => {
  return (
    <div 
      style={{
        backgroundColor: '#18181D',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          display: 'flex',
          gap: '0.5rem',
          margin: 0,
          padding: '1rem',
          boxSizing: 'border-box'
        }}>
        <span style={{ color: '#FFFFFF', fontWeight: 400 }}>under</span>
        <span style={{ color: '#F7D000', fontWeight: 700 }}>maintenance</span>
      </h1>
    </div>
  );
};