import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const StyledButton = styled.button`
    padding: 7px 50px;
    border: none;
    background: ${theme.white};
    color: ${theme.black};
    font-size: ${theme.font.size.xxxs};
    font-weight: ${theme.font.weight.bold};
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: background .1s ease-in .1s, color .1s ease-in .1s;
    ::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 7px;
        left: 7px;
        transform: translateZ(-1px);
        background: ${theme.black};
        pointer-events: none;
        transition: top .1s ease-in, left .1s ease-in;
    }

    :hover {
        background: ${theme.black};
        color: ${theme.white};
        ::after {
            top: 0;
            left: 0;
        }
    }

    ${theme.mq.desktop} {
        padding: 30px 155px;
        font-size: ${theme.font.size.s};

        ::after {
            top: 16px;
            left: 16px;
        }
    }
`;

const Button = ({children, className}) => (
    <StyledButton className={className}>{children}</StyledButton>
)

Button.defaultProps = {
    className: ''
}

Button.propTypes = {
    children: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.node),
                PropTypes.node
            ]).isRequired,
    className: PropTypes.string
}

export default Button
