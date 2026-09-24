import React from 'react';
import { ImageResponse } from '@vercel/og';

export default async function handler(req, res) {
  try {
    const imageResp = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#FCFBF6', // cream/off-white background
            backgroundImage: 'radial-gradient(circle at 25px 25px, #F8E7A8 2%, transparent 0%), radial-gradient(circle at 75px 75px, #F8E7A8 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          {/* Blue gingham-like sidebar pattern */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              backgroundColor: '#A9D8F5',
              opacity: 0.2,
              display: 'flex',
            }}
          />
          
          {/* Main card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #E5DFD3',
              borderRadius: '24px',
              backgroundColor: 'white',
              padding: '60px 80px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              zIndex: 1,
              marginLeft: '60px',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                color: '#345573',
                marginBottom: 30,
                fontFamily: 'serif',
              }}
            >
              SHILOH XANDREA B. AMPAD
            </div>
            
            <div
              style={{
                fontSize: 48,
                letterSpacing: '0.1em',
                color: '#5C8EAD',
                marginBottom: 40,
              }}
            >
              18TH BIRTHDAY
            </div>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 28,
                color: '#345573',
                marginBottom: 20,
                letterSpacing: '0.05em',
              }}
            >
              OCTOBER 17, 2026 • 5:00 PM ONWARDS
            </div>
            
            <div
              style={{
                fontSize: 28,
                color: '#345573',
                marginBottom: 60,
                letterSpacing: '0.05em',
              }}
            >
              GV'S FUNCTION HALL
            </div>
            
            <div
              style={{
                fontSize: 24,
                color: '#8CAEC4',
                letterSpacing: '0.1em',
              }}
            >
              TAP TO OPEN INVITATION ♡
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    const arrayBuffer = await imageResp.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(buffer);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('Failed to generate image');
  }
}
