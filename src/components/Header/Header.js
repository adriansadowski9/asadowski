import React from "react"
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


const Header = () => (
    <HeaderWrapper>
        <Logo>as.</Logo>
        <Hamburger/>
    </HeaderWrapper>
)

export default Header
