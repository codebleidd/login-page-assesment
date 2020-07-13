import '@material-ui/core/styles/createPalette'
import { PaletteColorOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }
}
