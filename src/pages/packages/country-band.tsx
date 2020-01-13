import React from 'react'
import SEO from '../../components/Seo'
import { Box, Flex, Heading, Link } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import Layout from '../../components/Layout'
import { Link as GatsbyLink } from 'gatsby'
import Videos from '../../components/Videos'
import Testimonials from '../../components/Testimonials'

const CountryBand: React.FC = () => {
  return (
    <Layout>
      <SEO title="Country Band" />

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
          <Heading as="h1" sx={{ fontSize: 5 }}>
            Country Band
          </Heading>

          <Box mt={4} color="primary" sx={{ fontStyle: 'italic' }}>
            The Downtown Band has packages to fit your needs. Call or write to
            talk about custom options for your corporate event, private party,
            or wedding. Common packages include:
          </Box>

          <Heading mt={5}>THE DOWNTOWN BAND – COUNTRY</Heading>

          <Box as="p" mt={3}>
            We bring the Honky Tonks straight to your event! Featuring
            Nashville’s best country music talent, world-class singers, fiddle &
            steel guitar soloists, interactive line-dancing instruction, along
            with a genuine live country band. The show’s repertoire spans
            classic hits by Patsy Cline, Garth Brooks, Johnny Cash – through
            chart-topping hits by today’s hottest country artists!
          </Box>

          <Box as="ul" my={3}>
            <li>
              3 to 10-piece genuine country band (1-3 singers, drums, bass,
              keys, guitar, steel guitar, fiddle, banjo)
            </li>
            <li>Full-size state-of-the-art PA sound system</li>
            <li>Full-time Professional Sound Engineer</li>
            <li>Standard lighting package</li>
          </Box>

          <GatsbyLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link as="span">Call or email for pricing</Link>
          </GatsbyLink>

          <Heading mt={4}>
            THE DOWNTOWN BAND – &ldquo;TASTE OF NASHVILLE&rdquo;
          </Heading>

          <Box as="p" mt={3}>
            This 5-7-minute show is your personal taste of Music City’s
            unbelievable sound & energy! Designed specifically to get conference
            attendees on their feet, it features (up to) an incredible 16-piece
            band, including Nashville’s best vocalists/dancers, a Marching Drum
            Line, Horn Section and an authentic country Band straight from the
            honky tonks downtown! With costuming, choreography, audience
            interaction, huge sound and lights…and did we mention a Marching
            Drum Line…this is Nashville’s #1 Opening Sessions entertainment, and
            one your attendees will be talking about all conference!
          </Box>

          <Box as="ul" my={3}>
            <li>
              5 to 10-piece genuine country band (1-3 singers, drums, bass,
              keys, guitar, steel guitar, fiddle, banjo)
            </li>
            <li>5-piece marching drum line</li>
            <li>3-piece horn section</li>
            <li>Full-size state-of-the-art PA sound system</li>
            <li>Full-time Professional Sound Engineer</li>
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
          <Videos
            showHeading={true}
            links={[
              'https://youtu.be/l_RRHV0CbE8',
              'https://youtu.be/WPqXmQI0Flg',
            ]}
          />
          <Testimonials mt={4} />
        </Box>
      </Flex>
    </Layout>
  )
}

export default CountryBand
