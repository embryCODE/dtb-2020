import React from 'react'
import { Box, BoxProps, Button, Flex, Heading } from '@theme-ui/components'
import { Link } from 'gatsby'

interface ImageWithOverlayProps extends BoxProps {
  title: string
  linkTo: string
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  title,
  linkTo,
  children,
  ...otherProps
}) => {
  return (
    <Box {...otherProps} sx={{ position: 'relative' }}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Heading sx={{ fontSize: [5, 4, 5], textTransform: 'uppercase' }}>
          {title}
        </Heading>
        <Link to={linkTo} style={{ pointerEvents: 'all', cursor: 'default' }}>
          <Button mt={3} variant="tertiary">
            Click Here
          </Button>
        </Link>
      </Flex>

      <Box
        sx={{
          opacity: 0.6,
          '&:hover': { opacity: 1 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ImageWithOverlay
