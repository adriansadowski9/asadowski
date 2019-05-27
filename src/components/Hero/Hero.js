import React from 'react';
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import Header from 'components/Header/Header';
import GithubIcon from 'assets/images/GitHub.svg';
import LinkedInIcon from 'assets/images/LinkedIn.svg';

const HeroWrapper = styled.div`
    background: ${theme.black};
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        width: 100vh;
        height: 100vh;
        left: 70%;
        top: 28%;
        background: ${theme.yellow};
        transform: rotate(45deg);
    }
`;

const StyledHeader = styled(Header)`
    position: absolute;
    top: 0;
    left: 0;
`;

const HeroTitle = styled.div`
    margin: 150px 0 0 35px;
`;

const Title = styled.h2`
    color: ${theme.white};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    margin: 0;
`;

const Subtitle = styled.h3`
    color: ${theme.white};
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    margin: 0;
`;

const Socials = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 35px;
    bottom: 55px;
    a:first-child {
        margin-bottom: 15px;
    }
`;

const Hero = () => (
    <HeroWrapper>
        <StyledHeader/>
        <HeroTitle>
            <Title>Cześć.</Title>
            <Subtitle>Lorem ipsum.</Subtitle>
        </HeroTitle>
        <Socials>
            <a href="https://github.com/luvisoniasty" target="_blank" rel="noopener noreferrer">
                <GithubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/adrian-sadowski-6299b7171/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
            </a>
        </Socials>
    </HeroWrapper>
)

export default Hero
