import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import Button from 'components/Button/Button';

const StyledForm = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${theme.mq.desktop} {
        margin-top: 0;
        width: 50%;
    }
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

    ${theme.mq.desktop} {
        height: 80px;
        line-height: 80px;
        margin-bottom: 30px;
        padding: 20px 50px;
        font-size: ${theme.font.size.s};
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

    ${theme.mq.desktop} {
        height: 200px;
        padding: 20px 50px;
        font-size: ${theme.font.size.s};
    }
`;

const StyledButton = styled(Button)`
    margin: 20px 0 7px 0;

    ${theme.mq.desktop} {
        margin: 30px 0 16px 0;
    }
`;

const ContactForm = () => (
    <StyledForm 
        method="POST" 
        action="/success"
        data-netlify="true" 
        name="contact"
    >
        <input type="hidden" name="form-name" value="contact" />
        <StyledInput type="email" name="email" placeholder="email" required/>
        <StyledInput type="text" name="name" placeholder="imię" required/>
        <StyledTextarea name="message" placeholder="wiadomość" required/>
        <StyledButton type="submit">wyślij</StyledButton>
    </StyledForm>
)

export default ContactForm
