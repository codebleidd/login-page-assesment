import React from 'react'
import styled from 'styled-components'
import DoneAllIcon from '@material-ui/icons/DoneAll'

import MountTransistion from './MountTransition'

const Wrapper = styled(MountTransistion)`
  display: flex;
  align-items: center;
  font-size: 32px;
  color: ${({ theme }) => theme.palette.neutral.dark};

  .MuiSvgIcon-root {
    margin-right: 4px;
  }
`

const SuccessScreen = ({
  message = 'Successfully logged in!',
}: {
  message?: string
}) => {
  return (
    <Wrapper>
      <DoneAllIcon color='primary' fontSize='large' />
      {message}
    </Wrapper>
  )
}

export default SuccessScreen
