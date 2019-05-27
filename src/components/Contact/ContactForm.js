import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const StyledForm = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    background: ${theme.white};
    color: ${theme.black};
    font-family: ${theme.font.family.montserrat};
    font-size: ${theme.font.size.xxxs};
    font-weight: ${theme.font.weight.bold};
    ::placeholder {
        color: ${theme.black};
        text-align: right;
    }
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 15px;
    border: none;
    background: ${theme.white};
    color: ${theme.black};
    font-family: ${theme.font.family.montserrat};
    font-size: ${theme.font.size.xxxs};
    font-weight: ${theme.font.weight.bold};
    ::placeholder {
        color: ${theme.black};
        text-align: right;
    }
`;

const StyledButton = styled.button`
    margin: 20px 0 7px 0;
    padding: 7px 50px;
    border: none;
    background: ${theme.white};
    color: ${theme.black};
    font-size: ${theme.font.size.xxxs};
    font-weight: ${theme.font.weight.bold};
    position: relative;
    transform-style: preserve-3d;
    ::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 7px;
        left: 7px;
        transform: translateZ(-1px);
        background: ${theme.black};
    }

`;

const ContactForm = () => (
    <StyledForm>
        <StyledInput type="text" name="email" placeholder="email"/>
        <StyledInput type="text" name="name" placeholder="imię"/>
        <StyledTextarea name="message" placeholder="wiadomość"/>
        <StyledButton type="submit">wyślij</StyledButton>
    </StyledForm>
)

export default ContactForm
