import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'assets/styles/GlobalStyle';
import SEO from 'components/SEO/SEO';

const MainTemplate = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <>{children}</>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;