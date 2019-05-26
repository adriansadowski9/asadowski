import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import Hamburger from 'components/Hamburger/Hamburger';

const HeaderWrapper = styled.div`
    padding: 25px 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
`;

const Logo = styled.h3`
    background: ${theme.yellow};
    font-size: ${theme.font.size.s};
    color: ${theme.black};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    padding: 2px 10px;
    margin: 0;
`;


const Header = ({ className }) => (
    <HeaderWrapper className={className}>
        <Logo>as.</Logo>
        <Hamburger/>
    </HeaderWrapper>
)

Header.propTypes = {
    className: PropTypes.string.isRequired
}

export default Header
