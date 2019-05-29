import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import theme from 'assets/styles/theme';

const StyledPortfolioItem = styled.div`
    width: 100%;
    height: 500px;
    box-shadow: 0px 0px 15px 0px ${theme.black};
    margin-bottom: 55px;
    position: relative;
    overflow: hidden;
    :last-of-type {
        margin-bottom: 0;
    }
    ::after {
        content: '${props => props.name}';
        font-size: ${theme.font.size.xs};
        font-weight: ${theme.font.weight.bold};
        text-transform: uppercase;
        padding: 27px 20px;
        background: ${theme.yellow};
        color: ${theme.black};
        position: absolute;
        bottom: 50px;
        right: 0;
        transition: opacity .2s ease-in;
    }
    ${theme.mq.desktop} {
        width: 32%;
        height: 550px;
        margin-bottom: 0;
    }

    ${theme.mq.wide} {
        height: 700px;
    }
    :hover {
        .gatsby-image-wrapper {
            filter: blur(5px);
        }
        ::after {
            opacity: 0;
        }
        .item-details {
            opacity: 0.95;
            a, span {
                visibility: visible;
            }
        }
    }
`;

const PortfolioItemDetails = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${theme.yellow};
    opacity: 0;
    transition: opacity .2s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ItemName = styled.h4`
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    padding: 27px 20px;
    background: ${theme.black};
    color: ${theme.white};
    align-self: flex-end;
    margin: 30px 0;
`;

const DescriptionContainer = styled.div`
    padding: 20px 15px;
    width: 100%;
`;

const Description = styled.p`
    margin-top: 0;
    text-align: right;
    font-size: ${theme.font.size.xxxs};
    ${theme.mq.wide} {
        font-size: ${theme.font.size.xxs};
    }

`;

const UsedTechnology = styled.p`
    margin-bottom: 0;
    text-align: right;
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;

    ${theme.mq.wide} {
        font-size: ${theme.font.size.xxxs};
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
`;

const StyledLink = styled.a`
    padding: 16px 30px;
    margin-top: 15px;
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    background: ${theme.black};
    color: ${theme.white};
    visibility: hidden;
    transition: visibility 0s ease-in .05s;
    :hover {
        background: ${theme.white};
        color: ${theme.black}
    }

    ${theme.mq.desktop} {
        font-size: ${theme.font.size.xxxs};
    }

    ${theme.mq.large} {
        padding: 16px 45;
        font-size: ${theme.font.size.xxs};
    }
`;

const StyledSpan = styled.span`
    padding: 16px 30px;
    margin-top: 15px;
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    text-align: center;
    background: ${theme.black};
    color: ${theme.white};
    cursor: not-allowed;
    visibility: hidden;
    transition: visibility 0s ease-in .05s;
    :hover {
        background: ${theme.white};
        color: ${theme.black}
    }
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.xxxs};
    }

    ${theme.mq.large} {
        padding: 16px 45;
        font-size: ${theme.font.size.xxs};
    }
`;

const PortfolioItem = (props) => {
    const imageStyle = {
        position: "initial",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        transform: "scale(1.27) rotate(10deg)" 
    }
    const { name, imageName, description, usedTechnology, demoLink, githubLink} = props;
    return (
        <StaticQuery
            query={query}
            render={data => {
                const image = data.images.edges.find(n => {
                  return n.node.relativePath.includes(imageName);
                });
                if (!image) { return null; }
                return (
                <StyledPortfolioItem name={name}>
                    <BackgroundImage
                        fluid={image.node.childImageSharp.fluid}
                        style={imageStyle}
                    />
                    <PortfolioItemDetails className="item-details">
                        <ItemName>{name}</ItemName>
                        <DescriptionContainer>
                            <Description>
                                {description}
                            </Description>
                            <UsedTechnology>
                                {usedTechnology}
                            </UsedTechnology>
                        </DescriptionContainer>
                        <LinkContainer>
                            {demoLink ? 
                            <StyledLink href={demoLink} target="_blank" rel="noopener noreferrer">
                                Demo
                            </StyledLink>
                            : '' }
                            { githubLink ? 
                            <StyledLink href={githubLink} target="_blank" rel="noopener noreferrer">
                                Github
                            </StyledLink>
                            : <StyledSpan>
                                Github (prywatne)
                              </StyledSpan>
                            }
                        </LinkContainer>
                    </PortfolioItemDetails>
                </StyledPortfolioItem>
            )}}
        />
    );
}

PortfolioItem.defaultProps = {
    demoLink: '',
    githubLink: ''
}

PortfolioItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    usedTechnology: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string
}

export default PortfolioItem;

export const fluidImage = graphql`
fragment fluidImage on File {
    childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
        }
    }
}
`;

export const query = graphql`
  query {
    images: allFile {
        edges {
          node {
            relativePath
            name
            ...fluidImage
          }
        }
      }
  }
`