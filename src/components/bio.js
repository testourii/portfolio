/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { useSettings } from '../context/settings';
import { useSfx } from '../hooks/use-sfx';
import { Photos } from './photos';
import styles from '../styles/bio.module.css';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';

function LengthChooser() {
  const { bioLength, updateBioLength } = useSettings();
  const { playPop, playClick } = useSfx();

  const handleChange = ({ target }) => {
    playClick();
    updateBioLength(target.value);
  };

  return (
    <form className={styles.control}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Adjust bio length:</legend>
        <div className={styles.options}>
          {['shortest', 'shorter', 'short', 'long', 'longer', 'longest'].map(
            l => {
              /* eslint-disable jsx-a11y/no-static-element-interactions */
              return (
                <div className={styles.option} onMouseEnter={playPop}>
                  <input
                    className={styles.input}
                    type="radio"
                    id={`length-${l}`}
                    name="length"
                    value={l}
                    checked={bioLength === l}
                    onChange={handleChange}
                  />
                  <label
                    key={`length-${l}`}
                    htmlFor={`length-${l}`}
                    className={styles.label}
                  >
                    <span className={styles.text}>{l}</span>
                  </label>
                </div>
              );
            },
          )}
        </div>
      </fieldset>
    </form>
  );
}

function BioText() {
  const { bioLength } = useSettings();
  const getVisibility = group => {
    const mappings = {
      shortest: ['shortest'],
      shorter: ['shorter'],
      short: ['short'],
      long: ['long'],
      longer: ['longer'],
      longest: ['longest'],
    };

    const visibility = mappings[bioLength];

    return visibility.includes(group) ? 'inline' : 'none';
  };

  return bioLength ? (
    <p className={styles.bio}>
      <span style={{ display: getVisibility('shorter') }}>
        {' '}
        Ever since I was a little kid, computer science has been my passion. So,
        now, this passion remains with me to become
      </span>{' '}
      <span style={{ display: getVisibility('long') }}>
        Ever since I was a little kid, computer science has been my passion.
        when I went to secondary school, I started to learn algorithms and
        coding with PASCAL, it was amazing to make your own "Hello world"
        program. I still remember my participation in the first coding
        competition and getting the first prize. there I discovered my happiness
        in coding and resolving hard problems.This passion carried me through my
        education at a military academy to choose computer science engineering
        where studied new languages (C, C++, Java, Python...) and higher
        mathematics, all with pretty much the same fascination that drove me as
        a kid. And it was here that I truly learned how much there was yet to
        learn.So, now, this passion remains with me to became
      </span>
      <span style={{ display: getVisibility('longer') }}>
        Ever since I was a little kid, computer science has been my passion. I
        still remember sitting hours and hours in front of a new IBM computer
        amazed how can I play Super Mario and do a such stuffs with this
        machine. At the age of ten, I was able to distinguish the different
        computer components. when I went to secondary school, I started to learn
        algorithms and coding with PASCAL, it was amazing to make your own
        "Hello world" program. I still remember my participation in the first
        coding competition and getting the first prize. there I discovered my
        happiness in coding and resolving hard problems.This passion carried me
        through my education at a military academy to choose computer science
        engineering where studied new languages (C, C++, Java, Python...) and
        higher mathematics, all with pretty much the same fascination that drove
        me as a kid. And it was here that I truly learned how much there was yet
        to learn.So, now, this passion remains with me. I'am a MERN stack
        developer and of course There's certainly yet more to learn, yet more
        problems to solve, and yet more to build.{' '}
      </span>
      <span style={{ display: getVisibility('short') }}>
        Ever since I was a little kid, computer science has been my passion.
        when I went to secondary school, I started to learn algorithms and
        coding with PASCAL. This passion carried me through my education at a
        military academy to choose computer science engineering where studied
        new languages (C, C++, Java, Python...) and higher mathematics. And it
        was here that I truly learned how much there was yet to learn.So, now,
        this passion remains with me. I become{' '}
      </span>
      <span style={{ display: getVisibility('longest') }}>
        {' '}
        Ever since I was a little kid, computer science has been my passion. I
        still remember sitting hours and hours in front of a new IBM computer
        amazed how can I play Super Mario and do a such stuffs with this
        machine. At the age of ten, I was able to distinguish the different
        computer components. when I went to secondary school, I started to learn
        algorithms and coding with PASCAL, it was amazing to make your own
        "Hello world" program. it was almost magic, being able to get the
        computer to do whatever I wanted, just by typing codes limited only by
        my overed my happiness in coding and resolving hard problems.This
        passown imagination and ingenuity. I still remember my participation in
        the first coding competition and getting the first prize. there I
        discion carried me through my education at a military academy to choose
        computer science engineering where studied new languages (C, C++, Java,
        Python...) and higher mathematics, all with pretty much the same
        fascination that drove me as a kid. And it was here that I truly learned
        how much there was yet to learn.So, now, this passion remains with me. I
        am{' '}
      </span>{' '}
            <span style={{ display: getVisibility('shortest') }}>I'am</span>
       &nbsp; a MERN stack developer{' '}
      <span style={{ display: getVisibility('longest') }}>
        and of course There's certainly yet more to learn, yet more problems to
        solve, and yet more to build. And for this, I am very grateful.
      </span>{' '}
      <span style={{ display: getVisibility('longer') }}>
        and of course There's certainly yet more to learn, yet more problems to
        solve, and yet more to build.{' '}
      </span>{' '}
    </p>
  ) : null;
}

export function Bio() {
  const { playPop, playClick } = useSfx();

  return (
    <section className={styles.container}>
      <div className={styles.bioWrapper}>
        <LengthChooser />
        <BioText />
        <div className={styles.social}>
          <h3 className={styles.connect}>Connect With Houcem:</h3>
          <ul className={styles.profiles}>
            {[
              {
                id: 'Linkedin',
                icon: Linkedin,
                link: 'https://www.linkedin.com/in/houcem-testouri-958917158/',
                label: 'Linkedin',
              },
              {
                id: 'github',
                icon: GitHub,
                link: 'https://github.com/testourii',
                label: 'GitHub',
              },
              {
                id: 'Facebook',
                icon: Facebook,
                link: 'https://www.facebook.com/houcem.testouri',
                label: 'Facebook',
              },
            ].map(profile => (
              <li className={styles.profile}>
                <a
                  href={profile.link}
                  className={styles.link}
                  onMouseDown={event => {
                    playClick();
                    event.stopPropagation();
                  }}
                  onKeyDown={event => {
                    if (event.key !== 'Enter') return;
                    playClick();
                    event.stopPropagation();
                  }}
                  onFocus={playPop}
                  onMouseEnter={playPop}
                >
                  <profile.icon className={styles.icon} />
                  <span className="visually-hidden">{profile.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Photos className={styles.imageContainer} />
    </section>
  );
}
