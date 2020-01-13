import React from 'react'
import { Box } from '@theme-ui/components'
import ContactBanner from './ContactBanner'
import Nav from './Nav'
import Hero from './Hero'

const Header: React.FC = () => (
  <Box as="header">
    <ContactBanner />
    <Hero />
    <Box mx="auto" sx={{ maxWidth: 940 }}>
      <Nav />
    </Box>
  </Box>
)

export default Header
