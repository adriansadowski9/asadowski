import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'assets/styles/theme';

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - var(--vh-offset, 0px));
    max-height: calc(100vh - var(--vh-offset, 0px));
    background: ${theme.yellow};
    display: flex;
    align-items: center;
`;
const Message = styled.div`
    margin: 0 35px;
    ${theme.mq.desktop} {
      margin: 0 50px;
    }
    ${theme.mq.large} {
      margin: 0 140px;
    }
`;
const StyledHeader = styled.h3`
    font-size: ${theme.font.size.m};
    font-weight: ${theme.font.weight.bold};
    margin: 0 0 50px 0;
    width: 270px;
    background-color: ${theme.white};
    ${theme.mq.tablet} {
      font-size: ${theme.font.size.l};
      width: auto;
    }
    ${theme.mq.desktop} {
      font-size: ${theme.font.size.l};
      width: auto;
      display: flex;
    }
`;

const StyledLink = styled(Link)`
    font-size: ${theme.font.size.xxxs};
    font-weight: ${theme.font.weight.bold};
    text-decoration: none;
    color: ${theme.black};
    border: 2px solid ${theme.black};
    padding: 7px 16px;
    transition: background .2s ease-in, color .2s ease-in;
    :hover {
      background: ${theme.black};
      color: ${theme.white};
    }
    ${theme.mq.tablet} {
      padding: 14px 32px;
        font-size: ${theme.font.size.xxs};
    }
    ${theme.mq.desktop} {
      padding: 14px 32px;
        font-size: ${theme.font.size.xxs};
    }
`;

const Error = () => {
  return (
    <Container>
      <Message>
        <StyledHeader>Nie znaleziono podstrony.</StyledHeader>
        <StyledLink to="/">powrót do strony</StyledLink>
      </Message>
    </Container>
  );
};

export default Error;