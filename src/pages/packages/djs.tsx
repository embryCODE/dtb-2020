import React from 'react'
import SEO from '../../components/Seo'
import { Box } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import Layout from '../../components/Layout'

const DJs: React.FC = props => {
  return (
    <Layout>
      <SEO title="DJs" />

      <Box
        mt={4}
        mx="auto"
        py={4}
        px={3}
        sx={{
          maxWidth: APP_MAX_WIDTH,
        }}
      >
        DJs
      </Box>
    </Layout>
  )
}

export default DJs
