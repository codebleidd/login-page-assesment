import React from 'react'
import styled from 'styled-components'

import background from './images/background.jpg'

export const Wrapper: React.FC = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 3fr 4fr;
  background: url(${background}) no-repeat;
  background-position: center;
  background-size: cover;
`
export const LoginSection: React.FC = styled.div`
  display: flex;
  padding: 0 96px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`

function App() {
  return (
    <Wrapper>
      <LoginSection data-testid='app__login-section'></LoginSection>
    </Wrapper>
  )
}

export default App
