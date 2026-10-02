import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7A1F2B 0%, #4A0D16 100%)',
          borderRadius: '16px',
          border: '2px solid #C7903E',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        {/* Gold Stylized Steer Horns / Butcher Mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FCE5B2',
            fontSize: '32px',
            fontFamily: 'serif',
            fontWeight: 'bold',
            letterSpacing: '-1px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          🐂
        </div>
        <div
          style={{
            fontSize: '9px',
            fontFamily: 'sans-serif',
            fontWeight: 800,
            color: '#E2B766',
            letterSpacing: '1px',
            marginTop: '-2px',
          }}
        >
          AU
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
