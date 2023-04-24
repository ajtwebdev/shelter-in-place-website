import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../../layoutComponents"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../../buttons"

const Wrapper = styled.div`
  background: url("../../images/hero.jpg"), rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function FaqFeatured({ title, body, questions }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              {questions.map(item => {
                return (
                  <AccordionItem style={AccordionStyle}>
                    <h2>
                      <AccordionButton>
                        <Box
                          className="subheader"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
            <div className="spacing">
              <h2 className="title">{title}</h2>
              <p>
                {body ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${body}`,
                    }}
                  />
                ) : null}
              </p>
              <ButtonSecondaryLight to="/contact">
                book a service
              </ButtonSecondaryLight>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
