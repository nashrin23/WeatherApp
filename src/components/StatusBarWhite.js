import { StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../assets/constants/global.colors'

const StatusBarWhite = () => {
  return (
    <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
  )
}

export default StatusBarWhite