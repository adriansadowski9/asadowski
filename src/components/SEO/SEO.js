import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => (
  <Helmet
    title="Adrian Sadowski - Front-end Developer"
    meta={[
      {
        name: 'description',
        content: 'Adrian Sadowski - Front-end Developer',
      },
      {
        name: 'keywords',
        content: 'frontend, developer',
      },
    ]}
    link={[
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' }
    ]}
  />
);

export default SEO;