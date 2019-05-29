import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.yellow};
    transform: translateX(${props => props.opened ? '0' : '100%'});
    transition: transform .4s ease-in .1s;
`;

const MenuList = styled.ul`
    padding: 0 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuItem = styled.li`
    margin-top: 50px;
    list-style-type: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${theme.font.size.m};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.black};
`;

const StyledContactLink = styled(StyledLink)`
    background: ${theme.black};
    color: ${theme.white};
    padding: 5px 25px;
`;


const MobileMenu = (props) => {
    const { toggleMenu, openedMenu, className } = props;
    return  (
        <MenuContainer className={className} opened={openedMenu}>
            <MenuList>
                <MenuItem onClick={toggleMenu}><StyledLink to="/#about-me">O mnie</StyledLink></MenuItem>
                <MenuItem onClick={toggleMenu}><StyledLink to="/#portfolio">Portfolio</StyledLink></MenuItem>
                <MenuItem onClick={toggleMenu}><StyledContactLink to="/#contact">Kontakt</StyledContactLink></MenuItem>
            </MenuList>
        </MenuContainer>
    )
}

MobileMenu.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    openedMenu: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired
}

export default MobileMenu
