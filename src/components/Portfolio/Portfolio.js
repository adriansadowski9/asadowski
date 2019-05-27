import React from "react"
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import theme from 'assets/styles/theme';

const SectionWrapper = styled.div`
    padding: 55px 35px;
    background: ${theme.black};
`;

const Title = styled.h3`
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
`;

const PortfolioItem = styled.a`
    width: 100%;
    height: 500px;
    box-shadow: 0px 0px 15px 0px ${theme.black};
    margin-bottom: 55px;
    position: relative;
    overflow: hidden;
    :last-of-type {
        margin-bottom: 0;
    }
    ::after {
        content: '${props => props.name}';
        font-size: ${theme.font.size.xs};
        font-weight: ${theme.font.weight.bold};
        text-transform: uppercase;
        padding: 27px 20px;
        background: ${theme.yellow};
        color: ${theme.black};
        position: absolute;
        bottom: 50px;
        right: 0;
    }
`;

const Portfolio = () => {
    const imageStyle = {
        position: "initial",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        filter: "grayscale(0.3)",
        transform: "scale(1.27) rotate(10deg)" 
    }
    return (
        <StaticQuery
            query={query}
            render={data => (
                <SectionWrapper id="portfolio">
                    <Title>Portfolio</Title>
                    <ContentWrapper>
                        <PortfolioItem name="Movie finder" href="https://luvisoniasty.github.io/movie-finder/" target="_blank" rel="noopener noreferrer">
                        <BackgroundImage
                            fluid={data.movfinderImage.childImageSharp.fluid}
                            style={imageStyle}
                        />
                        </PortfolioItem>
                        <PortfolioItem name="Crypto calc" href="https://luvisoniasty.github.io/crypto-calc/" target="_blank" rel="noopener noreferrer">
                            <BackgroundImage
                                fluid={data.cryptocalcImage.childImageSharp.fluid}
                                style={imageStyle}
                            />
                        </PortfolioItem>
                        <PortfolioItem name="Foody" href="http://my-foody.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <BackgroundImage
                                fluid={data.foodyImage.childImageSharp.fluid}
                                style={imageStyle}
                            />
                        </PortfolioItem>
                    </ContentWrapper>
                </SectionWrapper>
            )}
        />
    );
}

export default Portfolio;

export const fluidImage = graphql`
fragment fluidImage on File {
    childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
        }
    }
}
`;

export const query = graphql`
  query {
    movfinderImage: file(relativePath: { eq: "movfinder.png" }) {
        ...fluidImage
    },
    cryptocalcImage: file(relativePath: { eq: "cryptocalc.png" }) {
        ...fluidImage
    },
    foodyImage: file(relativePath: { eq: "foody.png" }) {
        ...fluidImage
    }
  }
`