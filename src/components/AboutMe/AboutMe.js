import React from "react"
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const SectionWrapper = styled.div`
    padding: 55px 35px;
`;

const Title = styled.h3`
    color: ${theme.black};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0;
    background: ${theme.yellow};
    width: 230px;
`;

const Content = styled.p`
    margin: 55px 0 0 0;
    font-size: ${theme.font.size.xxxs};
`;

const AboutMe = () => (
    <SectionWrapper>
        <Title>O mnie</Title>
        <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem diam, ultrices at lacus in, interdum gravida elit. Integer viverra mi suscipit, fringilla quam sed, porttitor magna. Vestibulum pellentesque nulla eget ornare sollicitudin. Vivamus lacinia nisi ac odio iaculis consequat. Vivamus rutrum arcu orci, quis mollis augue condimentum vel. In faucibus accumsan felis, sit amet tincidunt dolor bibendum non. Duis bibendum lorem justo, vitae cursus lectus facilisis vel. In lectus metus, placerat vitae consequat ac, ultrices et leo. Morbi nunc risus, viverra pellentesque nibh eu, mattis maximus sem. Vestibulum dictum varius nisl non egestas. Curabitur euismod ipsum a malesuada sodales. Duis eget commodo neque. Phasellus vel odio nec neque consequat sagittis. Donec elit sem, malesuada eu auctor at, euismod vel nunc. Suspendisse et justo neque. Ut laoreet nunc ac purus placerat, id euismod justo imperdiet.</Content>
    </SectionWrapper>
)

export default AboutMe
