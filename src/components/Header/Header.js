import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from './MobileMenu';

const HeaderWrapper = styled.div`
    padding: 25px 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
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
        const { className } = this.props;
        const { mobileMenu } = this.state;
        return(
            <HeaderWrapper className={className}>
                <Logo openedMenu={mobileMenu}>as.</Logo>
                <Hamburger toggleMenu={this.toggleMobileMenu} openedMenu={mobileMenu}/>
                <MobileMenu toggleMenu={this.toggleMobileMenu} openedMenu={mobileMenu}/>
            </HeaderWrapper>
        )
    }
}

Header.propTypes = {
    className: PropTypes.string.isRequired
}

export default Header
