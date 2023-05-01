import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
max-width: 90ch;
margin-left: auto;
margin-right: auto;
`

const Flex = styled.div`display: flex;`

const StyledImg = styled(GatsbyImage)`
  border-radius: 10000px;
  border: 2px solid var(--clr-accent);
  height: 250px;
  width: 250px;
  object-fit: cover;
`

export default function Bio({ title, description, image }) {
  return (
    <Section>
      <Container>
        <center>
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
            className="stretch"
          />
          <Text className="spacing">
            <div>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            ></div>
            <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
          </Text>
        </center>
      </Container>
    </Section>
  )
}
