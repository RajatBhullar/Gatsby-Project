import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroSection from '../components/reusable/HeroSection'
import SEO from "../components/seo"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"
import Teamphoto from "../components/about/Teamphoto"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title='About Shoping Hustle' 
    subtitle='' 
    heroclass='about-background' />
    <DualInfoBlock heading='A message from CEO' />
    <Infoblock heading='Our Vision' />
    <Teamphoto/>
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`
export default AboutPage
