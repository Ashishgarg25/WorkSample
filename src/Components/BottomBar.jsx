import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/Colors'

const BottomBar = () => {
  return (
    <View
        style={{
            width: 140,
            height: 5,
            borderRadius: 100,
            backgroundColor: COLORS.black,
            marginTop: 20,
        }}
    />
  )
}

export default BottomBar