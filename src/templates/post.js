import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { combineFields } from "../utils/combine-fields"
import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
import styled from "styled-components"
import {
  ButtonPrimary,
  AnchorInline,
  ButtonInline,
} from "../components/buttons"
import ServiceForm from "../components/forms/serviceForm"
import { StaticImage } from "gatsby-plugin-image"
import commentBox from "commentbox.io"

const BlogArticle = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--clr-accent);
  }
`

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const BannerWrapper = styled.div`
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

  min-height: 80vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

// Layout
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;
  text-align: center;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

const NewsTemplate = pageProps => {
  const data = combineFields(pageProps.data.wpPost, "post")
  useEffect(() => {
    commentBox("5734406165626880-proj")
  }, [])

  return (
    <Layout>
      {/* <Banner {...data} /> */}
      {data.title && data.excerpt ? (
        <SEO title={data.title} description={data.excerpt} />
      ) : null}

      {data.title ? (
        <BannerGrid>
          <BannerWrapper
            img={data.bannerImage.localFile.childImageSharp.fluid.src}
          >
            <Container className="spacing">
              <BannerText className="spacing">
                <div className="">
                  <h1 className="title">{data.title}</h1>
                </div>
                <ButtonPrimary to="/contact">become a christian</ButtonPrimary>
              </BannerText>
            </Container>
          </BannerWrapper>
          <BannerBottomText>
            <Container>
              <p>{data.excerpt}</p>
            </Container>
          </BannerBottomText>
        </BannerGrid>
      ) : null}

      <Section>
        <Container className="spacing">
          <Wrapper>
            <Aside className="spacing">
              {/* <Navigation className="spacing">
                <h3 className="caps accent title bold">
                  The <br /> Author
                </h3>
                <StaticImage
                  src="../images/brian-pickup.jpg"
                  alt="brian pickup"
                />
                <p className="subheader">Brian Pickup</p>
                <p>
                  Christendom has been under attack since its inception.
                  Gnosticism was already shifting the pillars of the gospel even
                  before the apostles had died. Throughout its history, many
                  groups, especially the Catholic Church and “Christian” mystics
                  have attempted to steer honest seekers and believers away from
                  the Truth with pagan beliefs and rituals. But now there is a
                  turning away from God that is unprecedented. There has always
                  been a drought of knowledge of the Holy Word. This, coupled
                  modern society who has largely allowed themselves to be
                  pacified by the lying devil-inspired mainstream media and five
                  minute video clips on U-tube, Twitter etc. to learn about the
                  world in which we live. Many people have been blinded this
                  phenomenon until they no longer have the patience or the
                  attention span to read the printed word let alone read a book
                  of any kind.
                </p>
              </Navigation> */}
              <div className="service-form">
                <ServiceForm />
              </div>
            </Aside>
            <Content className="spacing">
              <div>
                <h1 className="title accent bold italics">{data.title}</h1>
              </div>
              <div>
                <BlogArticle
                  className="blog-post"
                  itemScope
                  itemType="http://schema.org/Article"
                  dangerouslySetInnerHTML={{
                    __html: `${data.content}`,
                  }}
                />
              </div>
              {/* <ServiceAreas>
                <p className="center bold">
                  <ButtonInline to=""></ButtonInline>
                  We provide
                  <ButtonInline to="/services/home-window-repair-calgary">
                    residential glass installation & repair
                  </ButtonInline>
                  ,
                  <ButtonInline to="/services/commercial-window-repair-calgary">
                    commercial window repair
                  </ButtonInline>
                  ,
                  <ButtonInline to="/services/storm-doors-calgary">
                    new storm door installations
                  </ButtonInline>
                  , and more to Calgary, Airdrie, Okotoks, Cochrane,
                  Chestermere, Foothills, Strathmore, and more surrounding areas
                  and throughout Alberta! Call
                  <AnchorInline href="tel: 403-272-8932">
                    403-272-8932
                  </AnchorInline>
                  to book a service, or use our
                  <ButtonInline to="/contact">
                    online contact form.
                  </ButtonInline>
                </p>
              </ServiceAreas> */}
            </Content>
          </Wrapper>
          <div className="commentbox" />
        </Container>
      </Section>
    </Layout>
  )
}

export default NewsTemplate

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      date
      post {
        bannerImage {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        title
        excerpt
        content
      }
    }
  }
`
