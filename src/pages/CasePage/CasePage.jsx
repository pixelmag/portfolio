import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { cases } from '../../data/cases'
import defaultCheckIcon from '../../assets/check.svg'
import espheraCheckIcon from '../../assets/cases/esphera/check.svg'

const caseCheckIcons = {
  esphera: espheraCheckIcon,
}
import styles from './CasePage.module.css'

/** Renders a paragraph that can be a plain string or an array of {text, bold?} segments */
function RichPara({ content, className }) {
  if (typeof content === 'string') return <p className={className}>{content}</p>
  return (
    <p className={className}>
      {content.map((seg, i) =>
        seg.bold
          ? <strong key={i}>{seg.text}</strong>
          : <span key={i}>{seg.text}</span>
      )}
    </p>
  )
}

/** Same but renders a <span> wrapper (for checkList items) */
function RichSpan({ content, className }) {
  if (typeof content === 'string') return <span className={className}>{content}</span>
  return (
    <span className={className}>
      {content.map((seg, i) =>
        seg.bold
          ? <strong key={i}>{seg.text}</strong>
          : <span key={i}>{seg.text}</span>
      )}
    </span>
  )
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
      </button>
      <div className={styles.lightboxImgWrapper} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" className={styles.lightboxImg} />
      </div>
    </div>
  )
}

