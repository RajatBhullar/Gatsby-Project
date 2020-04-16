import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroSection from '../components/reusable/HeroSection'
import SEO from "../components/seo"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"
import Coursecart from "../components/cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    // img={data.image}
    title='Shoping Hustle' 
    subtitle='Shop whatever you want...' 
    heroclass='hero-background' />
    <Infoblock heading='About Us' />
    <Coursecart mycourses={data.mycourses}/>
    <DualInfoBlock heading='Our Team' />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mycourses :allContentfulCourses {
        edges {
          node {
            id
            title
            price
            category
            description {
              id
              description
            }
            images {
              id
              fixed(width:200,height:120) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      } 
  }
`
export default IndexPage
