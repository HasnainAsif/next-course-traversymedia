import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/' passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' passHref>
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
