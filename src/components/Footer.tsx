import React from 'react'
import { Box } from '@theme-ui/components'

const Footer: React.FC = () => {
  return (
    <Box as="footer">
      © {new Date().getFullYear()} The Downtown Band |{' '}
      <a href="http://embrycode.com">embrycode</a>
    </Box>
  )
}

export default Footer
