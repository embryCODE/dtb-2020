import React, { ReactNode, useState } from 'react'
import { Box, BoxProps, Flex, Heading } from '@theme-ui/components'
import AnimateHeight from 'react-animate-height'

interface QuestionAndAnswer {
  question: string
  answer: ReactNode
}
const faqs: QuestionAndAnswer[] = [
  {
    question: 'Can the band make sure to NEVER play the Macarena?',
    answer: 'Yes and yes.',
  },
  {
    question: 'INSURANCE. Does the band have liability insurance?',
    answer:
      'Usually, the event venue will provide liability insurance above and beyond all event needs.  If not, The Downtown Band can arrange for liability insurance for any venue.',
  },
  {
    question: 'WEDDINGS. What can we do for you?',
    answer: (
      <>
        <Box as="p">
          All musical aspects of weddings can be covered, from traditional
          ceremony music (including string quartet, organists, solo piano, etc),
          to cocktail/lounge music, and reception dance music.
        </Box>
        <Box mt={3} as="p">
          The Downtown Band is also happy to learn any first dance and/or father
          daughter song at your request for your wedding reception (we just ask
          for 4 weeks notice to prepare your request).
        </Box>
      </>
    ),
  },
  {
    question: 'TRAVEL. How far will the band travel? Internationally?',
    answer: (
      <Box as="p">
        The group is based out of Nashville, TN and we are available to travel
        any distance. We can also handle all travel arrangements for shows that
        require lodging, airfare, and sound/lighting equipment rental throughout
        the U.S. and internationally.
      </Box>
    ),
  },
  {
    question: 'LIGHTING. Does the band provide lighting?',
    answer: (
      <>
        <Box as="p">
          Lighting options are available upon request. From traditional stage
          lighting…to transforming your event into an amazing visual
          experience…we have just the thing to take your event to the next
          level!
        </Box>
        <Box mt={3} as="p">
          We have designers who will work with you to put together the perfect
          package for your event that will enhance the mood you want to create.
          We can even put your name in lights, projecting your name, logo, or
          monogram that we create from your custom artwork! We have lighting
          solutions to fit any budget.
        </Box>
      </>
    ),
  },
  {
    question:
      "POWER REQUIREMENTS. How much power does the band's setup require?",
    answer: (
      <Box as="p">
        Two Standard 20AMP Circuits (120 VOLTS, 20AMP – 15 AMP minimum) within
        25 feet of the band area. Please make sure the band has their own
        dedicated circuit. If the circuit is shared with other electronic
        equipment, the amount of power the band’s equipment requires might cause
        a shortage.
      </Box>
    ),
  },
  {
    question: 'STAGE/SPACE REQUIREMENTS. How big of a stage do you need?',
    answer: (
      <>
        <Box as="ul">
          <li>5-6 piece band stage size at least: 16′ width x 12′ depth</li>
          <li>7-8 piece band stage size at least: 24′ width x 16′ depth</li>
          <li>9-10 piece band stage size at least 24′ width x 20′ depth</li>
        </Box>
        <Box mt={3} as="p">
          While not mandatory, a stage will enhance your guest’s enjoyment of
          the band, as the band being clearly seen creates a more interactive
          band/guest experience. Most hotels and many country clubs have staging
          available. If not, staging can almost always be rented in your town or
          by the venue. If there is no stage, please make sure the band has a
          flat area with the above dimensions to setup.
        </Box>
        <Box mt={3} as="p">
          While not mandatory, a stage will enhance your guest’s enjoyment of
          the band, as the band being clearly seen creates a more interactive
          band/guest experience. Most hotels and many country clubs have staging
          available. If not, staging can almost always be rented in your town or
          by the venue. If there is no stage, please make sure the band has a
          flat area with the above dimensions to setup.
        </Box>
      </>
    ),
  },
  {
    question: 'AUDIO NEEDS. Do you take care of the audio/PA when you play?',
    answer: (
      <>
        <Box as="p">
          Yes. No matter how small or large, The DTB can provide all the sound
          equipment needed for your event.
        </Box>
        <Box mt={3} as="p">
          In addition to powering the band, our PA system can be used for
          announcements, introductions, toasts, and recorded music on breaks.
        </Box>
      </>
    ),
  },
  {
    question: 'EMCEE. Can the band emcee the event?',
    answer: (
      <Box as="p">
        Absolutely. The DTB can introduce special people throughout your event,
        or even take on the role of Master of Ceremony if needed to ensure
        smooth transitions throughout the evening.
      </Box>
    ),
  },
  {
    question: 'CUSTOMIZING MY EVENT. How do you customize events?',
    answer: (
      <Box as="ul">
        <li>
          SPECIAL SONGS. If we don’t know a song you want, we’re happy to learn
          special requests customized for your event (examples include:
          Bride/Groom first dance, school fight song, funny song to embarrass
          your boss). Just ask and we’ll deliver!
        </li>
        <li>
          As large or small of a band as your event needs. From our rocking and
          budget friendly 5-piece band, to our unbelievable 10+ piece ensemble
          when you want to take your event to the top! Other options include,
          but are not limited to: strings, woodwinds, auxiliary percussion, and
          just about anything else. If you can dream it, we can probably do it.
          Just ask!
        </li>
        <li>
          Create and operate customized DJ music so the music never stops!
        </li>
      </Box>
    ),
  },
]

const SingleFAQ: React.FC<QuestionAndAnswer> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box mt={4}>
      <Flex
        sx={{ alignItems: 'center', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Flex
          as="span"
          color="black"
          bg="primary"
          sx={{
            borderRadius: '100%',
            width: 18,
            height: 18,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            position: 'relative',
          }}
        >
          {isOpen ? '-' : '+'}
        </Flex>
        <Box
          ml={2}
          color="primary"
          sx={{ fontStyle: 'italic', fontSize: 18, display: 'inline-block' }}
        >
          {question}
        </Box>
      </Flex>
      <Box mt={3}>
        <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
          {answer}
        </AnimateHeight>
      </Box>
    </Box>
  )
}

const FAQ: React.FC<BoxProps> = props => {
  return (
    <Box {...props}>
      <Heading pb={4}>Frequently asked questions</Heading>

      {faqs.map((qa, i) => (
        <SingleFAQ key={i} {...qa} />
      ))}
    </Box>
  )
}

export default FAQ
