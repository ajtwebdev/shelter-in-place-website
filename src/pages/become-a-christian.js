import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import ImageRight from "../components/sections/imageRight"
import SEO from "../components/seo"

import BannerImg from "../images/christian-banner.jpg"
import ImgRight from "../images/squirrel.jpg"

export default function BecomeChristian() {
  return (
    <Layout>
      <SEO
        title="Become a Christian - Shelter in Place"
        description="You can contact us on this page using the form if you are interested in become a Christian."
      />
      <Banner
        img={BannerImg}
        title="interested in becoming a christian?"
        subheader="shelter in place"
        description="Let us help you become the person you want to be."
      />
      <ImageRight
        subheader="ask us how"
        title="become a christian"
        body="For indeed the gospel was preached to us as well as to them; but the word which they heard did not profit them, not being mixed with faith in those who heard it. Hebrews 4:2"
        img={ImgRight}
        alt="become a christian"
        to="/contact"
        button="talk to us"
      />
      <FormContact title="Contact" />
    </Layout>
  )
}
