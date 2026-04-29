import { useState, useCallback } from 'react'
import logoSrc from '../../assets/logo.svg'
import styles from './Footer.module.css'

function ButterflyBurst() {
  const [butterflies, setButterflies] = useState([])

  const spawn = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const count = 10
    const newOnes = Array.from({ length: count }, (_, i) => {
      const angle = Math.random() * 2 * Math.PI
      const dist = 60 + Math.random() * 90
      return {
        id: Date.now() + i,
        // start spread across the text width, vertically at text center
        x: rect.left + Math.random() * rect.width,
        y: rect.top + rect.height / 2,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 50, // bias upward
        size: 13 + Math.random() * 10,
        delay: Math.random() * 0.2,
      }
    })
    setButterflies(prev => [...prev, ...newOnes])
    setTimeout(() => {
      setButterflies(prev =>
        prev.filter(b => !newOnes.some(n => n.id === b.id))
      )
    }, 1500)
  }, [])

  return (
    <>
      <span className={styles.taglineWrap} onMouseEnter={spawn} onTouchStart={spawn}>
        Hope you enjoyed exploring my portfolio 🦋
      </span>
      {butterflies.map(b => (
        <span
          key={b.id}
          className={styles.butterfly}
          style={{
            left: b.x,
            top: b.y,
            fontSize: `${b.size}px`,
            '--dx': `${b.dx}px`,
            '--dy': `${b.dy}px`,
            animationDelay: `${b.delay}s`,
          }}
        >
          🦋
        </span>
      ))}
    </>
  )
}

export default function Footer({ dark = false }) {
  return (
    <footer className={`${styles.footer} ${dark ? styles.footerDark : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.logoWrap}>
            <img src={logoSrc} alt="MAG" className={styles.logo} />
          </div>

          <p className={styles.tagline}>
            <ButterflyBurst />
          </p>

          <nav className={styles.links}>
            <a href="https://www.linkedin.com/in/magdalena-nobre-89a445147/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://www.instagram.com/maguinobre/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
            <a href="#" className={styles.link}>CV</a>
          </nav>

        </div>
      </div>
    </footer>
  )
}
