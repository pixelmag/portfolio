import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './ContactPage.module.css'

// mobileHide: true → hidden on mobile
// desktopHide: true → hidden on desktop (mobile-only position)
const FLOATERS = [
  // ── Desktop positions ──
  { emoji: '💌', size: 42, top: '10%', left: '73%', rotate: -10, blur: 0,   opacity: 0.9, delay: 0,   duration: 5.2, mobileHide: false },
  { emoji: '🌿', size: 44, top: '14%', left: '13%', rotate: -18, blur: 0,   opacity: 0.75,delay: 1.2, duration: 5.8, mobileHide: true  },
  { emoji: '✨', size: 24, top: '28%', left: '49%', rotate:   0, blur: 0,   opacity: 0.8, delay: 1.8, duration: 4.6, mobileHide: true  },
  { emoji: '☀️', size: 36, top: '42%', left: '68%', rotate:   6, blur: 0,   opacity: 0.85,delay: 1.0, duration: 5.6, mobileHide: true  },
  { emoji: '🦋', size: 32, top: '46%', left: '84%', rotate:   8, blur: 1.5, opacity: 0.65,delay: 0.7, duration: 6.0, mobileHide: true  },
  { emoji: '🌊', size: 30, top: '51%', left: '4%',  rotate: -12, blur: 2.5, opacity: 0.45,delay: 1.5, duration: 5.0, mobileHide: true  },
  { emoji: '🌸', size: 36, top: '70%', left: '59%', rotate:  -6, blur: 2,   opacity: 0.55,delay: 0.5, duration: 6.3, mobileHide: true  },
  { emoji: '🎨', size: 34, top: '74%', left: '15%', rotate:  14, blur: 0,   opacity: 0.85,delay: 0.3, duration: 4.9, mobileHide: true  },
  { emoji: '⚽', size: 28, top: '76%', left: '84%', rotate:   5, blur: 4,   opacity: 0.35,delay: 2.0, duration: 5.5, mobileHide: true  },

  // ── Mobile-only positions (clear of text area) ──
  { emoji: '✨', size: 22, top: '18%', left: '82%', rotate:   0, blur: 0,   opacity: 0.8, delay: 1.8, duration: 4.6, mobileHide: false, desktopHide: true },
  { emoji: '☀️', size: 32, top: '8%',  left: '14%', rotate:   6, blur: 0,   opacity: 0.8, delay: 1.0, duration: 5.6, mobileHide: false, desktopHide: true },
  { emoji: '🦋', size: 28, top: '78%', left: '78%', rotate:   8, blur: 0,   opacity: 0.65,delay: 0.7, duration: 6.0, mobileHide: false, desktopHide: true },
  { emoji: '🌸', size: 30, top: '84%', left: '12%', rotate:  -6, blur: 0,   opacity: 0.6, delay: 0.5, duration: 6.3, mobileHide: false, desktopHide: true },
]

function FloatingEmojis() {
  return (
    <div className={styles.floatersWrap} aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className={`${styles.floater} ${f.mobileHide ? styles.floaterMobileHide : ''} ${f.desktopHide ? styles.floaterDesktopHide : ''}`}
          style={{
            fontSize: f.size,
            top: f.top,
            left: f.left,
            opacity: f.opacity,
            filter: f.blur ? `blur(${f.blur}px)` : undefined,
            '--rotate': `${f.rotate}deg`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <FloatingEmojis />

        <section className={styles.hero}>
          <div className={styles.container}>

            <h1 className={styles.heading}>
              <span className={styles.headingLight}>Interested in</span>
              <span className={styles.headingAccent}>working together?</span>
            </h1>

            <a
              href="mailto:nobremagdalena@gmail.com"
              className={styles.email}
            >
              nobremagdalena@gmail.com
            </a>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
