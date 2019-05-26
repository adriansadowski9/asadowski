import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const HamburgerIcon = styled.div`
    width: 40px;
    height: 5px;
    background: ${theme.white};
    position: relative;
    align-self: center;

    ::before {
        content: '';
        width: 100%;
        height: 5px;
        background: ${theme.white};
        position: absolute;
        top: -12px;
    }

    ::after {
        content: '';
        width: 100%;
        height: 5px;
        background: ${theme.white};
        position: absolute;
        bottom: -12px;
    }
`;

const Hamburger = () => (
    <HamburgerIcon/>
)

export default Hamburger
