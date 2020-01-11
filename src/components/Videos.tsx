import React from 'react'
import YouTube from 'react-youtube-embed'
import { Box, BoxProps, Grid, Heading } from '@theme-ui/components'

interface VideosProps extends BoxProps {
  showHeading?: boolean
}
const Videos: React.FC<VideosProps> = ({ showHeading, ...otherProps }) => {
  return (
    <Box {...otherProps}>
      {showHeading && <Heading mb={3}>Videos</Heading>}

      <Grid width={300}>
        <YouTube id="https://www.youtube.com/embed/I6hmxc4fGXk" />
        <YouTube id="https://www.youtube.com/embed/0WzacLIkK2c" />
      </Grid>
    </Box>
  )
}

export default Videos
