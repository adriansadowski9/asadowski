import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const SectionWrapper = styled.div`
    padding: 55px 35px;
    
    ${theme.mq.desktop} {
        padding: 150px 50px;
    }

    ${theme.mq.large} {
        padding: 150px 140px;
    }
`;

const Title = styled.h3`
    color: ${theme.black};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0;
    background: ${theme.yellow};
    width: 230px;
`;

const Content = styled.div`
    margin: 55px 0 0 0;
    font-size: ${theme.font.size.xxxs};
    ${theme.mq.desktop} {
        margin-top: 70px;
        font-size: ${theme.font.size.s};
    }
`;

const Paragraph = styled.p`
    margin-top: 0;
    font-size: ${theme.font.size.xxxs};
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.s};
    }
    :nth-of-type(2) {
        margin-bottom: 0px;
    }
    :last-of-type {
        font-weight: ${theme.font.weight.bold};
        font-size: ${theme.font.size.xxxxs};
        ${theme.mq.desktop} {
        font-size: ${theme.font.size.xxs};
        }
    }
`;

const AboutMe = () => (
    <SectionWrapper id="about-me">
        <Title>O mnie</Title>
        <Content>
            <Paragraph>Nazywam się Adrian Sadowski, jestem 23 letnim Junior Front-end Developerem mieszkającym w Gdańsku. Studiuję informatykę na Uniwersytecie Gdańskim, a od dyplomu dzieli mnie jedynie egzamin licencjacki. W swojej pracy staram się dbać o szczegóły, aby być jak najbardziej zadowolonym z efektów końcowych. Moje przykładowe prace można zobaczyć w sekcji poniżej. Jestem nastawiony na dalszy rozwój, aby móc tworzyć coraz bardziej dopracowane i zaawansowane aplikacje. Lubię rozwiązywać problemy i stawiać przed sobą różne wyzwania. Interesuję się również mechaniką samochodową, podróżami, sportami walki oraz piłką nożną.</Paragraph>
            <Paragraph>Aktualnie korzystam między innymi z takich technologii jak:</Paragraph>
            <Paragraph>React, Redux, Styled-components, HTML, Javascript, CSS, SCSS, Node.js, Express, MongoDB</Paragraph>
        </Content>
    </SectionWrapper>
)

export default AboutMe
