import React from 'react'
import Header from '../components/Header/Header'
import Profile from './Profile'
import logo from '../logo.svg'
import styled from 'styled-components'

const AppWrapper = styled.div`text-align: center;`

function App() {
  return (
    <AppWrapper>
      <Header logo={logo}/>
      <Profile />
    </AppWrapper>
  );
}

export default App