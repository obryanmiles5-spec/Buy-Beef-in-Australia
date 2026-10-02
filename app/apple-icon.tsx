import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          background: 'linear-gradient(135deg, #8B2332 0%, #4A0D16 100%)',
          borderRadius: '40px',
          border: '6px solid #C7903E',
          position: 'relative',
          padding: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '84px',
            marginBottom: '4px',
          }}
        >
          🐂
        </div>
        <div
          style={{
            fontSize: '16px',
            fontFamily: 'serif',
            fontWeight: 'bold',
            color: '#FCE5B2',
            letterSpacing: '3px',
          }}
        >
          BUY BEEF
        </div>
        <div
          style={{
            fontSize: '11px',
            fontFamily: 'sans-serif',
            fontWeight: 800,
            color: '#E2B766',
            letterSpacing: '2px',
          }}
        >
          AUSTRALIA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
