import React from 'react'
import { Box, BoxProps, Image } from '@theme-ui/components'
import quoteIcon from '../assets/images/fill.png'
import quoteOpen from '../assets/images/quote-open.jpg'
import quoteClosed from '../assets/images/quote-closed.jpg'

interface TestimonialProps extends BoxProps {
  name: string
  location: string
  quote: string
}
const Testimonial: React.FC<TestimonialProps> = ({
  name,
  location,
  quote,
  ...otherProps
}) => {
  return (
    <Box px={4} py={3} bg="black" sx={{ textAlign: 'center' }} {...otherProps}>
      <Box sx={{ fontSize: 1, textTransform: 'uppercase' }}>{name}</Box>
      <Box color="primary" mt={1} sx={{ textTransform: 'uppercase' }}>
        {location}
      </Box>
      <Image mt={1} alt="Quote icon" src={quoteIcon} />
      <Box mt={-2} sx={{ fontSize: 1 }}>
        <Box
          as="span"
          sx={{
            background: `url(${quoteOpen}) no-repeat 0 0;`,
            paddingLeft: 10,
          }}
        >
          &nbsp;
        </Box>

        {quote}

        <Box
          as="span"
          sx={{
            background: `url(${quoteClosed}) no-repeat 0 0;`,
            paddingRight: 10,
          }}
        >
          &nbsp;
        </Box>
      </Box>
    </Box>
  )
}

export default Testimonial