export default function CasePage() {
  const { slug } = useParams()
  const caseData = cases[slug]
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const openLightbox = useCallback((src) => setLightboxSrc(src), [])
  const closeLightbox = useCallback(() => setLightboxSrc(null), [])
  const isGreen = caseData?.theme === 'green'
  const checkIcon = caseData?.checkIcon || caseCheckIcons[slug] || defaultCheckIcon

  if (!caseData) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <div className={styles.notFound}>
            <p>Case not found.</p>
            <Link to="/">← Back home</Link>
          </div>
        </main>
      </>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const {
    title,
    industry,
    role,
    tools,
    timeline,
    description,
    context,
    ctaLabel,
    ctaHref,
    ctaSecondaryLabel,
    ctaSecondaryHref,
    sections,
  } = caseData

  return (
    <>
      <Navbar />
      <main className={styles.page}>

        {/* ── Hero ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>

            <div className={styles.titleGroup}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.industry}>{industry}</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.metaGrid}>

              {/* Left column: Role → Tools + Timeline */}
              <div className={styles.metaLeft}>
                {role.length > 0 && (
                  <div className={styles.metaBlock}>
                    <span className={styles.metaLabel}>My Role</span>
                    {role.map((r, i) => (
                      <span key={i} className={styles.metaValue}>{r}</span>
                    ))}
                  </div>
                )}
                {(tools.length > 0 || timeline.length > 0) && (
                  <div className={styles.metaLeftBottom}>
                    {tools.length > 0 && (
                      <div className={styles.metaBlock}>
                        <span className={styles.metaLabel}>Tools</span>
                        {tools.map((t, i) => (
                          <span key={i} className={styles.metaValue}>{t}</span>
                        ))}
                      </div>
                    )}
                    {timeline.length > 0 && (
                      <div className={styles.metaBlock}>
                        <span className={styles.metaLabel}>Timeline</span>
                        {timeline.map((t, i) => (
                          <span key={i} className={styles.metaValue}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right column: Description → Context → CTAs */}
              <div className={styles.metaRight}>
                {description && (
                  <div className={styles.metaBlock}>
                    <span className={styles.metaLabel}>Description</span>
                    {Array.isArray(description) && Array.isArray(description[0])
                      ? description.map((para, i) => (
                          <p key={i} className={styles.metaBody}>
                            {para.map((seg, j) =>
                              seg.href
                                ? <a key={j} href={seg.href} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>{seg.text}</a>
                                : seg.bold
                                  ? <strong key={j}>{seg.text}</strong>
                                  : <span key={j}>{seg.text}</span>
                            )}
                          </p>
                        ))
                      : <p className={styles.metaBody}>
                          {Array.isArray(description)
                            ? description.map((seg, i) =>
                                seg.href
                                  ? <a key={i} href={seg.href} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>{seg.text}</a>
                                  : seg.bold
                                    ? <strong key={i}>{seg.text}</strong>
                                    : <span key={i}>{seg.text}</span>
                              )
                            : description
                          }
                        </p>
                    }
                  </div>
                )}
                {context.length > 0 && (
                  <div className={styles.metaBlock}>
                    <span className={styles.metaLabel}>Context</span>
                    {context.map((p, i) => (
                      <RichPara key={i} content={p} className={styles.metaBody} />
                    ))}
                  </div>
                )}
                {(ctaLabel || ctaSecondaryLabel) && (
                  <div className={styles.ctaGroup}>
                    {ctaLabel && (
                      <a href={ctaHref} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
                        {ctaLabel}
                        <ArrowUpRight />
                      </a>
                    )}
                    {ctaSecondaryLabel && (
                      <a href={ctaSecondaryHref} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
                        {ctaSecondaryLabel}
                        <ArrowUpRight />
                      </a>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* ── Content sections ── */}
        {sections.length > 0 && (
          <section className={styles.contentSection}>
            <div className={styles.contentContainer}>
              {sections.map((section, i) => (
                <div key={i} className={styles.contentBlock}>

                  {/* ── Banner block (e.g. Listful) ── */}
                  {section.bannerBlock && (
                    <div
                      className={styles.bannerBlock}
                      style={{ background: section.bannerBg || '#FF6B72' }}
                    >
                      <span className={styles.bannerLabel}>{section.bannerLabel}</span>
                    </div>
                  )}

                  {/* ── Video block ── */}
                  {section.videoBlock && (
                    <div className={`${styles.videoBlock} ${section.videoAuto ? styles.videoBlockAuto : ''}`}>
                      <video
                        className={`${styles.videoEl} ${section.videoAuto ? styles.videoElAuto : ''}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={section.videoSrc} />
                      </video>
                    </div>
                  )}

                  {/* ── Image block ── */}
                  {section.imageBlock && (
                    <div
                      className={`${styles.imageBlock} ${section.imageSrc ? styles.imageBlockClickable : ''}`}
                      style={section.imageBg ? { background: section.imageBg } : undefined}
                      onClick={() => section.imageSrc && openLightbox(section.imageSrc)}
                    >
                      {section.imageSrc && (
                        <img
                          src={section.imageSrc}
                          alt=""
                          className={styles.imageBlockImg}
                          style={section.imageFit ? { objectFit: section.imageFit } : undefined}
                        />
                      )}
                    </div>
                  )}

                  {/* ── Text block ── */}
                  {(section.title || section.blocks || section.callout || section.body?.length || section.list?.length || section.checkList?.length || section.steps) && (
                  <div className={`${styles.textBlock} ${!section.imageBlock && !section.videoBlock ? styles.textBlockOnly : ''}`}>
                    {section.title && (
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                    )}

                    {/* Multi-block sections */}
                    {section.blocks
                      ? section.blocks.map((block, j) => (
                          <div key={j} className={styles.blockGroup}>
                            {block.callout && (
                              <p className={styles.callout}>{block.callout}</p>
                            )}
                            {block.body && block.body.map((p, k) => (
                              <RichPara key={k} content={p} className={styles.bodyText} />
                            ))}
                            {block.list && (
                              <ul className={styles.list}>
                                {block.list.map((item, k) => (
                                  <li key={k} className={styles.listItem}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))
                      : (
                          <>
                            {section.callout && (
                              <p className={styles.callout}>{section.callout}</p>
                            )}
                            {section.body && section.body.map((p, j) => (
                              <RichPara key={j} content={p} className={styles.bodyText} />
                            ))}
                            {section.list && (
                              <ul className={styles.list}>
                                {section.list.map((item, j) => (
                                  <li key={j} className={styles.listItem}>{item}</li>
                                ))}
                              </ul>
                            )}
                            {section.checkList && (
                              <ul className={styles.checkList}>
                                {section.checkList.map((item, j) => (
                                  <li key={j} className={styles.checkItem}>
                                    <div className={`${styles.checkIconWrapper} ${isGreen ? styles.checkIconWrapperGreen : ''}`}>
                                      <img src={checkIcon} alt="" className={styles.checkIcon} />
                                    </div>
                                    <RichSpan content={item} className={styles.bodyText} />
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.steps && (
                              <div className={styles.stepsGrid}>
                                {section.steps.map((step, j) => (
                                  <div key={j} className={`${styles.stepCard} ${isGreen ? styles.stepCardGreen : ''}`}>
                                    <div className={`${styles.stepBadge} ${isGreen ? styles.stepBadgeGreen : ''}`}>{step.number}</div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepBody}>{step.body}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )
                    }
                  </div>
                  )}

                </div>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />

      {/* ── Lightbox ── */}
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  )
}
