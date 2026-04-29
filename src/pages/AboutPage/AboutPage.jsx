import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { aboutSections } from '../../data/about'
import photosIcon      from '../../assets/about/photos.png'
import musicCover1    from '../../assets/about/music-cover-1.png'
import musicCover2    from '../../assets/about/music-cover-2.png'
import musicCover3    from '../../assets/about/music-cover-3.png'
import musicCover4    from '../../assets/about/music-cover-4.png'
import musicAppleIcon from '../../assets/about/music-apple.svg'
import pet1 from '../../assets/about/pet-1.png'
import pet2 from '../../assets/about/pet-2.png'
import pet3 from '../../assets/about/pet-3.png'
import pic1 from '../../assets/about/pic-1.png'
import pic2 from '../../assets/about/pic-2.png'
import pic3 from '../../assets/about/pic-3.jpg'
import love1 from '../../assets/about/love-1.png'
import love2 from '../../assets/about/love-2.png'
import love3 from '../../assets/about/love-3.png'
import avatarImg     from '../../assets/avatar.png'
import behanceLogo   from '../../assets/about/behance-logo.png'
import behanceCard1  from '../../assets/about/behance-card-1.png'
import behanceCard2  from '../../assets/about/behance-card-2.png'
import behanceCard3  from '../../assets/about/behance-card-3.png'
import styles from './AboutPage.module.css'


const PHOTO_TABS = {
  pet:     [pet1, pet2, pet3],
  picture: [pic1, pic2, pic3],
  love:    [love1, love2, love3],
}

const SLIDE_DELAY = 3000 // ms per photo

// All icons always white — matches Figma (no active-state color change)
function IconPicture() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M4.55397 22.0966L11.5861 15.0645C12.0083 14.6423 12.2194 14.4312 12.4628 14.3521C12.6769 14.2826 12.9075 14.2826 13.1216 14.3521C13.365 14.4312 13.5761 14.6423 13.9983 15.0645L20.9836 22.0497M14.9243 15.9905L17.9824 12.9324C18.4045 12.5102 18.6156 12.2991 18.859 12.22C19.0731 12.1505 19.3038 12.1505 19.5179 12.22C19.7613 12.2991 19.9724 12.5102 20.3945 12.9324L23.4526 15.9905M10.6601 9.59422C10.6601 10.7717 9.70558 11.7263 8.52806 11.7263C7.35055 11.7263 6.39599 10.7717 6.39599 9.59422C6.39599 8.41671 7.35055 7.46215 8.52806 7.46215C9.70558 7.46215 10.6601 8.41671 10.6601 9.59422ZM7.24882 22.3867H18.3356C20.1267 22.3867 21.0223 22.3867 21.7064 22.0381C22.3082 21.7315 22.7974 21.2422 23.104 20.6405C23.4526 19.9564 23.4526 19.0608 23.4526 17.2697V8.31498C23.4526 6.52387 23.4526 5.62831 23.104 4.9442C22.7974 4.34243 22.3082 3.85319 21.7064 3.54657C21.0223 3.198 20.1267 3.198 18.3356 3.198H7.24882C5.45771 3.198 4.56215 3.198 3.87804 3.54657C3.27627 3.85319 2.78702 4.34243 2.48041 4.9442C2.13184 5.62831 2.13184 6.52387 2.13184 8.31498V17.2697C2.13184 19.0608 2.13184 19.9564 2.48041 20.6405C2.78702 21.2422 3.27627 21.7315 3.87804 22.0381C4.56215 22.3867 5.45771 22.3867 7.24882 22.3867Z"
        stroke="white" strokeWidth="2.13208" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.7849 5.47486C10.6535 2.98308 7.0993 2.31281 4.42882 4.59452C1.75834 6.87624 1.38238 10.6912 3.47952 13.3897C5.22315 15.6334 10.5 20.3656 12.2295 21.8972C12.4229 22.0685 12.5197 22.1542 12.6325 22.1879C12.731 22.2173 12.8388 22.2173 12.9373 22.1879C13.0501 22.1542 13.1469 22.0685 13.3404 21.8972C15.0698 20.3656 20.3467 15.6334 22.0903 13.3897C24.1874 10.6912 23.8574 6.85224 21.141 4.59452C18.4246 2.33681 14.9163 2.98308 12.7849 5.47486Z"
        stroke="white" strokeWidth="2.13208" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Chat bubble tail shapes (from "Chat vectors" folder) ── */

