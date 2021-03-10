import React, { useState } from 'react';
import { useSfx } from '../hooks/use-sfx';
import { BoopDrop } from './boop-drop';
import styles from '../styles/hero.module.css';

const taglines = [

  {
    rotation: '18deg',
    scale: 1.05,
    size: '5.6vw',
    'size-lg': '44px',
    text: `
      is a computer science engineer
    `,
    top: '0.025em',
  },
  {
    scale: '1.3',
    rotation: '-3deg',
    size: '4.7vw',
    'size-lg': '38.5px',
    text: `
      <span class="love">love</span>s competitive programming
    `,
    top: '-0.1em',
  },
  {
    rotation: '18deg',
    scale: 1.05,
    size: '5.6vw',
    'size-lg': '44px',
    text: `
      is a MERN stack developer
    `,
    top: '0.025em',
  },
  {
    size: '8.1vw',
    'size-lg': '64px',
    text: `
      AKA TASS <span class="love">love</span>
    `,
  },

  {
    size: '8.1vw',
    'size-lg': '64px',
    text: `
      has a lot of ideas
    `,
  },
  {
    size: '8.9vw',
    'size-lg': '72px',
    text: `
      is a FIFA player
    `,
  },
  {
    rotation: '-9deg',
    scale: '1',
    size: '8.1vw',
    'size-lg': '64.5px',
    text: `
      <span class="love">love</span>s CLUB AFRICAIN
    `,
  },
  {
    rotation: '18deg',
    scale: 1.05,
    size: '5.6vw',
    'size-lg': '44px',
    text: `
      is a MERN stack developer
    `,
    top: '0.025em',
  },
  {
    scale: '1.3',
    rotation: '-3deg',
    size: '4.7vw',
    'size-lg': '38.5px',
    text: `
       <span class="love">love</span> new technologies
    `,
    top: '-0.1em',
  },
];

const CycleTagline = ({ clickHandler }) => {
  const [active, setActive] = useState(false);

  const images = {
    off:
      'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1593806081/jason.af/rotate-off.png',
    on:
      'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1593806090/jason.af/rotate-on.png',
  };

  const handleClick = event => {
    event.preventDefault();

    setActive(true);
    setTimeout(() => setActive(false), 500);

    clickHandler();
  };

  return (
    <a
      href="#cycle-tagline"
      onClick={handleClick}
      className={`${styles.cycle} ${active ? styles.active : ''}`}
    >
      <img
        src={images[active ? 'on' : 'off']}
        alt="drawing of two arrows pointing in a circle"
      />
      <span className="visually-hidden">change tagline</span>
    </a>
  );
};

export function Hero() {
  const { playBoop } = useSfx();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const tagline = taglines[taglineIndex];

  function cycleTagline() {
    playBoop();

    const index = taglineIndex + 1;
    setTaglineIndex(index < taglines.length ? index : 0);
  }

  return [
    <BoopDrop className={styles.boops} />,
    <h1 className={styles.hero}>
      <span className={styles.firstLine}>Houcem</span>
      <span className={styles.box}>Testouri</span>
      <span
        className={styles.tagline}
        style={{
          '--top': tagline.top || '-7px',
          '--rotation': tagline['rotation'] || '0deg',
          '--scale': tagline.scale || 1.1,
          '--size': tagline.size || '8.1vw',
          '--size-lg': tagline['size-lg'] || '44px',
        }}
        dangerouslySetInnerHTML={{ __html: tagline.text }}
      />
    </h1>,
    <CycleTagline clickHandler={cycleTagline} />,
  ];
}
