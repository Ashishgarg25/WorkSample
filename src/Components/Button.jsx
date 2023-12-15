import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/Colors'
import { styles } from '../Screens/Home'

const Button = (props) => {
  return (
    <TouchableOpacity 
      style={[
        props.tabBtn 
        ? {width: '50%', alignItems: 'center', paddingVertical: 4, borderRadius: 8} 
        : buttonStyles.container,
        props.lightBgBtn ? {backgroundColor: 'transparent'} : {backgroundColor: COLORS.primary},
        props.borderedBtn && {borderWidth: 1, borderColor: COLORS.primary},
      ]}
      onPress={props.handlePress}
    >
      <Text 
        style={[
          props.tabBtn ? styles.smallText : styles.largeText, 
          props.lightBgBtn ? {color: COLORS.black} : {color: COLORS.white}
        ]}
      >{props.label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const buttonStyles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 11,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
    },
})