import React, { FormEvent } from 'react'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Label,
  Textarea,
} from '@theme-ui/components'
import { APP_MAX_WIDTH } from '../config'
import Testimonials from '../components/Testimonials'

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO
    console.log('Handle submit')
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <Flex
        mt={4}
        mx="auto"
        py={4}
        px={3}
        sx={{
          maxWidth: APP_MAX_WIDTH,
        }}
      >
        <Box mr={3} sx={{ flex: '1 1 auto' }}>
          <Heading mb={3}>Contact form</Heading>

          <Box as="p">
            With a single email, The Downtown Band can take care of all your
            live music entertainment needs.
          </Box>

          <Box as="form" mt={4} onSubmit={handleSubmit}>
            <Label htmlFor="name">Name*</Label>
            <Input name="name" mb={3} required={true} />

            <Label htmlFor="email">Email*</Label>
            <Input type="email" name="email" mb={3} required={true} />

            <Label htmlFor="phone">Phone</Label>
            <Input type="tel" name="phone" mb={3} />

            <Label htmlFor="date">Date of event</Label>
            <Input type="date" name="date" mb={3} />

            <Label htmlFor="location">
              Location of event (venue, city, state)
            </Label>
            <Input name="location" mb={3} />

            <Label htmlFor="type">Type of event</Label>
            <Input name="type" mb={3} />

            <Label htmlFor="referral">Where did you hear about us?</Label>
            <Input name="referral" mb={3} />

            <Label htmlFor="about">About your event</Label>
            <Textarea name="about" rows={6} mb={3} />
            <Button>Submit</Button>
          </Box>
        </Box>

        <Box
          ml={3}
          sx={{ flex: '0 0 30%', display: ['none', 'block'], minWidth: 250 }}
        >
          <Heading mb={3}>Testimonials</Heading>

          <Testimonials />
        </Box>
      </Flex>
    </Layout>
  )
}
export default Contact
