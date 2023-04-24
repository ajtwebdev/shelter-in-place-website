import React from "react"
import styled from "styled-components"
import { Container, Actions } from "../../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../../buttons"
import Breadcrumb from "../../Breadcrumb/Breadcrumb"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 60vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  p {
    max-width: 70ch;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

export default function Banner({ title, subheader, description, image }) {
  return (
    <Wrapper img={image.localFile.childImageSharp.fluid.src}>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader">{subheader}</p>
            <h1 className="title">{title}</h1>
          </div>
          <p>{description}</p>
          <ButtonPrimary to="/contact">contact us</ButtonPrimary>
        </Text>
      </Container>
    </Wrapper>
  )
}
