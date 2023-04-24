import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

import BannerImg from "../images/contact-banner.jpg"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us - Shelter in Place"
        description="You can contact us on this page using the form."
      />
      <Banner
        img={BannerImg}
        title="contact us here"
        subheader="shelter in place"
        description="Have questions about becoming a Christian? Feel free to use the contact form below."
      />
      <FormContact title="Contact" />
    </Layout>
  )
}
