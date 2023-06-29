import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          About J. Zane Cook
        </h1>

        <p className={styles.description}>
          J. Zane Cook is a software developer with a passion for creating innovative solutions. With a strong background in various programming languages and frameworks, he is always ready to take on new challenges and learn new technologies.
        </p>
      </main>
      <Footer />
    </div>
  )
}