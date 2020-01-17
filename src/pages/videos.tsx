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
      px={-3}
      sx={{
        maxWidth: APP_MAX_WIDTH,
        flexWrap: ['wrap', 'nowrap'],
      }}
    >
      <Box px={3} sx={{ width: ['100%', '66%'] }}>
        <Heading as="h1" sx={{ fontSize: 5 }}>
          Videos
        </Heading>

        <Videos
          mt={4}
          links={[
            'https://www.youtube.com/embed/I6hmxc4fGXk',
            'https://www.youtube.com/embed/0WzacLIkK2c',
            'https://youtu.be/l_RRHV0CbE8',
            'https://youtu.be/WPqXmQI0Flg',
          ]}
        />
      </Box>

      <Box mt={[4, 0]} px={3} sx={{ width: ['100%', '33%'], minWidth: 300 }}>
        <Testimonials />
      </Box>
    </Flex>
  </Layout>
)

export default VideosPage
