import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#F0B429',
      main: '#F7C948',
      light: '#FCE588',
    },
    secondary: {
      dark: '#1992D4',
      main: '#40C3F7',
      light: '#81DEFD',
      contrastText: 'white',
    },
    neutral: {
      dark: '#515151',
      main: '#7E7E7E',
      light: '#B1B1B1',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
})

export { theme }
