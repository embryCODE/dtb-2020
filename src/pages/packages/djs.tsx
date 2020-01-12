import React from 'react'
import SEO from '../../components/Seo'
import { Box, Flex, Grid, Heading, Link, Image } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import Layout from '../../components/Layout'
import { Link as GatsbyLink } from 'gatsby'
import Testimonials from '../../components/Testimonials'
import dj1 from '../../assets/images/dj1.jpg'
import dj2 from '../../assets/images/dj2.jpg'

const DJs: React.FC = () => {
  return (
    <Layout>
      <SEO title="DJs" />

      <Flex
        mt={4}
        mx="auto"
        py={4}
        px={3}
        sx={{
          maxWidth: APP_MAX_WIDTH,
        }}
      >
        <Box mr={3} sx={{ flex: '1 1 auto' }}>
          <Heading sx={{ fontSize: 5 }}>DJs</Heading>

          <Box mt={4} color="primary" sx={{ fontSize: 1, fontStyle: 'italic' }}>
            The Downtown Band has packages to fit your needs. Call or write to
            talk about custom options for your corporate event, private party,
            or wedding. Common packages include:
          </Box>

          <Heading mt={5} sx={{ fontSize: 3 }}>
            THE DOWNTOWN BAND – DJs
          </Heading>

          <Box as="p" mt={3}>
            Not ready for the night to end?! Keep it rocking with The Downtown
            Band’s award-winning featured DJs. Our DJs spin only the hottest
            tracks of the 80s, 90s, and today as well as all the standard party
            tunes, complete with amazing light shows! We’ll keep the party
            rocking all night!
          </Box>

          <Box as="ul" my={3}>
            <li>Custom song requests</li>
            <li>Emcee throughout the event (if needed)</li>
            <li>Full-size state-of-the-art PA sound system</li>
            <li>Standard lighting package</li>
          </Box>

          <GatsbyLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link as="span">Call or email for pricing</Link>
          </GatsbyLink>
        </Box>

        <Box
          ml={3}
          sx={{ flex: '0 0 30%', display: ['none', 'block'], minWidth: 250 }}
        >
          <Grid gap={5}>
            <Image alt="An image of a dj" src={dj2} />
            <Image alt="An image of a dj" src={dj1} />
          </Grid>
          <Testimonials mt={4} />
        </Box>
      </Flex>
    </Layout>
  )
}

export default DJs
