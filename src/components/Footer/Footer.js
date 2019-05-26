import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import GithubIcon from 'assets/images/GitHub.svg';
import LinkedInIcon from 'assets/images/LinkedIn.svg';

const FooterWrapper = styled.div`
    padding: 55px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.h3`
    background: ${theme.yellow};
    font-size: ${theme.font.size.xl};
    color: ${theme.black};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    padding: 2px 30px;
    margin: 0;
`;

const Socials = styled.div`
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    svg {
        path {
            fill: ${theme.black};
        }
    }
`;


const Footer = () => (
    <FooterWrapper>
        <Logo>as.</Logo>
        <Socials>
            <GithubIcon />
            <LinkedInIcon />
        </Socials>
    </FooterWrapper>
)

export default Footer
