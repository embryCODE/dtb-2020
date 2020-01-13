import { base } from '@theme-ui/presets'

const theme = {
  ...base,
  fonts: {
    body: 'Verdana, Helvetica, sans-serif',
    heading: 'Verdana, Helvetica, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    ...base.colors,
    text: 'hsl(0, 0%, 92%)',
    textDark: 'hsl(0, 0%, 36%)',
    textDarker: 'hsl(0, 0%, 16%)',
    background: 'black',
    backgroundLight: 'rgb(248,248,248)',
    primary: 'hsl(193, 80%, 50%)',
    primaryDark: 'hsl(193, 80%, 36%)',
    secondary: '#662E9B',
  },
  text: {
    heading: {
      fontFamily: 'Caviar Dreams',
      fontWeight: 'heading',
      color: 'white',
    },
  },
  buttons: {
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    secondary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'secondary',
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    tertiary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'black',
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        bg: 'secondary',
        transform: 'scale(1.10)',
      },
    },
  },
  links: {
    nav: {
      fontFamily: 'Caviar Dreams, serif',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
      backgroundColor: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}

export default theme
