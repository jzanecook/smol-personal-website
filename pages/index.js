import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import styles from '../styles/Home.module.css'

export default function Home({ projects }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to J. Zane Cook's Website
        </h1>

        <p className={styles.description}>
          Software Developer
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Replace with your own data fetching logic
  const projects = []
  return {
    props: {
      projects,
    },
  }
}