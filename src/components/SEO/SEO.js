import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => (
  <Helmet
    defaultTitle="Adrian Sadowski - Front-end Developer"
  >
    <html lang="pl" amp />
    <meta name="description" content="Adrian Sadowski - Front-end Developer" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
  </Helmet>
);

export default SEO;