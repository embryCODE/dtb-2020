import { base } from '@theme-ui/presets'

export default {
  ...base,
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'Helvetica, sans-serif',
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
    text: 'tomato',
    background: 'papayawhip',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
}
