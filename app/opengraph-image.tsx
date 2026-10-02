import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #151515 0%, #2A0D12 50%, #151515 100%)',
          color: '#FFFFFF',
          padding: '60px 80px',
          fontFamily: 'serif',
          border: '8px solid #C7903E',
          position: 'relative',
        }}
      >
        {/* Background watermark/accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(199, 144, 62, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Top Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #8B2332 0%, #4A0D16 100%)',
                borderRadius: '12px',
                border: '2px solid #C7903E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
              }}
            >
              🐂
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                Pasture & Tide
              </span>
              <span style={{ fontSize: '12px', fontFamily: 'sans-serif', letterSpacing: '3px', color: '#E2B766', fontWeight: 800 }}>
                NSW 2642 • AUSTRALIA
              </span>
            </div>
          </div>
          <div
            style={{
              background: 'rgba(199, 144, 62, 0.15)',
              border: '1px solid #C7903E',
              padding: '10px 20px',
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'sans-serif',
              color: '#FCE5B2',
              fontWeight: 'bold',
            }}
          >
            www.pastureandtide.com.au
          </div>
        </div>

        {/* Center Hero Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 10, maxWidth: '950px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(122, 31, 43, 0.4)',
              border: '1px solid #7A1F2B',
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '13px',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: '#E2B766',
              letterSpacing: '2px',
              width: 'fit-content',
            }}
          >
            <span>★ 4.9/5 TRUSTPILOT EXCELLENT</span>
            <span>•</span>
            <span>COLD-CHAIN DISPATCH</span>
          </div>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              lineHeight: 1.15,
              color: '#FFF8EE',
              margin: 0,
            }}
          >
            Premium Australian Pasture-Fed Meat & Seafood Delivery
          </h1>
          <p
            style={{
              fontSize: '20px',
              fontFamily: 'sans-serif',
              color: '#D4CEC3',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Order Black Angus & F1 Wagyu beef, free-range poultry, pork carcass shares, and fresh fish directly from NSW 2642 pastoral stations to your home kitchen.
          </p>
        </div>

        {/* Footer Badge Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', zIndex: 10, fontFamily: 'sans-serif', fontSize: '14px', color: '#A39E93' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span>✓ 100% Australian Sourced</span>
            <span>✓ Temperature-Controlled Cold Chain</span>
            <span>✓ Verified ABN: 45 775 613 837</span>
          </div>
          <div style={{ fontWeight: 'bold', color: '#E2B766' }}>
            Shop Online Today
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
