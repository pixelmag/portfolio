import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { cases } from '../../data/cases'
import defaultCheckIcon from '../../assets/check.svg'
import styles from './CasePage.module.css'

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
  const checkIcon = caseData?.checkIcon || defaultCheckIcon

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

              {/* Row 1 — left: My Role */}
              {role.length > 0 && (
                <div className={`${styles.metaBlock} ${styles.metaBlockRole}`}>
                  <span className={styles.metaLabel}>My Role</span>
                  {role.map((r, i) => (
                    <span key={i} className={styles.metaValue}>{r}</span>
                  ))}
                </div>
              )}

              {/* Row 1 — right: Description */}
              {description && (
                <div className={`${styles.metaBlock} ${styles.metaBlockDesc}`}>
                  <span className={styles.metaLabel}>Description</span>
                  <p className={styles.metaBody}>{description}</p>
                </div>
              )}

              {/* Row 2 — left: Tools + Timeline together */}
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

              {/* Row 2 — right: Context */}
              {context.length > 0 && (
                <div className={`${styles.metaBlock} ${styles.metaBlockContext}`}>
                  <span className={styles.metaLabel}>Context</span>
                  {context.map((p, i) => (
                    <p key={i} className={styles.metaBody}>{p}</p>
                  ))}
                </div>
              )}

            </div>

            {(ctaLabel || ctaSecondaryLabel) && (
              <div className={styles.ctaGroup}>
                {ctaLabel && (
                  <a
                    href={ctaHref}
                    className={styles.ctaBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ctaLabel}
                    <ArrowUpRight />
                  </a>
                )}
                {ctaSecondaryLabel && (
                  <a
                    href={ctaSecondaryHref}
                    className={styles.ctaBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ctaSecondaryLabel}
                    <ArrowUpRight />
                  </a>
                )}
              </div>
            )}

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
                              <p key={k} className={styles.bodyText}>{p}</p>
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
                              <p key={j} className={styles.bodyText}>{p}</p>
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
                                    <span className={styles.bodyText}>{item}</span>
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
