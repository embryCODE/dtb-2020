import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Box, Flex, Heading } from '@theme-ui/components'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <Flex
      sx={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Heading>NOT FOUND</Heading>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </Box>
    </Flex>
  </Layout>
)

export default NotFoundPage
