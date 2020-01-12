import React from 'react'
import SEO from '../../components/Seo'
import { Box } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import Layout from '../../components/Layout'

const DanceBand: React.FC = props => {
  return (
    <Layout>
      <SEO title="Dance Band" />

      <Box
        mt={4}
        mx="auto"
        py={4}
        px={3}
        sx={{
          maxWidth: APP_MAX_WIDTH,
        }}
      >
        Dance Band
      </Box>
    </Layout>
  )
}

export default DanceBand
