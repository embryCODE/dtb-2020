import React from 'react'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import { APP_MAX_WIDTH } from '../config'
import { Box, Flex, Heading, Link } from '@theme-ui/components'
import Videos from '../components/Videos'
import Testimonials from '../components/Testimonials'
import { Link as GatsbyLink } from 'gatsby'
import FAQ from '../components/FAQ'

const About: React.FC = () => (
  <Layout>
    <SEO title="About" />

    <Flex
      mt={4}
      mx="auto"
      py={4}
      px={-3}
      sx={{
        maxWidth: APP_MAX_WIDTH,
        flexWrap: ['wrap', 'nowrap'],
      }}
    >
      <Box px={3} sx={{ width: ['100%', 'auto'] }}>
        <Heading as="h1" sx={{ fontSize: 5 }}>
          About
        </Heading>

        <Heading mt={4}>
          Available for corporate events, private parties, & weddings.
        </Heading>

        <Box as="p" mt={4}>
          Voted “TOP 10 BEST PARTY BAND in UNITED STATES” and “BEST LIVE BAND in
          TENNESSEE” by the Industry Expert Awards
        </Box>
        <Box as="p" mt={3}>
          Constantly living up to its reputation as one of the best live bands
          in the country, this award-winning 10-piece party band performs for
          corporate events, weddings, and private parties all over the world.
          The Downtown Band has performed for the Prince and Princess of Monaco,
          celebrities such as Kevin Costner, Bono and Nicole Kidman, and opened
          for Elton John, Sting, Enrique Iglesias, Seal, Robin Thicke, Tim
          McGraw, Tom Jones, and the list goes on…
        </Box>
        <Box as="p" mt={3}>
          With repertoire from all the classic genres (Today’s Pop Hits, Motown,
          Disco, Country, Jazz, Big Hair 80’s), a dynamic catalog of songs and
          styles, and their show stopping energy, The Downtown Band fills dance
          floors every time they step on stage. From an elegant cocktail hour to
          full blown after-party, no matter what your event The Downtown Band is
          dedicated to creating an experience you and your guests will never
          forget!
        </Box>
        <Box as="p" mt={3}>
          <GatsbyLink to="/packages" style={{ textDecoration: 'none' }}>
            <Link as="span">Click HERE</Link>
          </GatsbyLink>{' '}
          for The Downtown Band’s Entertainment Options
        </Box>

        <Heading mt={4}>Corporate events</Heading>

        <Box mt={3} as="p">
          Corporations from Nashville and all over the world who book only the
          best live bands rely on The Downtown Band to entertain their guests
          with a night of music, lights, dancing and non-stop fun.
        </Box>
        <Box mt={3} as="p">
          Corporations from Nashville and all over the world who book only the
          best live bands rely on The Downtown Band to entertain their guests
          with a night of music, lights, dancing and non-stop fun.
        </Box>

        <Heading mt={4}>Weddings</Heading>

        <Box mt={3} as="p">
          From Grand Entrance to first dance to your unique sendoff, The
          Downtown Band knows how to celebrate the most important day of your
          life!
        </Box>
        <Box mt={3} mb={4} as="p">
          The Downtown Band interacts with the wedding party like no other band
          in the country. With high-energy, always-current song selection, they
          take each wedding to the next level of entertainment with incredible
          lights, sound and dancing all night long. Let us help take the stress
          off of your special day and help you throw the party of a lifetime.
        </Box>

        <hr />

        <FAQ mt={4} />
      </Box>

      <Box mt={[4, 0]} px={3} sx={{ width: ['100%', '33%'], minWidth: 300 }}>
        <Videos showHeading={true} />
        <Testimonials mt={4} />
      </Box>
    </Flex>
  </Layout>
)

export default About
