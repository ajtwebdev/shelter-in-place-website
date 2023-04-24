import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

const StyledImg = styled(GatsbyImage)`
  max-height: 500px;
`

const Item = styled.div`
  text-align: center;

  box-shadow: var(--shadow-light);
  border-radius: var(--br);

  div {
    padding: 2em;
  }
`

export default function ComponentE({ subheader, title, content }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <GridAuto>
          {content.map(item => {
            return (
              <Item className="spacing">
                <StyledImg
                  image={item.image.localFile.childImageSharp.gatsbyImageData}
                  alt={item.image.altText}
                  s
                />
                <div>
                  <h3 className="subheader accent">{item.title}</h3>
                  {item.description ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${item.description}`,
                      }}
                    />
                  ) : null}
                </div>
              </Item>
            )
          })}
        </GridAuto>
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
