import Link from 'next/link';

export const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/books">
        <a>Books</a>
      </Link>
    </nav>
  </header>
);
