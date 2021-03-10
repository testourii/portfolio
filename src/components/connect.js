import React from 'react';
import styles from '../styles/connect.module.css';
import { Intro } from './intro';
import { Platform } from './platform';

const platforms = [
  {
    id: 'Github',
    label: 'Github',
    link: 'https://github.com/testourii',
    linkText: 'follow on github',
    description: `
    `,
    image: 'git_zemu8f',
  },
  {
    id: 'Linkedin',
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/houcem-testouri-958917158/',
    linkText: 'connect on linkedin',
    description: `
      
    `,
    image: 'in_legqck',
  },
  {
    id: 'facebook',
    label: 'facebook',
    link: 'https://www.facebook.com/houcem.testouri',
    linkText: 'Follow on Facebook',
    description: `
      
    `,
    image: 'fb_zb88wk',
  },
];

export function Connect() {
  return (
    <section className={styles.connect}>
      <Intro headline="Connect with Houcem.">
        <p>
          If you want to catch up with Houcem, he’s most active on these
          platforms.
        </p>
      </Intro>
      <div className={styles.platforms}>
        {platforms.map(platform => (
          <Platform key={platform.id} {...platform} />
        ))}
      </div>
    </section>
  );
}
