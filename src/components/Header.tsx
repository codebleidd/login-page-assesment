import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.neutral.dark};

  margin-bottom: 8px;
`
export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.neutral.main};

  margin-bottom: 32px;
`

interface HeaderProps {
  title: string
  subtitle?: string
}

const Header: React.FC<HeaderProps> = props => {
  const { title, subtitle } = props
  return (
    <header>
      <Title variant='h4'>{title}</Title>
      <Subtitle variant='h6'>{subtitle}</Subtitle>
    </header>
  )
}

export default Header
