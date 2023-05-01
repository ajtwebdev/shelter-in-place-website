import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"
import Map from "./map"
import FaqFeatured from "./faq/faqFeatured"
import Ebook from "./ebook"

import EbookImg from "../images/ph.jpg"
import CtaMain from "./cta/ctaMain"
import Proverb from "./proverb"
import RecentPostsSigns from "./recentPostsSigns"
import RecentPostsWord from "./recentPostsWord"

export default function Layout({ children }) {
  return (
    <>
      <SEO title="Shelter in Place" />
      <HeaderBasic />
      <main>{children}</main>
      <RecentPostsSigns />
      <RecentPostsWord />
      <Proverb />
      <Footer />
    </>
  )
}
