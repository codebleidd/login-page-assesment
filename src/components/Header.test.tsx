import React from 'react'
import { RenderResult } from '@testing-library/react'

import { renderWithTheme } from '../helpers'
import App from './Header'
import Header from './Header'

describe('Header component', () => {
  let component: RenderResult
  const title = 'Title'
  const subtitle = 'Subtitle'

  it('renders title properl', () => {
    component = renderWithTheme(<Header title={title} />)
    expect(component.getByText(title)).toBeVisible()
  })

  it('contains LoginSection', () => {
    component = renderWithTheme(<Header title={title} subtitle={subtitle} />)
    expect(component.getByText(subtitle)).toBeVisible()
  })
})
