import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header id="header" className="flex justify-between items-center p-8 bg-dark shadow-green">
      <Link href="/">
        <a className={`text-green ${router.pathname === '/' ? 'underline' : ''}`}>Home</a>
      </Link>
      <nav className="flex space-x-4">
        <Link href="/about">
          <a className={`text-green ${router.pathname === '/about' ? 'underline' : ''}`}>About</a>
        </Link>
        <Link href="/projects">
          <a className={`text-green ${router.pathname === '/projects' ? 'underline' : ''}`}>Projects</a>
        </Link>
        <Link href="/contact">
          <a className={`text-green ${router.pathname === '/contact' ? 'underline' : ''}`}>Contact</a>
        </Link>
      </nav>
    </header>
  );
}