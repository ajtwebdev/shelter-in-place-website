import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div``

const StyledImg = styled(GatsbyImage)`
  box-shadow: -10px 10px 0px 1px var(--clr-accent);
  max-height: 600px;
`

export default function ImageLeft({ subheader, title, body, image }) {
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
            className="stretch"
          />
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
