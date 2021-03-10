import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { ExplodingNav } from './exploding-nav';
import { Settings } from './settings';
import styles from '../styles/header.module.css';

export function Header() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <header className={styles.header}>
    <meta name="google-site-verification" content="dKCwgMxmXxTWyG214KlRJYxMDw3rW2yVjwH8ewxH94M" />
      <Link to="/" rel="home" className={styles.home}>
        Houcem Testouri
      </Link>
      {isHome && [<ExplodingNav />, <Settings />]}
    </header>
  );
}