function IconPet() {
  return (
    <svg width="31" height="28" viewBox="0 0 31 28" fill="none">
      <path d="M15.2686 11.7178C15.8534 11.7178 16.3834 11.8534 16.8721 12.123C17.3968 12.4125 17.8598 12.7933 18.2637 13.2705L18.2734 13.2812C18.834 13.9219 19.3297 14.6128 19.7607 15.3545C20.2494 16.1955 20.8234 16.98 21.4814 17.7061L21.4854 17.7109C22.2304 18.5199 22.9815 19.3396 23.7373 20.1699C24.3533 20.8468 24.6504 21.613 24.6504 22.5059C24.6504 23.3046 24.398 23.9717 23.8887 24.5479C23.396 25.105 22.8217 25.3632 22.1133 25.3633C21.0096 25.3633 19.9166 25.2707 18.834 25.0869C17.6566 24.887 16.4675 24.7871 15.2686 24.7871C14.0698 24.7871 12.8813 24.887 11.7041 25.0869C10.6215 25.2707 9.52846 25.3633 8.4248 25.3633C7.71639 25.3632 7.14205 25.105 6.64941 24.5479C6.14005 23.9717 5.8877 23.3046 5.8877 22.5059C5.88773 21.613 6.18475 20.8468 6.80078 20.1699C7.55657 19.3396 8.30766 18.5199 9.05273 17.7109L9.05176 17.71C9.7124 17.003 10.2842 16.2328 10.7637 15.3994C11.1802 14.6756 11.6766 13.9946 12.2549 13.3564L12.2744 13.335C12.682 12.8532 13.1516 12.4576 13.6855 12.1445C14.1714 11.8597 14.6936 11.7178 15.2686 11.7178ZM5.6748 7.87988C6.35013 7.87991 6.8887 8.10355 7.34277 8.55762C7.79672 9.01167 8.01953 9.55031 8.01953 10.2256C8.01946 10.9006 7.79654 11.4386 7.34277 11.8926C6.8887 12.3466 6.35013 12.5703 5.6748 12.5703C4.99941 12.5703 4.46094 12.3467 4.00684 11.8926C3.55298 11.4386 3.32918 10.9007 3.3291 10.2256C3.3291 9.55025 3.5528 9.0117 4.00684 8.55762C4.46094 8.10352 4.99941 7.87988 5.6748 7.87988ZM24.8633 7.87988C25.5387 7.87988 26.0771 8.10352 26.5312 8.55762C26.9853 9.01169 27.209 9.55026 27.209 10.2256C27.2089 10.9007 26.9851 11.4386 26.5312 11.8926C26.0771 12.3467 25.5387 12.5703 24.8633 12.5703C24.1879 12.5703 23.6494 12.3467 23.1953 11.8926C22.7415 11.4386 22.5186 10.9006 22.5186 10.2256C22.5186 9.5503 22.7413 9.01168 23.1953 8.55762C23.6494 8.10353 24.1879 7.8799 24.8633 7.87988ZM11.4316 2.7627C12.1067 2.76277 12.6447 2.98657 13.0986 3.44043C13.5527 3.89453 13.7764 4.43301 13.7764 5.1084C13.7763 5.78373 13.5527 6.3223 13.0986 6.77637C12.6447 7.23014 12.1067 7.45305 11.4316 7.45312C10.7564 7.45312 10.2177 7.2303 9.76367 6.77637C9.3096 6.3223 9.08597 5.78373 9.08594 5.1084C9.08594 4.43301 9.30957 3.89453 9.76367 3.44043C10.2177 2.98641 10.7563 2.7627 11.4316 2.7627ZM19.1064 2.7627C19.7818 2.7627 20.3203 2.98639 20.7744 3.44043C21.2285 3.89453 21.4521 4.43301 21.4521 5.1084C21.4521 5.78373 21.2285 6.3223 20.7744 6.77637C20.3204 7.23032 19.7817 7.45312 19.1064 7.45312C18.4314 7.45306 17.8934 7.23013 17.4395 6.77637C16.9854 6.32229 16.7617 5.78373 16.7617 5.1084C16.7617 4.43301 16.9854 3.89453 17.4395 3.44043C17.8934 2.98658 18.4313 2.76276 19.1064 2.7627Z"
        stroke="white" strokeWidth="1.70566"/>
    </svg>
  )
}

