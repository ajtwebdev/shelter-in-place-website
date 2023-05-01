import React from "react"
import { Container, Section } from "../../layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: url("../../images/acknowledgements.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`

const Item = styled.div`
  padding: 4em;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  ul {
    list-style-type: none;
    text-align: center;
  }
`

export default function Acknowledgements() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Item className="spacing">
            <h2 className="title accent">special acknowledgments</h2>
            <ul>
            <li className="bold">Brandon Holthaus - Rock Harbor Church</li>
            <li className="bold">David Jeremiah - Turning Point Ministry</li>
            <li className="bold">Henry Morris - Books (Creation)</li>
            <li className="bold">John Valvoord - Pre-trib Books</li>
            <li className="bold">
                J Vernon McGee - Books, Thru the Bible Ministry
              </li>
              <li className="bold">
              Dr Rob Linsdsted – Truth in Bible Prophecy
              </li>
              <li className="bold">Thomas Ice - Books debates videos</li>
              
              
              
              
              
            </ul>
          </Item>
        </Container>
      </Section>
    </Wrapper>
  )
}
