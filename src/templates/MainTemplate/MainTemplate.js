import React from 'react';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';
import GlobalStyle from 'assets/styles/GlobalStyle';
import SEO from 'components/SEO/SEO';

const MainTemplate = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', { speed: 600 })
    // eslint-disable-next-line
    const test = vhCheck();
  }
  return (
    <>
      <SEO />
      <GlobalStyle />
      <>{children}</>
    </>
  )
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;