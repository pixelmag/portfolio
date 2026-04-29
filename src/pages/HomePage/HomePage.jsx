import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import CasesGrid from '../../components/CasesGrid/CasesGrid'
import Footer from '../../components/Footer/Footer'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Hero />
        <CasesGrid />
      </main>
      <Footer />
    </>
  )
}
