import { Link } from 'react-router-dom'
import styles from './CasesGrid.module.css'

import espheraLogo  from '../../assets/home/esphera/logo.png'
import espheraPhone from '../../assets/home/esphera/iphone.png'
import espheraCard  from '../../assets/home/esphera/card.png'
import espheraHover from '../../assets/home/esphera/hover.png'

import sosLogo              from '../../assets/home/seedoils/logo.png'
import sosMap               from '../../assets/home/seedoils/map.png'
import sosProcessing        from '../../assets/home/seedoils/processing.png'
import sosProcessingExpanded from '../../assets/home/seedoils/processing-expanded.png'
import sosEmojiSeedling     from '../../assets/home/seedoils/emoji-seedling.png'
import sosEmojiWheat        from '../../assets/home/seedoils/emoji-wheat.png'
import sosEmojiMeat         from '../../assets/home/seedoils/emoji-meat.png'

import royoLogo       from '../../assets/home/royo/logo-icon.png'
import royoGirl       from '../../assets/home/royo/girl.png'
import royoGlobe      from '../../assets/home/royo/globe.png'
import royoCover1     from '../../assets/home/royo/cover-1.png'
import royoCover2     from '../../assets/home/royo/cover-2.png'
import royoCover3     from '../../assets/home/royo/cover-3.png'
import royoCover4     from '../../assets/home/royo/cover-4.png'
import royoCover5     from '../../assets/home/royo/cover-5.png'
import royoBtnNewBook from '../../assets/home/royo/btn-new-book.png'
import royoShapeA     from '../../assets/home/royo/shape-a.png'
import royoShapeB     from '../../assets/home/royo/shape-b.png'
import royoShapeC     from '../../assets/home/royo/shape-c.png'
import royoShapeD     from '../../assets/home/royo/shape-d.png'

import unboundLogo     from '../../assets/home/unbound/logo.png'
import unboundScreen   from '../../assets/home/unbound/home-page.png'
import unboundTrophy   from '../../assets/home/unbound/default.png'
import unboundPlant    from '../../assets/home/unbound/plant.png'
import unboundMoney    from '../../assets/home/unbound/money3.gif'

import tmLogo         from '../../assets/home/trucksmarter/logo.png'
import tmIllustration from '../../assets/home/trucksmarter/illustration.png'
import tmSparkles     from '../../assets/home/trucksmarter/sparkles.png'

import petlyLogo  from '../../assets/home/petly/logo.png'
import petlyBlobs from '../../assets/home/petly/blobs.png'
import petlyDog   from '../../assets/home/petly/dog.png'

import throneLogos     from '../../assets/home/throne/logos.png'
import throneCamera    from '../../assets/home/throne/card-camera.png'
import thronePlant     from '../../assets/home/throne/card-plant.png'
import throneWatch     from '../../assets/home/throne/card-watch.png'
import throneBooks     from '../../assets/home/throne/card-books.png'
import throneEmojiRing from '../../assets/home/throne/emoji-ring.png'
import throneEmojiGift from '../../assets/home/throne/emoji-gift.png'
import throneEmojiCake from '../../assets/home/throne/emoji-cake.png'
import throneAvatar1   from '../../assets/home/throne/avatar-1.png'
import throneAvatar2   from '../../assets/home/throne/avatar-2.png'

function EspheraAnimation() {
  return (
    <>
      {/* Label — tag fades out on hover, name fades in */}
      <div className={styles.espheraLabel}>
        <img src={espheraLogo} alt="" className={styles.espheraLogo} />
        <span className={styles.espheraTag}>Fintech · Wealth Management</span>
        <span className={styles.espheraName}>Esphera Capital</span>
      </div>

      {/* Tilted allocation card */}
      <img src={espheraCard}  alt="" className={styles.espheraCardImg} />

      {/* iPhone mockup */}
      <img src={espheraPhone} alt="" className={styles.espheraPhone} />

      {/* Hover tooltip — fades in on card hover */}
      <img src={espheraHover} alt="" className={styles.espheraHoverImg} />

      {/* Description */}
      <p className={styles.espheraDesc}>
        Navigate your financial journey with clarity and confidence.
      </p>
    </>
  )
}

