import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Screens/Home'
import { COLORS } from '../theme/Colors'
import ChevronDown from './ChevDown'

const Input = (props) => {

  const [text, setText] = useState(props.val);
  
  const handleText =(val)=> {
    setText(val);
  }

  return (
    <View style={{marginTop: props.topMargin}}>
      <Text style={styles.smallText}>{props.label} 
        { props.isRequired && <Text style={{color: COLORS['text-error-light']}}> * </Text>}
      </Text>
      <View style={inputStyles.inputContainer}>
        <TextInput
          style={[inputStyles.input, styles.largeText]} 
          value={text}
          onChangeText={(txt)=> handleText(txt)}
        />
        {props.isDropdown && (<ChevronDown style={{marginLeft: -16}}/>)}
      </View>
    </View>
  )
}

export default Input

const inputStyles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: COLORS['border-lighter'],       
        borderRadius: 12,
        marginTop: 4,
        backgroundColor: COLORS['bg-1'],
        alignItems: 'center',
        //paddingVertical: 11,
        //paddingRight: 16,
    },
    input: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: COLORS['bg-1'],
        //paddingHorizontal: 16,
        //paddingVertical: 11,
        //marginTop: 4,
    }
})