import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Box, Button, Grid, Link, Text } from '@theme-ui/components'
import { Link as RouterLink } from 'gatsby'
import { APP_MAX_WIDTH } from '../config'
import YouTube from 'react-youtube-embed'
import Videos from '../components/Videos'

const Home = () => (
  <Layout>
    <SEO title="Home" />

    <Box
      mx="auto"
      py={4}
      px={3}
      sx={{
        width: '100%',
        maxWidth: APP_MAX_WIDTH,
        fontFamily: 'Caviar Dreams',
        fontSize: 3,
        fontWeight: 'bold',
      }}
    >
      <Videos withColumns={true} />

      <Grid mt={4} columns={[1, 2]} gap={4}>
        <Box>
          {/* TODO: Provide links to these claims */}
          <Text as="p">
            Voted{' '}
            <Link href="https://google.com">
              &ldquo;Best Live Band in Tennessee&rdquo;
            </Link>{' '}
            &{' '}
            <Link href="https://google.com">
              &ldquo;Top 10 Best Live Band in United States&rdquo;
            </Link>{' '}
            3 years in a row by The Industry Expert Awards!
          </Text>

          <Text as="p" mt={4}>
            The Downtown Band is a high-energy, dance-driven cover band that
            delivers top quality live entertainment. This 5 to 10-piece group
            can play everything from your full blown after party to an elegant
            cocktail hour.
          </Text>
        </Box>

        <Box>
          <Box as="p">
            DTB has performed with a star-studded roster of clients, including:
          </Box>

          <Box as="p" mt={4}>
            Elton John, Sting, David Letterman, Seal, Jimmy Fallon, Robin
            Thicke, Lana Del Rey, Enrique Iglesias, Tim McGraw, Rascal Flatts,
            Southwest Airlines, Frito Lay, Coca Cola, NBC, Microsoft, Ford, The
            Ritz-Carlton
          </Box>
        </Box>
      </Grid>

      <Box as="p" mt={5} sx={{ maxWidth: 580 }}>
        To get your own party started, start by clicking this shiny button!
      </Box>

      <RouterLink to="/contact">
        <Button mt={4} sx={{ height: 80, width: 240 }}>
          Contact us!
        </Button>
      </RouterLink>
    </Box>
  </Layout>
)

export default Home
