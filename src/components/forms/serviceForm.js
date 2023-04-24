import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"

const Wrapper = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
`

export default function ServiceForm() {
  return (
    <Wrapper>
      <h3 className="caps title accent bold">
        contact <br /> us
      </h3>
      <div>
        <form
          name="contact"
          className="spacing"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="spacing-sm">
            <Label htmlFor="email">* Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="spacing-sm">
            <Label htmlFor="phone">* Phone:</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="spacing-sm">
            <Label htmlFor="msg">* Message:</Label>
            <TextArea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="How can we help you?"
              required
            />
          </div>
          <Submit type="submit" id="submit" value="send" />
        </form>
      </div>
    </Wrapper>
  )
}
