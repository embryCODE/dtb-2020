import React from 'react'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import { APP_MAX_WIDTH } from '../config'
import { Box, Flex, Heading } from '@theme-ui/components'
import Testimonials from '../components/Testimonials'
import Videos from '../components/Videos'

const VideosPage: React.FC = () => (
  <Layout>
    <SEO title="Videos" />
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
          Videos
        </Heading>

        <Videos mt={4} />
      </Box>

      <Box
        ml={3}
        sx={{ flex: '0 0 30%', display: ['none', 'block'], minWidth: 250 }}
      >
        <Testimonials />
      </Box>
    </Flex>
  </Layout>
)

export default VideosPage
