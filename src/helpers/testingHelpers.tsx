import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { theme } from '../styles'

const renderWithTheme = (Component: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}

export { renderWithTheme }
