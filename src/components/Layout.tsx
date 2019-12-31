import React from 'react'
import { Styled } from 'theme-ui'

import Header from './Header'
import { Box, Flex } from '@theme-ui/components'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.root>
      <Flex
        sx={{
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'stretch',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <Box sx={{ flex: '0 0 auto' }}>
          <Header />
        </Box>

        <Box as="main" sx={{ flex: '1 1 auto' }}>
          {children}
        </Box>

        <Box sx={{ flex: '0 0 auto' }}>
          <Footer />
        </Box>
      </Flex>
    </Styled.root>
  )
}

export default Layout
