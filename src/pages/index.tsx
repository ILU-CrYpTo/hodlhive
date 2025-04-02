import React from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function HomePage() {
  return (
    <div 
      className={inter.className}
      style={{
        backgroundColor: '#18181D',
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          display: 'flex',
          gap: '0.5rem',
          margin: 0,
          lineHeight: 1,
          padding: '1rem',
        }}>
        <span style={{ color: '#FFFFFF', fontWeight: 400 }}>under</span>
        <span style={{ color: '#F7D000', fontWeight: 700 }}>maintenance</span>
      </h1>
    </div>
  );
}
