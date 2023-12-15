import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../Screens/Home'

const { width, height } = Dimensions.get('screen');

const Header = (props) => {
  return (
    <View 
        style={[
            {width:'90%', marginHorizontal: 20, borderWidth: 0},
            props.choosingPhoto ? {marginTop: 12} : {marginTop: height/10.5}
        ]}
    >
        <Text style={styles.extraLargeText}>{props.heading}</Text>
        <Text style={[styles.largeText, {marginTop: 8}]}>{props.subHeading}</Text>
    </View>
  )
}

export default Header