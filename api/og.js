import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const el = (type, props, ...children) => {
  return {
    type,
    key: null,
    ref: null,
    $$typeof: Symbol.for('react.element'),
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  };
};

export default async function (request) {
  return new ImageResponse(
    el('div', {
      style: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#FCFBF6', // solid background instead of radial-gradient
      }
    },
      el('div', {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          backgroundColor: '#A9D8F5',
          opacity: 0.2,
          display: 'flex',
        }
      }),
      el('div', {
        style: {
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
        }
      },
        el('div', {
          style: {
            fontSize: 60,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            color: '#345573',
            marginBottom: 30,
          }
        }, 'SHILOH XANDREA B. AMPAD'),
        el('div', {
          style: {
            fontSize: 48,
            letterSpacing: '0.1em',
            color: '#5C8EAD',
            marginBottom: 40,
          }
        }, '18TH BIRTHDAY'),
        el('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 28,
            color: '#345573',
            marginBottom: 20,
            letterSpacing: '0.05em',
          }
        }, 'OCTOBER 17, 2026 • 5:00 PM ONWARDS'),
        el('div', {
          style: {
            fontSize: 28,
            color: '#345573',
            marginBottom: 60,
            letterSpacing: '0.05em',
          }
        }, "GV'S FUNCTION HALL"),
        el('div', {
          style: {
            fontSize: 24,
            color: '#8CAEC4',
            letterSpacing: '0.1em',
          }
        }, 'TAP TO OPEN INVITATION ♡')
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
