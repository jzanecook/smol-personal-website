import { ProjectCard } from '../components/ProjectCard'
import { getStaticProps } from '../lib/projects'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Projects({ projects }) {
  return (
    <div className="dark bg-gray-800 min-h-screen">
      <Head>
        <title>Projects | J. Zane Cook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-500 mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export { getStaticProps }