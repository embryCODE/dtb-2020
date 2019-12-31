import React from 'react'
import { Box, Link } from '@theme-ui/components'

const Footer: React.FC = () => {
  return (
    <Box as="footer">
      © {new Date().getFullYear()} The Downtown Band |{' '}
      <Link href="http://embrycode.com">embrycode</Link>
    </Box>
  )
}

export default Footer
