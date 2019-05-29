import React from 'react';
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const HeaderWrapper = styled.div`
    padding: 25px 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: ${props => props.openedMenu ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    z-index: 100;

    ${theme.mq.desktop} {
        padding: 25px 50px;
    }

    ${theme.mq.large} {
        padding: 25px 140px;
    }
`;

const Logo = styled.h3`
    background: ${props => props.openedMenu ? theme.black : theme.yellow};
    font-size: ${theme.font.size.s};
    color: ${props => props.openedMenu ? theme.white : theme.black};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    padding: 2px 10px;
    margin: 0;
    z-index: 1000;
    transition: ${props => props.openedMenu ? 
                'background .1s ease-in .4s, color .1s ease-in .4s' : 'background .4s ease-in .1s, color .4s ease-in .1s'};
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.l};
        padding: 0 20px;
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        }
    }
    toggleMobileMenu = () => {
        this.setState(prevState => ({mobileMenu: !prevState.mobileMenu}));
    }
    render() {
        const { mobileMenu } = this.state;
        return(
            <HeaderWrapper openedMenu={mobileMenu}>
                <Logo openedMenu={mobileMenu}>as.</Logo>
                <Hamburger toggleMenu={this.toggleMobileMenu} openedMenu={mobileMenu}/>
                <MobileMenu toggleMenu={this.toggleMobileMenu} openedMenu={mobileMenu}/>
                <DesktopMenu/>
            </HeaderWrapper>
        )
    }
}

export default Header
