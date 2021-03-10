import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { getFixedImageObject } from 'gatsby-transformer-cloudinary';
import styles from '../styles/photos.module.css';
import { useSfx } from '../hooks/use-sfx';
import { Button } from './button';

const photos = [
  {
    publicId: 'v1594713999/me230.jpg',
    alt: 'photo',
    caption: 'This is Houcem’s most common profile photo.',
  },
  {
    publicId: 'v1594713999/me1.png',
    alt: 'Smiling is one of Houcem’s favorite hobbies.',
    caption: '“Smiling is one of Houcem’s favorite hobbies.',
  },
  {
    publicId: 'v1594713999/me2.png',
    alt:
      'Love is that condition in which the happiness of another person is essential to your own.',
    caption:
      'Love is that condition in which the happiness of another person is essential to your own.',
  },
];

function Thumb({ photo, handleClick, isCurrent }) {
  const [fixed, setFixed] = useState(false);
  const { playClick, playPop } = useSfx();

  useEffect(() => {
    getFixedImageObject({
      public_id: photo.publicId,
      cloudName: 'duwytnix6',
      originalHeight: photo.height,
      originalWidth: photo.width,
      width: 50,
      transformations: ['g_faces', 'c_thumb', 'ar_1'],
    }).then(setFixed);
  }, [photo]);

  return fixed ? (
    <li className={styles.thumb}>
      <Button
        className={styles.thumbLink}
        hoverSound={playPop}
        clickSound={playClick}
        handleClick={handleClick}
      >
        <Image
          className={`${styles.thumbnail} ${isCurrent ? styles.active : ''}`}
          fixed={fixed}
          alt={photo.alt}
        />
      </Button>
    </li>
  ) : null;
}

export function Photos({ className }) {
  const [currentImage, setCurrentImage] = useState(photos[0]);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    getFixedImageObject({
      public_id: currentImage.publicId,
      cloudName: 'duwytnix6',
      originalHeight: currentImage.height,
      originalWidth: currentImage.width,
      width: 400,
      transformations: ['g_faces', 'c_fill', 'ar_1'],
    }).then(setFixed);
  }, [currentImage]);

  return (
    <div className={className}>
      <figure className={styles.image}>
        {fixed && (
          <Image fixed={fixed} src={currentImage.url} alt={currentImage.alt} />
        )}
        <figcaption>
          {currentImage.caption}
          <div className={styles.links}>
            <a
              className={styles.fullSize}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://res.cloudinary.com/jlengstorf/image/upload/${currentImage.publicId}.jpg`}
            >
              open full size
            </a>
          </div>
        </figcaption>
      </figure>
      <div className={styles.morePhotos}>
        <ul className={styles.thumbnails}>
          {photos.map((photo, index) => (
            <Thumb
              key={`photo-${index}`}
              photo={photo}
              isCurrent={currentImage.publicId === photo.publicId}
              handleClick={() => {
                setCurrentImage(photo);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
