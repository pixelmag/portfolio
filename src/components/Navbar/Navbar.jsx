import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.pill}>
        <div className={styles.shadow} aria-hidden="true" />
        {links.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
