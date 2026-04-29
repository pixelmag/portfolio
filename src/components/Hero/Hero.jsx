import { useState } from 'react'
import avatar from '../../assets/avatar.png'
import copyIcon from '../../assets/copy-06.svg'
import styles from './Hero.module.css'

const EMAIL = 'nobremagdalena@gmail.com'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = EMAIL
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.headingBlock}>
            <img
              src={avatar}
              alt="Magdalena Nobre"
              className={styles.avatar}
            />

            <h1 className={styles.heading}>Hi, I&apos;m Mag</h1>

            <p className={styles.body}>
              I design digital products that balance usability, visual clarity,
              and business goals.
              <br /><br />
              My work focuses on simplifying complex systems into intuitive,
              scalable experiences.
            </p>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={handleCopyEmail}
              type="button"
            >
              <img src={copyIcon} alt="" width="20" height="20" aria-hidden="true" />
              {copied ? 'Copied!' : 'Copy Email'}
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className={styles.btnSecondary}
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
