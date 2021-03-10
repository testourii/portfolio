import React from 'react';
import { Helmet } from 'react-helmet';
import { useSettings } from '../context/settings';

export function SEO({
  title = 'A Houcem Testouri Website — Portfolio!',
  description = 'Houcem Testouri is a mern stack developer,',
  url = 'https://houcem.netlify.app/',
  image = 'https://res.cloudinary.com/duwytnix6/image/upload/v1594805144/cap.png',
  keywords = 'houcem testouri, full stack, developer, java script, portfolio',
}) {
  const { darkMode } = useSettings();

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
<meta name="google-site-verification" content="dKCwgMxmXxTWyG214KlRJYxMDw3rW2yVjwH8ewxH94M" />
      <meta
        name="twitter:widgets:theme"
        content={darkMode ? 'dark' : 'light'}
      />
      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Houcem" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <body className={darkMode ? 'dark' : 'light'} />
    </Helmet>
  );
}
