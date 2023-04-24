import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../../buttons"
import { StaticImage } from "gatsby-plugin-image"
import { FaCheckCircle } from "react-icons/fa"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 75vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
`

export default function Hero({ title, description, image }) {
  return (
    <HeroWrapper img={image.localFile.childImageSharp.fluid.src}>
      <Container>
        <Text className="spacing">
          <h1 className="title">{title}</h1>
          <p className="subheader">{description}</p>
          <ButtonPrimary to="/contact">contact us</ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
  )
}
