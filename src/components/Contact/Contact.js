import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import MailIcon from 'assets/images/mail.svg';
import PhoneIcon from 'assets/images/phone.svg';
import LocationIcon from 'assets/images/location.svg';
import ContactForm from './ContactForm';

const SectionWrapper = styled.div`
    padding: 55px 35px;
    background: ${theme.yellow};
    ${theme.mq.desktop} {
        padding: 150px 140px;
    }
`;

const Title = styled.h3`
    color: ${theme.black};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0;
    background: ${theme.white};
    width: 255px;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    ${theme.mq.desktop} {
        margin-top: 70px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const DetailsContainer = styled.div`
    flex-direction: column;
`;

const StyledText = styled.span`
    display: none;
    ${theme.mq.desktop} {
        display: flex;
        font-size: ${theme.font.size.l};
        font-weight: ${theme.font.weight.bold};
        position: relative;
        margin-bottom: 80px;

        ::after {
            content: '';
            width: 120%;
            height: 5px;
            background: ${theme.white};
            position: absolute;
            bottom: -25px;
        }
    }
`;

const ContactDetail = styled.div`
    flex-direction: row;
    position: relative;
    margin-top: 20px;
    :first-of-type {
        margin-top: 0;
    }

    ${theme.mq.desktop} {
        margin-top: 60px;
    }
`;

const ContactText = styled.span`
    line-height: 24px;
    font-size: ${theme.font.size.xxxs};
    position: absolute;
    left: 50px;
    
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.s};
    }
`;

const Contact = () => (
    <SectionWrapper id="contact">
        <Title>Kontakt</Title>
        <ContactContainer>
            <DetailsContainer>
                <StyledText>Porozmawiajmy</StyledText>
                <ContactDetail>
                    <MailIcon/> 
                    <ContactText>
                        kontakt@asadowski.me
                    </ContactText>
                </ContactDetail>
                <ContactDetail>
                    <PhoneIcon/>
                    <ContactText>
                        +48 888 834 480
                    </ContactText>
                </ContactDetail>
                <ContactDetail>
                    <LocationIcon/>
                    <ContactText>
                        Gdańsk, Polska
                    </ContactText>
                </ContactDetail>
            </DetailsContainer>
            <ContactForm/>
        </ContactContainer>
    </SectionWrapper>
)

export default Contact
