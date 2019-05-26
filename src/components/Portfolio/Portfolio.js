import React from "react"
import styled from 'styled-components';
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

const PortfolioItem = styled.div`
    width: 100%;
    height: 500px;
    background: ${theme.white};
    margin-bottom: 55px;
    position: relative;
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

const Portfolio = () => (
    <SectionWrapper>
        <Title>Portfolio</Title>
        <ContentWrapper>
            <PortfolioItem name="Movie finder"/>
            <PortfolioItem name="Crypto calc"/>
            <PortfolioItem name="Foody"/>
        </ContentWrapper>
    </SectionWrapper>
)

export default Portfolio
