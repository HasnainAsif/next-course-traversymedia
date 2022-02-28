import { Fragment } from 'react';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
