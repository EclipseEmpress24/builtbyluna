import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/assets/images/BBL03.png" alt="BuiltByLuna Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">BuiltByLuna</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resume">Resume</Link>
        <a href="https://github.com/EclipseEmpress24" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/anjana-k-042b39158/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/EclipseEmpress1" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </nav>
  );
}

