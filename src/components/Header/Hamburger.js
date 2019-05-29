import React from "react"
import PropTypes from "prop-types";
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const HamburgerContainer = styled.div`
    display: flex;
    align-self: center;
    width: 50px;
    height: 39px;
    padding: 5px;
    cursor: pointer;
    z-index: 1000;
`;
const HamburgerIcon = styled.div`
    align-self: center;
    width: 100%;
    height: 5px;
    background: ${theme.white};
    position: relative;
    visibility: ${props => props.opened ? 'hidden' : 'visible'};
    transition: ${props => props.opened ? 'visibility 0s ease-in .2s' : 'visibility 0s ease-in .2s'};
    ::before {
        content: '';
        width: 100%;
        height: 5px;
        background: ${props => props.opened ? theme.black : theme.white};
        position: absolute;
        visibility: visible;
        top: ${props => props.opened ? '0' : '-12px'};
        transform: rotate(${props => props.opened ? '-45deg' : '0deg'});
        transition: ${props => props.opened ? 
                    'background .2s ease-in .2s, transform .2s ease-in .2s, top .2s ease-in' 
                    : 'background .2s ease-in, top .2s ease-in .2s, transform .2s ease-in'};
    }

    ::after {
        content: '';
        width: 100%;
        height: 5px;
        background: ${props => props.opened ? theme.black : theme.white};
        position: absolute;
        visibility: visible;
        bottom: ${props => props.opened ? '0' : '-12px'};
        transform: rotate(${props => props.opened ? '45deg' : '0deg'});
        transition: ${props => props.opened ? 
                    'background .2s ease-in .2s, transform .2s ease-in .2s, bottom .2s ease-in' 
                    : 'background .2s ease-in, bottom .2s ease-in .2s, transform .2s ease-in'};
    }
`;

const Hamburger = (props) => {
    const { toggleMenu, openedMenu, className } = props;
    return  (
        <HamburgerContainer className={className} onClick={toggleMenu}>
            <HamburgerIcon opened={openedMenu}/>
        </HamburgerContainer>
    )
}

Hamburger.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    openedMenu: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired
}

export default Hamburger
