import React from 'react'
import { RenderResult } from '@testing-library/react'

import { renderWithTheme } from './helpers'
import App from './App'

describe('App component', () => {
  let app: RenderResult
  it('renders properly', () => {
    app = renderWithTheme(<App />)
  })

  it('contains LoginSection', () => {
    app = renderWithTheme(<App />)
    const wrapper = app.getByTestId('app__login-section')
    expect(wrapper).toBeVisible()
  })
})
