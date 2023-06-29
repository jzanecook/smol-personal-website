import { ContactForm } from '../components/ContactForm'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Head from 'next/head'

export default function Contact() {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <Head>
        <title>Contact - J. Zane Cook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white">
          Get in touch
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}