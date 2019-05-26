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
`;

const Title = styled.h3`
    color: ${theme.black};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0;
    background: ${theme.white};
    width: 255px;
`;

const DetailsContainer = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
`;

const ContactDetail = styled.div`
    flex-direction: row;
    position: relative;
    margin-top: 20px;
    :first-of-type {
        margin-top: 0;
    }
`;

const ContactText = styled.span`
    line-height: 24px;
    font-size: ${theme.font.size.xxxs};
    position: absolute;
    left: 50px;
`;

const Contact = () => (
    <SectionWrapper>
        <Title>Kontakt</Title>
        <DetailsContainer>
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
    </SectionWrapper>
)

export default Contact
