import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import GithubIcon from 'assets/images/GitHub.svg';
import LinkedInIcon from 'assets/images/LinkedIn.svg';

const FooterWrapper = styled.div`
    padding: 55px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${theme.mq.desktop} {
        padding: 70px 140px;
        flex-direction: row;
        justify-content: space-between;
    }
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

    ${theme.mq.desktop} {
        width: auto;
        align-items: center;
        padding: 0;
        a:first-of-type {
            margin-right: 110px;
        }
    }
`;

const MenuList = styled.ul`
    display: none;
    ${theme.mq.desktop} {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
    }
`;

const MenuItem = styled.li`
    list-style-type: none;
    padding: 0 25px;
    :first-of-type {
        padding-left: 0;
    }
    :last-of-type {
        padding-right: 0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    color: ${theme.black};
`;


const Footer = () => (
    <FooterWrapper>
        <Logo>as.</Logo>
        <MenuList>
                <MenuItem><StyledLink to="/#about-me">O mnie</StyledLink></MenuItem>
                <MenuItem><StyledLink to="/#portfolio">Portfolio</StyledLink></MenuItem>
                <MenuItem><StyledLink to="/#contact">Kontakt</StyledLink></MenuItem>
        </MenuList>
        <Socials>
            <a href="https://github.com/luvisoniasty" target="_blank" rel="noopener noreferrer">
                <GithubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/adrian-sadowski-6299b7171/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
            </a>
        </Socials>
    </FooterWrapper>
)

export default Footer
