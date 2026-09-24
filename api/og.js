import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function () {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#FCFBF6',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #F8E7A8 2%, transparent 0%), radial-gradient(circle at 75px 75px, #F8E7A8 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        },
        children: [
          {
            type: 'div',
            props: {
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
            }
          },
          {
            type: 'div',
            props: {
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
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 60,
                      fontStyle: 'italic',
                      letterSpacing: '-0.02em',
                      color: '#345573',
                      marginBottom: 30,
                    },
                    children: 'SHILOH XANDREA B. AMPAD'
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 48,
                      letterSpacing: '0.1em',
                      color: '#5C8EAD',
                      marginBottom: 40,
                    },
                    children: '18TH BIRTHDAY'
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: 28,
                      color: '#345573',
                      marginBottom: 20,
                      letterSpacing: '0.05em',
                    },
                    children: 'OCTOBER 17, 2026 • 5:00 PM ONWARDS'
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 28,
                      color: '#345573',
                      marginBottom: 60,
                      letterSpacing: '0.05em',
                    },
                    children: "GV'S FUNCTION HALL"
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 24,
                      color: '#8CAEC4',
                      letterSpacing: '0.1em',
                    },
                    children: 'TAP TO OPEN INVITATION ♡'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      width: 1200,
      height: 630,
    }
  );
}
