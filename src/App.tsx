import React from 'react'
import styled from 'styled-components'

import LoginForm from './components/LoginForm'
import background from './images/background.jpg'

const Wrapper = styled.div`
  flex-grow: 1;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 4fr;
  background: url(${background}) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    display: flex;
    justify-content: center;
    padding: 0px 8px;
  }
`
const LoginSection = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 96px;
  background-color: #fffffff8;
  overflow: auto;
  height: 100%;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    padding: 32px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    padding: 16px 24px;
    height: initial;
  }
`

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Wrapper>
        <LoginSection data-testid='app__login-section'>
          <LoginForm />
        </LoginSection>
      </Wrapper>
    )
  }
}

export default App
