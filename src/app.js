import React, { PureComponent } from 'react'
import QRCode from 'qrcode.react'

import styled from 'styled-components'

import { GlobalStyle } from './style'

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const WrapperStyle = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: lightgray;
`

const TextStyle = styled.div`
  margin-top: 24px;
  width: 256px;
  font-size: 16px;
  color: gray;
  user-select: none;
  pointer-events: none;
`

export default class App extends PureComponent {
  render() {
    const arr = decodeURIComponent(window.location.search)
      .slice(1)
      .split(/&|=/)
    const params = {}

    for (let i = 0; i < arr.length; i += 2) {
      const key = arr[i]
      const value = arr[i + 1]
      params[key] = value
    }

    const value = JSON.stringify(params)

    return (
      <>
        <GlobalStyle />
        <ContainerStyle>
          <WrapperStyle>
            <QRCode value={value} renderAs="svg" size={256} />
            <TextStyle>Scan QR Code in Spark application to launch configuration in Platform Client</TextStyle>
          </WrapperStyle>
        </ContainerStyle>
      </>
    )
  }
}
