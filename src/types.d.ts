declare module '*.jpg'
declare module '*.png'
declare module '*.svg'

declare module 'react-animate-height'

declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui'

  const presets: Record<'base', Theme>

  export = presets
}