function SeedOilsAnimation() {
  return (
    <>
      {/* Label */}
      <div className={styles.seedoilsLabel}>
        <div className={styles.seedoilsLogoWrap}>
          <img src={sosLogo} alt="" className={styles.seedoilsLogoImg} />
        </div>
        <span className={styles.seedoilsTag}>Health &amp; Wellness</span>
        <span className={styles.seedoilsName}>Seed Oils Scout</span>
      </div>

      {/* iPhone with map — rotates from -15° to -3° on hover */}
      <img src={sosMap} alt="" className={styles.seedoilsPhone} />

      {/* Processing card — title-only default, expands on hover */}
      <img src={sosProcessing}         alt="" className={styles.seedoilsProcessing} />
      <img src={sosProcessingExpanded} alt="" className={styles.seedoilsProcessingExpanded} />

      {/* 🌱 seedling — always blurred upper-left */}
      <img src={sosEmojiSeedling} alt="" className={styles.seedoilsEmojiSeedling} />

      {/* 🌾 wheat — blurred default, prominent on hover */}
      <img src={sosEmojiWheat} alt="" className={styles.seedoilsEmojiWheat} />

      {/* 🥩 meat — prominent default, blurred on hover */}
      <img src={sosEmojiMeat} alt="" className={styles.seedoilsEmojiMeat} />

      {/* Description */}
      <p className={styles.seedoilsDesc}>
        Community driven app to find seed oil-free restaurants
      </p>
    </>
  )
}

function UnboundAnimation() {
  return (
    <>
      {/* Label */}
      <div className={styles.unboundLabel}>
        <img src={unboundLogo} alt="" className={styles.unboundLogoImg} />
        <span className={styles.unboundTag}>Finance</span>
        <span className={styles.unboundName}>Unbound</span>
      </div>

      {/* App screenshot — main element, rises on hover */}
      <img src={unboundScreen} alt="" className={styles.unboundScreen} />

      {/* Trophy icon — overlays first card, fades out on hover */}
      <img src={unboundTrophy} alt="" className={styles.unboundTrophy} />

      {/* Money gif — overlays first card, fades in on hover */}
      <img src={unboundMoney} alt="" className={styles.unboundMoney} />

      {/* White cover over jitter.video watermark at bottom of gif */}
      <div className={styles.unboundWatermarkCover} />

      {/* Plant — bottom left, partially overflowing */}
      <img src={unboundPlant} alt="" className={styles.unboundPlant} />

      {/* Description */}
      <p className={styles.unboundDesc}>
        Redesigning the journey to being debt-free
      </p>
    </>
  )
}

function ThroneAnimation() {
  return (
    <>
      {/* Label — tag fades out on hover, name fades in */}
      <div className={styles.throneLabel}>
        <img src={throneLogos} alt="" className={styles.throneLogo} />
        <span className={styles.throneTag}>Consumer &amp; Creator Platforms</span>
        <span className={styles.throneName}>Throne &amp; Listful</span>
      </div>

      {/* Centered tagline */}
      <p className={styles.throneTagline}>
        Turn your wishlists<br />into reality—effortlessly.
      </p>

      {/* Product cards — z-order: watch behind → books in front */}
      <img src={throneWatch}  alt="" className={styles.throneCardWatch} />
      <img src={throneCamera} alt="" className={styles.throneCardCamera} />
      <img src={thronePlant}  alt="" className={styles.throneCardPlant} />
      <img src={throneBooks}  alt="" className={styles.throneCardBooks} />

      {/* Emoji PNGs */}
      <img src={throneEmojiRing} alt="" className={styles.throneEmoji1} />
      <img src={throneEmojiGift} alt="" className={styles.throneEmoji2} />
      <img src={throneEmojiCake} alt="" className={styles.throneEmoji3} />

      {/* Avatar circles — appear alongside emojis, slide up on hover */}
      <img src={throneAvatar2} alt="" className={styles.throneAvatarLeft} />
      <img src={throneAvatar1} alt="" className={styles.throneAvatarRight} />
    </>
  )
}

