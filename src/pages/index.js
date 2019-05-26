import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';
import AboutMe from 'components/AboutMe/AboutMe';
import Portfolio from 'components/Portfolio/Portfolio';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

const SectionWrapper = styled.div`
    overflow: hidden;
`;

const IndexPage = () => (
  <MainTemplate>
    <SectionWrapper>
      <Hero/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </SectionWrapper>
  </MainTemplate>
)

export default IndexPage
