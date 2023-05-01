import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

import BannerImg from "../images/contact-banner.jpg"
import RecentPostsSigns from "../components/recentPostsSigns"
import HeaderBasic from "../components/headers/headerBasic"
import Proverb from "../components/proverb"
import Footer from "../components/footers/footer"

export default function SignsPage() {
  return (
    <>
      <SEO
        title="Signs of The Times - Shelter in Place Blog"
        description=""
      />
      <HeaderBasic />
      <Banner
        img={BannerImg}
        title="Signs of the times"
        subheader="shelter in place"
        description="This website is created for the glory of God, to promote an appetite to read the Word, to encourage Brothers and Sisters in the word, and to create a desire in non-Christians to explore the Truth in Jesus Christ."
      />
      <RecentPostsSigns />
      <Proverb />
      <Footer />
    </>
  )
}