import React from 'react'
import YouTube from 'react-youtube-embed'
import { Box, BoxProps, Grid, Heading } from '@theme-ui/components'

const defaultLinks = [
  'https://www.youtube.com/embed/I6hmxc4fGXk',
  'https://www.youtube.com/embed/0WzacLIkK2c',
]

interface VideosProps extends BoxProps {
  withColumns?: boolean
  showHeading?: boolean
  links?: string[]
}
const Videos: React.FC<VideosProps> = ({
  withColumns,
  showHeading,
  links = defaultLinks,
  ...otherProps
}) => {
  return (
    <Box {...otherProps}>
      {showHeading && <Heading mb={3}>Videos</Heading>}

      <Grid columns={withColumns ? [1, 2] : undefined}>
        {links.map((l, i) => (
          <YouTube key={i} id={l} />
        ))}
      </Grid>
    </Box>
  )
}

export default Videos
