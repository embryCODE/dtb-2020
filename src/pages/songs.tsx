import React from 'react'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import { APP_MAX_WIDTH } from '../config'
import { Box, Flex, Heading } from '@theme-ui/components'
import Videos from '../components/Videos'
import Testimonials from '../components/Testimonials'

const Songs: React.FC = () => (
  <Layout>
    <SEO title="Songs" />

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
        <Heading as="h1" sx={{ fontSize: 5 }}>
          Songs
        </Heading>

        <Heading mt={4}>
          We&apos;re adding the newest Top 40 hits all the time!
        </Heading>

        <Box mt={3} color="primary" sx={{ fontStyle: 'italic' }}>
          <sup>*</sup> Other styles available upon request: Country music, R&B,
          Latin, Jazz
        </Box>

        <Heading mt={4}>ARTISTS</Heading>

        <Box as="p" mt={3}>
          Justin Timberlake, Bruno Mars, Katy Perry, Michael Jackson, Frank
          Sinatra, Van Morisson, Lady Gaga, Prince, Stevie Wonder, Pitbull,
          Earth Wind and Fire, Coldplay, Elton John, Taylor Swift, John Mayer,
          Usher, Sia, Paul Simon, Queen, Beyonce, Jay-Z, Kayne West, Maroon 5,
          Robin Thicke, Outkast, The Beatles, Bon Jovi, Sting, Cee-Lo Green, Ray
          Lamontagne, The Black Eyed Peas, Bob Seger, Elvis, Lady Antebellum,
          Eric Clapton, Journey, AC/DC, The Police, James Taylor, James Brown,
          Rick Springfield, Patsy Cline, Foster the People, Garth Brooks, KC &
          the Sunshine Band, Buddy Holly, The Beatles, Jackson 5, U2, Lionel
          Richie, Marvin Gaye, Michael Buble, Rolling Stones, Temptations,
          Train, and a ton more artists!
        </Box>

        <Heading mt={4}>UP-TEMPO DANCE SONGS</Heading>

        <Box as="p" mt={3}>
          24k Magic (Bruno Mars)
          <br />
          Another One Bites the Dust (Queen)
          <br />
          As (Stevie Wonder)
          <br />
          Beautiful Day (U2)
          <br />
          Billy Jean (Michael Jackson)
          <br />
          Brown Eyed Girl (Van Morrison)
          <br />
          Build me up Buttercup (The Foundations)
          <br />
          Call Me Maybe (Carly Rae Jepsen)
          <br />
          Can’t Stop the Feeling (Justin Timberlake)
          <br />
          Carolina Girls (General Johnson &amp; the Chairmen of the Board)
          <br />
          Cheep Thrills (Sia)
          <br />
          Crazy in Love (Beyonce feat. Jay-Z)
          <br />
          Dancing in the Moonlight (King Harvest)
          <br />
          Desposito (Justin Bieber, Daddy Yankee, Luis Fonsi)
          <br />
          Don’t Stop Believin’ (Journey)
          <br />
          Don’t Stop the Party (Pitbull)
          <br />
          Don’t Stop ‘Til You Get Enough (Michael Jackson)
          <br />
          Dynamite (Taio Cruz)
          <br />
          Every Little Thing She Does is Magic (The Police)
          <br />
          Firework (Katy Perry)
          <br />
          Girls Just Wanna Have Fun (Cyndi Lauper)
          <br />
          Get Down Tonight (KC &amp; the Sunshine Band)
          <br />
          Gold Digger (Kayne West)
          <br />
          Happy (Pharrell Williams)
          <br />
          Hey Ya (Outcast)
          <br />
          I Feel Fine (Beatles)
          <br />
          I Feel Good (James Brown)
          <br />
          I Got a Woman (Ray Charles)
          <br />
          I Gotta Feeling (Black Eyed Peas)
          <br />
          I Saw Her Standing There (Beatles)
          <br />
          I Took a Pill in Ibiza (Mike Posner)
          <br />
          I Want You Back (Jackson 5)
          <br />
          Isn’t She Lovely (Stevie Wonder)
          <br />
          Jessie’s Girl (Rick Springfield)
          <br />
          Just Dance (Lady Gaga)
          <br />
          Keep Your Hands to Yourself (The Georgia Satellites)
          <br />
          Kodachrome (Paul Simon)
          <br />
          Let’s Get it Started (Blackeyed Peas)
          <br />
          Let’s Go Crazy (Prince)
          <br />
          Life is a Highway (Tom Chochrane)
          <br />
          Living on a Prayer (Bon Jovi)
          <br />
          Locked Out of Heaven (Bruno Mars)
          <br />
          Honky Tonk Women (Rolling Stones)
          <br />
          Just Dance (Lady Gaga)
          <br />
          Let’s Go Crazy (Prince)
          <br />
          Listen to the Music (Doobie Brothers)
          <br />
          Living on a Prayer (Bon Jovi)
          <br />
          Locked Out of Heaven (Bruno Mars)
          <br />
          Louie Louie (The Kingsmen)
          <br />
          Marry You (Bruno Mars)
          <br />
          Message in a Bottle (The Police)
          <br />
          Moves Like Jagger (Maroon 5 &amp; Christina Aguilera)
          <br />
          Mustang Sally (Wilson Pickett)
          <br />
          New York New York (Frank Sinatra)
          <br />
          Old Time Rock and Roll (Bob Seger)
          <br />
          Party in the USA (Miley Cyrus)
          <br />
          Play That Funky Music White Boy (Wild Cherry)
          <br />
          Pour Some Sugar on Me (Def Leppard)
          <br />
          Power of Love (Huey Lewis and the News)
          <br />
          Rock Your Body (Justin Timberlake)
          <br />
          Rocky Top (Osborne Brothers)
          <br />
          Roxanne (The Police)
          <br />
          September (Earth Wind and Fire)
          <br />
          Shake It Off (Taylor Swift)
          <br />
          Shotgun (JR Walker and the All Stars)
          <br />
          Shout (The Isley Brothers)
          <br />
          Shut Up and Dance (Walk the Moon)
          <br />
          Single Ladies (Beyonce)
          <br />
          Steal My Kisses (Ben Harper)
          <br />
          Stitched Up (John Mayer)
          <br />
          Superstition (Stevie Wonder)
          <br />
          Sweet Caroline (Neil Diamond)
          <br />
          Sweet Home Alabama (Lynyrd Skynyrd)
          <br />
          Teenage Dream (Katy Perry)
          <br />
          The Way You Make Me Feel (Michael Jackson)
          <br />
          Timber (Pitbull)
          <br />
          Twist and Shout (Beatles)
          <br />
          Uptown Funk (Mark Ronson/Bruno Mars)
          <br />
          Versace on the Floor (Bruno Mars)
          <br />
          Walk Don’t Run (Ventures)
          <br />
          We Are the Champions (Queen)
          <br />
          When the World Is Spinning Round (The Police)
          <br />
          Why Do Good Stories Have to Come to an End (Justin Caldwell –
          original)
          <br />
          You are the Best Thing (Ray Lamontagne)
          <br />
          You Can Call Me Al (Paul Simon)
          <br />
          You Can’t Hurry Love (The Supremes)
          <br />
          You Look Good (Lady Antebellum)
          <br />
          You Make My Dreams Come True (Hall and Oates)
          <br />
          You Shook Me All Night Long (AC/DC)
          <br />
          Your Love Has Lifted Me Higher and Higher (Jackie Wilson)
        </Box>

        <Heading mt={4}>MID-TEMPO DANCE SONGS</Heading>

        <Box as="p" mt={3}>
          Ain’t Nothin’ Like the Real Thing (Marvin Gaye and Tammi Terrell)
          <br />
          All Four Seasons (Sting)
          <br />
          Angel (Shaggy)
          <br />
          Better Together (Jack Johnson)
          <br />
          Chicken Fried (Zac Brown Band)
          <br />
          Don’t Worry Baby (Beach Boys)
          <br />
          Englishman in New York (Sting)
          <br />
          Fly (Sugar Ray)
          <br />
          Forever Young (Bob Dylan)
          <br />
          Friends In Low Places (Garth Brooks)
          <br />
          Hey, Soul Sister (Train)
          <br />
          Ho Hey (The Lumineers)
          <br />
          Home (Edward Sharpe and the Magnetic Zeros)
          <br />
          Home (Michael Buble)
          <br />
          Honey Bee (Blake Shelton)
          <br />
          How Sweet It Is To Be Loved By You (James Taylor)
          <br />
          Ignition (R Kelly)
          <br />
          I’m Yours (Jason Mraz)
          <br />
          In My Life (Beatles)
          <br />
          The Joker (Steve Miller)
          <br />
          Let’s get it on (Marvin Gaye)
          <br />
          Let’s Stay Together (Al Green)
          <br />
          Lucky (Jason Mraz and Colbie Caillat)
          <br />
          Margaritaville (Jimmy Buffet)
          <br />
          Moondance (Van Morrison)
          <br />
          Need You Now (Lady Antebellum)
          <br />
          The One I Love (David Gray)
          <br />
          Overjoyed (Stevie Wonder)
          <br />
          Pink Moon (Nick Drake)
          <br />
          Pumped Up Kicks (Foster the People)
          <br />
          Rocketman (Elton John)
          <br />
          Rolling in the Deep (Adele)
          <br />
          Something to Talk About (Bonnie Raitt)
          <br />
          The Wonder of You (Elvis)
          <br />
          Tonight Tonight (Smashing Pumpkins)
          <br />
          Vultures (John Mayer)
          <br />
          Wagon Wheel (Old Crow Medicine Show)
          <br />
          Walking in Memphis (Marc Cohn)
          <br />
          You Are the Sunshine of My Life (Stevie Wonder)
        </Box>

        <Heading mt={4}>SLOW DANCE SONGS</Heading>

        <Box as="p" mt={3}>
          All You Need Is Love (Beatles)
          <br />
          At Last (Etta James)
          <br />
          Baby Girl (Will Hoge)
          <br />
          Beautiful Boy (John Lennon)
          <br />
          Blackbird (Beatles)
          <br />
          Blue Bossa (Kenny Dorham – Funk Bossa Nova dance)
          <br />
          Can You Feel the Love Tonight (Elton John)
          <br />
          Come Away With Me (Norah Jones)
          <br />
          Corcovado (Antonio Corlos Jobim – Bossa Nova dance)
          <br />
          Crazy (Patsy Cline)
          <br />
          Easy Like Sunday Morning (Lionel Richie)
          <br />
          Every Breathe You Take (Sting and The Police)
          <br />
          Everything (Michael Buble)
          <br />
          Father and Daughter Song (Paul Simon)
          <br />
          Farewell, My Heart (Justin Caldwell – original)
          <br />
          Feels Like Home (Chantal Kreviazuk)
          <br />
          Fields of Gold (Sting)
          <br />
          Have I Told You Lately That I Love You (Van Morrison)
          <br />
          Hold You in My Arms (Ray Lamontagne)
          <br />
          I Loved Her First (Heartland)
          <br />
          La Camisa Negra (Juanes)
          <br />
          Let it Be (Beatles)
          <br />
          Let It Be Me (Ray Lamontagne)
          <br />
          Marry Me (Train)
          <br />
          My Foolish Heart (Jazz Standard)
          <br />
          My Girl (Temptations)
          <br />
          My Way (Sinatra)
          <br />
          My Wish (Rascal Flatts)
          <br />
          Never Had Nobody Like You (M Ward)
          <br />
          Perfect Love Gone Wrong (Sting)
          <br />
          Shape of My Heart (Sting)
          <br />
          Something (Beatles / Joe Cocker)
          <br />
          Somewhere Over the Rainbow (Israel)
          <br />
          Stand By Me (Ben E. King)
          <br />
          Still Crazy After All These Years (Paul Simon)
          <br />
          Sweet Pea (Amos Lee)
          <br />
          Teach Your Children Well (Crosby Stills and Nash)
          <br />
          Thinking Out Loud (Ed Sheeran)
          <br />
          This Year’s Love (David Grey)
          <br />
          Unchained Melody (Righteous Brothers)
          <br />
          Unforgettable (Nat King Cole)
          <br />
          The Way You Look Tonight (Sinatra)
          <br />
          Warm Love (Van Morrison)
          <br />
          What a Difference a Day Made (Jazz Standard)
          <br />
          What a Wonderful World (Louis Armstrong)
          <br />
          When We Dance (Sting)
          <br />
          When You Say Nothing at All (Allison Krauss)
          <br />
          Wonderful Tonight (Eric Clapton)
          <br />
          Wrapped Around Your Finger (Sting and The Police)
          <br />
          You Are So Beautiful to Me (Joe Cocker)
          <br />
          You Don’t Know What Love Is (Jazz Standard)
        </Box>

        <Heading mt={4}>JAZZ/COCKTAIL HOUR SONGS</Heading>

        <Box as="p" mt={3}>
          All You Need Is Love (Beatles)
          <br />
          At Last (Etta James)
          <br />
          Baby Girl (Will Hoge)
          <br />
          Beautiful Boy (John Lennon)
          <br />
          Blackbird (Beatles)
          <br />
          Blue Bossa (Kenny Dorham – Funk Bossa Nova dance)
          <br />
          Can You Feel the Love Tonight (Elton John)
          <br />
          Come Away With Me (Norah Jones)
          <br />
          Corcovado (Antonio Corlos Jobim – Bossa Nova dance)
          <br />
          Crazy (Patsy Cline)
          <br />
          Easy Like Sunday Morning (Lionel Richie)
          <br />
          Every Breathe You Take (Sting and The Police)
          <br />
          Everything (Michael Buble)
          <br />
          Father and Daughter Song (Paul Simon)
          <br />
          Farewell, My Heart (Justin Caldwell – original)
          <br />
          Feels Like Home (Chantal Kreviazuk)
          <br />
          Fields of Gold (Sting)
          <br />
          Have I Told You Lately That I Love You (Van Morrison)
          <br />
          Hold You in My Arms (Ray Lamontagne)
          <br />
          I Loved Her First (Heartland)
          <br />
          La Camisa Negra (Juanes)
          <br />
          Let it Be (Beatles)
          <br />
          Let It Be Me (Ray Lamontagne)
          <br />
          Marry Me (Train)
          <br />
          My Foolish Heart (Jazz Standard)
          <br />
          My Girl (Temptations)
          <br />
          My Way (Sinatra)
          <br />
          My Wish (Rascal Flatts)
          <br />
          Never Had Nobody Like You (M Ward)
          <br />
          Perfect Love Gone Wrong (Sting)
          <br />
          Shape of My Heart (Sting)
          <br />
          Something (Beatles / Joe Cocker)
          <br />
          Somewhere Over the Rainbow (Israel)
          <br />
          Stand By Me (Ben E. King)
          <br />
          Still Crazy After All These Years (Paul Simon)
          <br />
          Sweet Pea (Amos Lee)
          <br />
          Teach Your Children Well (Crosby Stills and Nash)
          <br />
          Thinking Out Loud (Ed Sheeran)
          <br />
          This Year’s Love (David Grey)
          <br />
          Unchained Melody (Righteous Brothers)
          <br />
          Unforgettable (Nat King Cole)
          <br />
          The Way You Look Tonight (Sinatra)
          <br />
          Warm Love (Van Morrison)
          <br />
          What a Difference a Day Made (Jazz Standard)
          <br />
          What a Wonderful World (Louis Armstrong)
          <br />
          When We Dance (Sting)
          <br />
          When You Say Nothing at All (Allison Krauss)
          <br />
          Wonderful Tonight (Eric Clapton)
          <br />
          Wrapped Around Your Finger (Sting and The Police)
          <br />
          You Are So Beautiful to Me (Joe Cocker)
          <br />
          You Don’t Know What Love Is (Jazz Standard)
        </Box>

        <Heading mt={4}>OTHER SPECIAL SONGS</Heading>

        <Box as="p" mt={3}>
          Auld Lang Syne – TRADITIONAL NEW YEARS
          <br />
          What Are You Doing New Years Eve – TRADITIONAL NEW YEARS
          <br />
          La Camisa Negra (Juanes)
          <br />
          Military Medley (Gene Simmons of Kiss)
        </Box>

        <Box as="p" mt={4}>
          Many more songs being added all the time&hellip;
        </Box>
      </Box>

      <Box
        ml={3}
        sx={{ flex: '0 0 30%', display: ['none', 'block'], minWidth: 250 }}
      >
        <Videos showHeading={true} />
        <Testimonials mt={4} />
      </Box>
    </Flex>
  </Layout>
)

export default Songs
