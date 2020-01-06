import React from 'react'
import { Box } from '@theme-ui/components'
import heroBg from '../assets/images/hero-bg.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { APP_MAX_WIDTH } from '../config'

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bandShot: file(relativePath: { eq: "images/band-shot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box
      sx={{
        background: `url(${heroBg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          maxWidth: APP_MAX_WIDTH,
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <Image
          fluid={data.logo.childImageSharp.fluid}
          alt="The Downtown Band logo"
          style={{
            width: '100%',
            margin: '0 auto',
            position: 'absolute',
          }}
        />
      </Box>
      <Image
        fluid={data.bandShot.childImageSharp.fluid}
        alt="A photo of The Downtown Band"
        style={{ width: '100%', maxWidth: APP_MAX_WIDTH, margin: '0 auto' }}
      />
    </Box>
  )
}

export default Hero
