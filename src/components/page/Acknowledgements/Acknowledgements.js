import React from "react"
import { Container, Section } from "../../layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: url("../../images/hero-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`

const Item = styled.div`
  padding: 4em;
  background: rgba(255, 255, 255, 0.8);

  ul {
    list-style-type: none;
    text-align: center;
    li {
      font-style: bold;
    }
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
              <li>John Macarthur - Books and Grace to you Ministry</li>
              <li>Thomas Ice - Books debates videos</li>
              <li>John Valvoord - Pre-trib Books</li>
              <li>J Vernon McGee - Books, Thru the Bible Ministry</li>
              <li>David Jeremiah - Turning Point Ministry</li>
              <li>Henry Morris - Books (Creation)</li>
              <li>Brandon Holthaus - Rock Harbor Church</li>
            </ul>
          </Item>
        </Container>
      </Section>
    </Wrapper>
  )
}
