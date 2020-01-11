import React from 'react'
import YouTube from 'react-youtube-embed'
import { Box, BoxProps, Grid, Heading } from '@theme-ui/components'

interface VideosProps extends BoxProps {
  withColumns?: boolean
  showHeading?: boolean
}
const Videos: React.FC<VideosProps> = ({
  withColumns,
  showHeading,
  ...otherProps
}) => {
  return (
    <Box {...otherProps}>
      {showHeading && <Heading mb={3}>Videos</Heading>}

      <Grid columns={withColumns ? [1, 2] : undefined}>
        <YouTube id="https://www.youtube.com/embed/I6hmxc4fGXk" />
        <YouTube id="https://www.youtube.com/embed/0WzacLIkK2c" />
      </Grid>
    </Box>
  )
}

export default Videos