function PhotosCard() {
  const [tab, setTab]               = useState('picture')
  const [idx, setIdx]               = useState(0)
  const [backSrc, setBackSrc]       = useState(PHOTO_TABS.picture[0])
  const [frontSrc, setFrontSrc]     = useState(PHOTO_TABS.picture[0])
  const [frontVisible, setFrontVisible] = useState(false)
  const currentSrcRef = useRef(PHOTO_TABS.picture[0])
  const timerRef      = useRef(null)
  const tabRef        = useRef('picture')   // mirror of tab for use inside interval
  const photos = PHOTO_TABS[tab]

  const crossfadeTo = useCallback((src) => {
    // 1. Set back = current visible image (so it stays fully visible during fade)
    setBackSrc(currentSrcRef.current)
    // 2. Put new src on front layer (still invisible)
    setFrontSrc(src)
    setFrontVisible(false)
    currentSrcRef.current = src
    // 3. Two rAFs: first commit opacity:0 to DOM, second trigger the transition to opacity:1
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFrontVisible(true)
      })
    })
  }, [])

  // Start/restart the auto-advance interval
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx(i => {
        const pool = PHOTO_TABS[tabRef.current]
        const next = (i + 1) % pool.length
        crossfadeTo(pool[next])
        return next
      })
    }, SLIDE_DELAY)
  }, [crossfadeTo])

  // Boot timer once; restart whenever tab changes
  useEffect(() => {
    tabRef.current = tab
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [tab, startTimer])

  const handleTab = (t) => {
    tabRef.current = t
    setTab(t)
    setIdx(0)
    crossfadeTo(PHOTO_TABS[t][0])
    startTimer()   // reset countdown after tab switch
  }

  // Click dot → go to that index
  const handleDotClick = useCallback((e, i) => {
    e.stopPropagation()
    setIdx(i)
    crossfadeTo(PHOTO_TABS[tabRef.current][i])
    startTimer()   // reset countdown after manual pick
  }, [crossfadeTo, startTimer])

  // Click slide: left half = prev, right half = next
  const handleSlideClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const isRight = e.clientX - rect.left > rect.width / 2
    setIdx(i => {
      const pool = PHOTO_TABS[tabRef.current]
      const next = isRight
        ? (i + 1) % pool.length
        : (i - 1 + pool.length) % pool.length
      crossfadeTo(pool[next])
      return next
    })
    startTimer()   // reset countdown after manual swipe
  }, [crossfadeTo, startTimer])

  const tabs = [
    { key: 'picture', Icon: IconPicture },
    { key: 'love',    Icon: IconHeart   },
    { key: 'pet',     Icon: IconPet     },
  ]

  return (
    <div className={styles.photosCard} onClick={handleSlideClick} style={{ cursor: 'pointer' }}>
      {/* Back layer — previous photo, always opacity 1 */}
      <img src={backSrc} alt="" className={styles.photosImgBack} />
      {/* Front layer — new photo, fades in via CSS transition */}
      <img
        src={frontSrc}
        alt=""
        className={`${styles.photosImgFront}${frontVisible ? ` ${styles.photosImgFrontVisible}` : ''}`}
      />

      {/* Photos icon top-left */}
      <div className={styles.photosLogo}>
        <img src={photosIcon} alt="Photos" />
      </div>

      {/* Dots indicator */}
      <div className={styles.photosDots}>
        {photos.map((_, i) => (
          <span
            key={i}
            className={`${styles.photosDot} ${i === idx ? styles.photosDotActive : ''}`}
            onClick={(e) => handleDotClick(e, i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Glass nav bar */}
      <div className={styles.photosNav} onClick={e => e.stopPropagation()}>
        {tabs.map(({ key, Icon }) => (
          <button
            key={key}
            className={`${styles.photosNavBtn} ${tab === key ? styles.photosNavBtnActive : ''}`}
            onClick={() => handleTab(key)}
            aria-label={key}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  )
}

/** Renders a paragraph — plain string or array of { text, bold?, href? } segments */
function Para({ content }) {
  if (typeof content === 'string') return <p className={styles.bodyText}>{content}</p>
  return (
    <p className={styles.bodyText}>
      {content.map((seg, i) =>
        seg.href
          ? <a key={i} href={seg.href} target="_blank" rel="noopener noreferrer" className={styles.bodyLink}>{seg.text}</a>
          : seg.bold
            ? <strong key={i}>{seg.text}</strong>
            : <span key={i}>{seg.text}</span>
      )}
    </p>
  )
}

const TRACKS = [
  {
    cover:       musicCover1,
    title:       'Favorites Mix',
    sub:         'Apple Music for Mag',
    searchQuery: null, // personal mix — no iTunes preview
    url:         'https://music.apple.com',
  },
  {
    cover:       musicCover2,
    title:       'One More Time',
    sub:         'Daft Punk',
    searchQuery: 'One More Time Daft Punk',
    url:         'https://music.apple.com/us/album/one-more-time-single/697401639',
  },
  {
    cover:       musicCover3,
    title:       'Something Just Like This',
    sub:         'The Chainsmokers, Coldplay',
    searchQuery: 'Something Just Like This Chainsmokers Coldplay',
    url:         'https://music.apple.com/us/song/something-just-like-this/1207120448',
  },
  {
    cover:       musicCover4,
    title:       "Oh L'Amour",
    sub:         'Erasure',
    searchQuery: "Oh L'Amour Erasure",
    url:         'https://music.apple.com/us/song/oh-lamour-edit/1774662257',
  },
]

function MusicCard() {
  const [playing, setPlaying] = useState(null)
  const [loading, setLoading] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => () => { audioRef.current?.pause() }, [])

  const toggle = async (i) => {
    const { searchQuery, url } = TRACKS[i]

    // Favorites Mix — no iTunes preview, open Apple Music
    if (!searchQuery) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }

    // Pause current track
    if (playing === i) {
      audioRef.current?.pause()
      setPlaying(null)
      return
    }

    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.onended = null
      audioRef.current = null
    }

    setLoading(i)
    setPlaying(null)

    try {
      const res  = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&entity=song&limit=1`
      )
      const data = await res.json()
      const previewUrl = data.results?.[0]?.previewUrl
      if (!previewUrl) throw new Error('no preview')

      const audio = new Audio(previewUrl)
      audioRef.current = audio
      audio.onended = () => setPlaying(null)
      await audio.play()
      setPlaying(i)
    } catch {
      // fallback: open Apple Music
      window.open(url, '_blank', 'noopener,noreferrer')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className={styles.musicCard}>
      <div className={styles.musicHeader}>
        <span className={styles.musicHeaderTitle}>Top Picks</span>
        <img src={musicAppleIcon} alt="Apple Music" className={styles.musicAppleIcon} />
      </div>
      {TRACKS.map((t, i) => (
        <div key={i} className={styles.musicTrack}>
          <img src={t.cover} alt={t.title} className={styles.trackCover} />
          <div className={styles.trackInfo}>
            <span className={styles.trackTitle}>{t.title}</span>
            <span className={styles.trackSub}>{t.sub}</span>
          </div>
          <button
            className={`${styles.trackPlayBtn}${(playing === i || loading === i) ? ` ${styles.trackPlayBtnActive}` : ''}`}
            onClick={() => toggle(i)}
            disabled={loading !== null && loading !== i}
            aria-label={playing === i ? `Pause ${t.title}` : `Play ${t.title} preview`}
          >
            {loading === i
              /* Loading spinner dots */
              ? <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2"  cy="2" r="1.5" fill="white" opacity="1"/>
                  <circle cx="8"  cy="2" r="1.5" fill="white" opacity="0.6"/>
                  <circle cx="14" cy="2" r="1.5" fill="white" opacity="0.3"/>
                </svg>
              : playing === i
              /* Pause icon */
              ? <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <rect x="1" y="1" width="3" height="10" rx="0.5" fill="white"/>
                  <rect x="6" y="1" width="3" height="10" rx="0.5" fill="white"/>
                </svg>
              /* Play icon */
              : <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M0.5 1.5L9.5 6L0.5 10.5V1.5Z" fill="white"/>
                </svg>
            }
          </button>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.section}>
          <div className={styles.contentGrid}>

            {/* ── Left card: text content ── */}
            <div className={styles.leftCard}>
              <div className={styles.cardInner}>

                <h1 className={styles.heading}>My journey :)</h1>

                <div className={styles.divider} />

                <div className={styles.textSections}>
                  {aboutSections.map((sec, i) => (
                    <div
                      key={i}
                      className={`${styles.textSection} ${i === aboutSections.length - 1 ? styles.lastSection : ''}`}
                    >
                      <span className={styles.sectionLabel}>{sec.label}</span>
                      {sec.paragraphs.map((para, j) => (
                        <Para key={j} content={para} />
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── Right: cards ── */}
            <div className={styles.rightCards}>

              {/* Row 1: Photos + Music */}
              <div className={styles.cardsRow}>

                {/* Photos card */}
                <PhotosCard />

                {/* Music card */}
                <MusicCard />

              </div>

              {/* Row 2: Chat */}
              <div className={styles.chatCard}>
                <span className={styles.chatDate}>Today 9:41</span>
                <div className={styles.chatSent}>
                  <p>Hi Magui! Loved your work — would you be open to collaborating?</p>
                </div>
                <span className={styles.chatRead}>Read 10:02</span>
                <div className={styles.chatReceivedRow}>
                  <img src={avatarImg} alt="Magdalena" className={styles.chatAvatar} />
                  <div className={styles.chatReceived}>
                    <p>Thanks! Sure, I&apos;d love to hear more ☺️</p>
                  </div>
                </div>
              </div>

              {/* Row 3: Behance fanned cards */}
              <a
                href="https://www.behance.net/magdalenanobre?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.behanceCard}
              >
                <div className={styles.behanceLogo}>
                  <img src={behanceLogo} alt="Behance" />
                </div>
                <div className={`${styles.behanceFanCard} ${styles.behanceFanCard1}`}>
                  <img src={behanceCard1} alt="" />
                </div>
                <div className={`${styles.behanceFanCard} ${styles.behanceFanCard2}`}>
                  <img src={behanceCard2} alt="" />
                </div>
                <div className={`${styles.behanceFanCard} ${styles.behanceFanCard3}`}>
                  <img src={behanceCard3} alt="" />
                </div>
              </a>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
