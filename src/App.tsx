import React from 'react'
import styled from 'styled-components'

import LoginForm from './components/LoginForm'
import background from './images/background.jpg'
import Header from './components/Header'

const Wrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 3fr 4fr;
  background: url(${background}) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: auto;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    display: flex;
    justify-content: center;
    padding: 0px 8px;
  }
`
const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 96px;
  background-color: #fffffff8;
  min-height: auto;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    padding: 32px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    margin: auto 0;
    padding: 16px 24px;
    height: initial;
  }
`

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Wrapper>
        <LoginSection data-testid='app__login-section'>
          <Header
            title='Hey buddy'
            subtitle="Log in and see what's your next adventure"
          />
          <LoginForm />
        </LoginSection>
      </Wrapper>
    )
  }
}

export default App
