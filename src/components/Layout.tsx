
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const MaintenancePage = () => {
  return (
    <div 
      className={inter.className}
      style={{
        backgroundColor: '#18181D',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <h1 style={{ 
          fontSize: '2.5rem', 
          display: 'flex',
          gap: '0.5rem'
        }}>
        <span style={{ color: '#FFFFFF', fontWeight: 400 }}>under</span>
        <span style={{ color: '#F7D000', fontWeight: 700 }}>maintenance</span>
      </h1>
    </div>
  );
};

export default MaintenancePage;