import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => (
  <Helmet
    defaultTitle="Adrian Sadowski - Front-end Developer"
  >
    <html lang="pl" amp />
    <meta 
      name="description" 
      content="Nazywam się Adrian Sadowski, jestem 23 letnim Junior Front-end Developerem mieszkającym w Gdańsku. Zainteresowanych współpracą zapraszam do kontaktu." 
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
  </Helmet>
);

export default SEO;