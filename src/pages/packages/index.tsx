import React from 'react'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'
import { Box, Grid, Image } from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../../config'
import country from '../../assets/images/country1.jpg'
import dance from '../../assets/images/danceBand2.jpg'
import dj from '../../assets/images/dj1.jpg'
import ImageWithOverlay from '../../components/ImageWithOverlay'

const Index: React.FC = () => (
  <Layout>
    <SEO title="Packages" />

    <Box
      mt={4}
      mx="auto"
      py={4}
      px={3}
      sx={{
        maxWidth: APP_MAX_WIDTH,
      }}
    >
      <Box
        color="primary"
        mx="auto"
        sx={{ fontSize: 1, fontStyle: 'italic', maxWidth: 700 }}
      >
        The Downtown Band has packages to fit your needs. Call or write to talk
        about custom options for your corporate event, private party, or
        wedding. Common packages include:
      </Box>

      <ImageWithOverlay mt={5} title="dance band" linkTo="/packages/dance-band">
        <Image alt="An image of a dance band on stage" src={dance} />
      </ImageWithOverlay>

      <Grid mt={3} columns={[1, 2]}>
        <ImageWithOverlay title="country band" linkTo="/packages/country-band">
          <Image alt="An image of a country band on stage" src={country} />
        </ImageWithOverlay>
        <ImageWithOverlay title="djs" linkTo="/packages/djs">
          <Image alt="An image of a dj on stage" src={dj} />
        </ImageWithOverlay>
      </Grid>
    </Box>
  </Layout>
)

export default Index
