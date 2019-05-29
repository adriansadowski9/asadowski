import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 999;

    ${theme.mq.mobile} {
        display: none;
    }

    ${theme.mq.tablet} {
        display: none;
    }
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const MenuItem = styled.li`
    list-style-type: none;
    padding: 0 25px;
    :last-of-type {
        padding-right: 0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    padding: 4px 10px;
    background: ${theme.white};
    color: ${theme.black};
    transition: background .2s ease-in, color .2s ease-in;
    :hover {
        background: ${theme.black};
        color: ${theme.white};
    }
`;

const DesktopMenu = () => {
    return  (
        <MenuContainer>
            <MenuList>
                <MenuItem><StyledLink to="/#about-me">O mnie</StyledLink></MenuItem>
                <MenuItem><StyledLink to="/#portfolio">Portfolio</StyledLink></MenuItem>
                <MenuItem><StyledLink to="/#contact">Kontakt</StyledLink></MenuItem>
            </MenuList>
        </MenuContainer>
    )
}

export default DesktopMenu
