import React from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import AboutMe from 'components/AboutMe/AboutMe';
import Portfolio from 'components/Portfolio/Portfolio';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

const SectionWrapper = styled.div`
    overflow: hidden;
`;

const IndexPage = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', { speed: 600 })
    // eslint-disable-next-line
    const test = vhCheck();
  }
  return (
    <MainTemplate>
      <SectionWrapper>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </SectionWrapper>
    </MainTemplate>
  );
}

export default IndexPage
