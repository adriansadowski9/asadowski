import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import PortfolioItem from './PortfolioItem';

const SectionWrapper = styled.div`
    padding: 55px 35px;
    background: ${theme.black};

    ${theme.mq.desktop} {
        padding: 150px 50px;
    }

    ${theme.mq.large} {
        padding: 150px 140px;
    }
`;

const Title = styled.h2`
    color: ${theme.black};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0;
    background: ${theme.yellow};
    width: 275px;
`;

const ContentWrapper = styled.div`
    margin: 55px 0 0 0;
    display: flex;
    flex-direction: column;
    ${theme.mq.desktop} {
        margin-top: 70px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Portfolio = () => (
    <SectionWrapper id="portfolio">
        <Title>Portfolio</Title>
        <ContentWrapper>
            <PortfolioItem 
                name="Movie finder" 
                imageName="movfinder.png" 
                description="Wyszukiwarka filmów wraz z filtrowaniem korzystająca z The Movie DB Api."
                usedTechnology="React, Redux, Styled-components"
                demoLink="https://luvisoniasty.github.io/movie-finder/"
                githubLink="https://github.com/luvisoniasty/movie-finder"
            />
            <PortfolioItem 
                name="Crypto calc" 
                imageName="cryptocalc.png" 
                description="Kalulator oraz tracker kryptowalut korzystający z CoinPaprika API."
                usedTechnology="React, Styled-components"
                demoLink="https://luvisoniasty.github.io/crypto-calc/"
                githubLink="https://github.com/luvisoniasty/crypto-calc"
            />
            <PortfolioItem 
                name="Foody" 
                imageName="foody.png" 
                description="Wyszukiwarka restauracji."
                usedTechnology="Node.js, Express, MongoDB, TomTom Maps, SCSS"
                demoLink="http://my-foody.herokuapp.com/"
            />
        </ContentWrapper>
    </SectionWrapper>
)

export default Portfolio;