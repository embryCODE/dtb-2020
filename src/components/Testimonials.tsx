import React from 'react'
import { Box, BoxProps, Heading } from '@theme-ui/components'
import Testimonial from './Testimonial'

const Testimonials: React.FC<BoxProps> = props => {
  return (
    <Box {...props}>
      <Heading mb={3}>Testimonials</Heading>
      <Testimonial
        name="Elizabeth L."
        location="New York, NY"
        quote="They were so nice to work with, traveled 2,000 miles and MADE the night one to remember..."
      />
      <Testimonial
        mt={3}
        name="Karen G."
        location="Orlando, FL"
        quote="'ONE_MORE_SONG! ONE_MORE_SONG!' This was the last moment of our party as all the guests were jam-packed on the dance floor. Amazing!"
      />
      <Testimonial
        mt={3}
        name="Rosie L."
        location="Las Vegas, NV"
        quote="Thank you so much for making the party so fun with your music! All the songs were great and we were so happy that everyone stayed out on the dance floor all night."
      />
    </Box>
  )
}

export default Testimonials
