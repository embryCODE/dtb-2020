import React from 'react'
import SEO from '../../components/Seo'
import { Box, Flex, Heading, Link } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import Layout from '../../components/Layout'
import Videos from '../../components/Videos'
import Testimonials from '../../components/Testimonials'
import { Link as GatsbyLink } from 'gatsby'

const DanceBand: React.FC = () => {
  return (
    <Layout>
      <SEO title="Dance Band" />

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
          <Heading sx={{ fontSize: 5 }}>Dance Band</Heading>

          <Box mt={4} color="primary" sx={{ fontSize: 1, fontStyle: 'italic' }}>
            The Downtown Band has packages to fit your needs. Call or write to
            talk about custom options for your corporate event, private party,
            or wedding. Common packages include:
          </Box>

          <Heading mt={5} sx={{ fontSize: 3 }}>
            THE DOWNTOWN BAND – GRANDE!!! (10-PIECE) *best deal*
          </Heading>

          <Box as="p" mt={3}>
            If you’re looking to take your event to the next level, take the
            already explosive core group…add the Downtown Band horn section and
            the powerhouse Uptown Girl singers. This is live music at its most
            exciting, and a night you & your guests will never forget!
          </Box>

          <Box as="ul" my={3}>
            <li>Award-winning 6-piece dance band</li>
            <li>
              Uptown Girl singer/dancers (high-energy female lead &amp;
              background vocals)
            </li>
            <li>Horn section (trumpet, trombone, saxophone)</li>
            <li>Full-size state-of-the-art PA sound system</li>
            <li>Full-time professional sound engineer</li>
            <li>Standard lighting package</li>
          </Box>

          <GatsbyLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link as="span">Call or email for pricing</Link>
          </GatsbyLink>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            THE DOWNTOWN BAND – CLASSIC (6-PIECE) *most popular*
          </Heading>

          <Box as="p" mt={3}>
            The classic DTB high-energy dance band specializing in hits from
            every generation. Perfect to fill the dance floor at corporate
            events, wedding receptions, or any other special event.
          </Box>

          <Box as="ul" my={3}>
            <li>Award-winning 6-piece dance band</li>
            <li>Emcee throughout the night (if needed)</li>
            <li>Full-size state-of-the-art PA sound system</li>
            <li>Full-time professional sound engineer</li>
            <li>Standard lighting package</li>
          </Box>

          <GatsbyLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link as="span">Call or email for pricing</Link>
          </GatsbyLink>

          <Box
            mt={5}
            color="primary"
            sx={{ fontSize: 1, fontStyle: 'italic', textAlign: 'center' }}
          >
            . . . . . . . . . . . . . . . . Additional Options . . . . . . . . .
            . . . . . . .
          </Box>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            WEDDING CEREMONY MUSIC
          </Heading>

          <Box as="p" mt={3}>
            String quartets, solo cello, harp, piano, singers, organist, brass,
            woodwinds…and anything else you can dream up, traditional or
            untraditional.
          </Box>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            JAZZ (4-7 PIECE ENSEMBLE)
          </Heading>

          <Box as="p" mt={3}>
            For cocktails or dinner, the group breaks down to 4 to 7-piece
            ensemble with optional singer, which plays a wide variety of
            contemporary, latin, big band and jazz standards. Add a muted
            trumpet or saxophone player to lend an element of sophistication to
            the group.
          </Box>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            COCKTAIL HOUR (PIANO/VOCAL)
          </Heading>

          <Box as="p" mt={3}>
            Pair a jazz pianist with the smooth as silk vocal stylings of Justin
            Caldwell to create a classy atmosphere to any event. Perfect for the
            arrival of guests, or even for an entire evening of music. This
            piano/vocal duo will perform standards from Frank Sinatra to Michael
            Buble to smooth renditions of current hit songs.
          </Box>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            ADD THE UPTOWN GIRL SINGER/DANCERS TO ANY PACKAGE
          </Heading>

          <Box as="p" mt={3}>
            High-energy female lead and background vocalists…adds a TON of
            energy.
          </Box>

          <Heading mt={4} sx={{ fontSize: 3 }}>
            ADD THE &ldquo;DTB HORN SECTION&rdquo; TO ANY PACKAGE
          </Heading>

          <Box as="p" my={3}>
            Trumpet, Trombone, Saxophone…takes the party to the next level!
          </Box>

          <GatsbyLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link as="span">Call or email for pricing</Link>
          </GatsbyLink>
        </Box>

        <Box
          ml={3}
          sx={{ flex: '0 0 30%', display: ['none', 'block'], minWidth: 250 }}
        >
          <Videos showHeading={true} />
          <Testimonials mt={4} />
        </Box>
      </Flex>
    </Layout>
  )
}

export default DanceBand
