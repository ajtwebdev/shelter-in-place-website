import React from "react"
import { Section, Container, GridThree } from "./layoutComponents"
import styled from "styled-components"
import { useRecentPostsSigns } from "../hooks/useRecentPostsSigns"
import { GatsbyImage } from "gatsby-plugin-image"
import { ButtonInline } from "./buttons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Text = styled.div`
  text-align: center;
`

const Article = styled.div`
  div {
    padding: 2em;
  }
`

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 30px;
  }

  .slick-dots {
    li {
      height: 30px;
      width: 30px;
    }
  }
`

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

export default function RecentPostsSigns() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const data = useRecentPostsSigns()
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title">Recent Posts: Signs of the times</h2>
        </Text>
        <SliderWrapper>
          <Slider {...settings}>
            {data.wpCategory.posts.nodes.map(post => {
              return (
                <Article className="">
                  {post.post.bannerImage ? (
                    <StyledImg
                      image={
                        post.post.bannerImage.localFile.childImageSharp
                          .gatsbyImageData
                      }
                    />
                  ) : null}
                  <div>
                    <h3 className="subheader">{post.post.title}</h3>
                    <ButtonInline className="bold" to={post.uri}>
                      Read more &#8594;
                    </ButtonInline>
                  </div>
                </Article>
              )
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  )
}