function RoyoAnimation() {
  return (
    <>
      {/* Globe — behind everything, peeks from bottom */}
      <img src={royoGlobe} alt="" className={styles.royoGlobe} />

      {/* Brand shapes */}
      <img src={royoShapeA} alt="" className={styles.royoShapeA} />
      <img src={royoShapeB} alt="" className={styles.royoShapeB} />
      <img src={royoShapeC} alt="" className={styles.royoShapeC} />
      <img src={royoShapeD} alt="" className={styles.royoShapeD} />

      {/* Plane illustration */}
      <img src={royoCover4} alt="" className={styles.royoPlane} />

      {/* Scattered small book covers */}
      <img src={royoCover1} alt="" className={styles.royoCover1} />
      <img src={royoCover2} alt="" className={styles.royoCover2} />
      <img src={royoCover5} alt="" className={styles.royoCover5} />

      {/* Dino illustration */}
      <img src={royoCover3} alt="" className={styles.royoDino} />

      {/* Main book card (girl) */}
      <img src={royoGirl} alt="" className={styles.royoGirl} />

      {/* New Book button */}
      <img src={royoBtnNewBook} alt="" className={styles.royoBtnNewBook} />

      {/* Label */}
      <div className={styles.royoLabel}>
        <img src={royoLogo} alt="" className={styles.royoLogoImg} />
        <span className={styles.royoTag}>Education</span>
        <span className={styles.royoName}>Royo</span>
      </div>

      {/* Description */}
      <p className={styles.royoDesc}>
        Personalized books aligned to each student and curriculum
      </p>
    </>
  )
}

function TruckSmarterAnimation() {
  return (
    <>
      {/* Label */}
      <div className={styles.tmLabel}>
        <div className={styles.tmLogoWrap}>
          <img src={tmLogo} alt="" className={styles.tmLogoImg} />
        </div>
        <span className={styles.tmTag}>Logistics &amp; Mobility</span>
        <span className={styles.tmName}>Trucksmarter</span>
      </div>

      {/* Yellow card */}
      <div className={styles.tmYellowCard}>
        {/* Main illustration */}
        <img src={tmIllustration} alt="" className={styles.tmIllustration} />

        {/* Sparkles — fade in on hover */}
        <img src={tmSparkles} alt="" className={styles.tmSparkles} />
      </div>

      {/* Description */}
      <p className={styles.tmDesc}>
        Platform for trucking industry professionals
      </p>
    </>
  )
}

function PetlyAnimation() {
  return (
    <>
      {/* Label */}
      <div className={styles.petlyLabel}>
        <img src={petlyLogo} alt="" className={styles.petlyLogoImg} />
        <span className={styles.petlyTag}>Pet Care</span>
        <span className={styles.petlyName}>Petly</span>
      </div>

      {/* Orange card — dog peeks, slides up on hover */}
      <div className={styles.petlyOrangeCard}>
        {/* Decorative blobs */}
        <div className={styles.petlyBlobsWrap}>
          <img src={petlyBlobs} alt="" className={styles.petlyBlobs} />
        </div>

        {/* Dog photo */}
        <img src={petlyDog} alt="" className={styles.petlyDog} />
      </div>

      {/* Description */}
      <p className={styles.petlyDesc}>
        Build by vets<br />who love pets
      </p>
    </>
  )
}

const cases = [
  { slug: 'esphera',      label: 'Esphera Capital',      tag: 'Fintech',               className: styles.esphera,   Animation: EspheraAnimation },
  { slug: 'throne',       label: 'Throne & Listful',     tag: 'E-commerce',             className: styles.throne,    Animation: ThroneAnimation },
  { slug: 'sos',          label: 'Seed Oils Scout',      tag: 'Health & Wellness',      className: styles.seedoils,  Animation: SeedOilsAnimation },
  { slug: 'unbound',      label: 'Unbound',              tag: 'Wellness',               className: styles.unbound,   Animation: UnboundAnimation },
  { slug: 'royo',         label: 'Royo',                 tag: 'Education',              className: styles.royo,      Animation: RoyoAnimation },
  { slug: 'petly',        label: 'Petly',                tag: 'Pet care',               className: styles.petly,     Animation: PetlyAnimation },
  { slug: 'trucksmarter', label: 'Trucksmarter',         tag: 'Logistics & Mobility',   className: styles.tm,        Animation: TruckSmarterAnimation },
]

export default function CasesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cases.map(({ slug, label, tag, className, Animation }) => (
            <Link
              key={slug}
              to={`/cases/${slug}`}
              className={`${styles.card} ${className}`}
            >
              {Animation ? (
                <Animation />
              ) : (
                <div className={styles.cardLabel}>
                  <span className={styles.cardName}>{label}</span>
                  <span className={styles.cardTag}>{tag}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
