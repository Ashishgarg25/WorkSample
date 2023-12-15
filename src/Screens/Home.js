import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import ImageSelector from '../Components/ImageSelector';
import CameraIcon from '../Components/Camera';
import Input from '../Components/Input';
import Button from '../Components/Button';
import BottomBar from '../Components/BottomBar';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
// console.log(height)

const Home = () => {

  const navigation = useNavigation();
    
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      {/* Main Heading Starts */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
            heading="Let’s get to know you"
            subHeading="Let us get to know you a bit better so you can get the best out of us"
        />
        {/* Main Heading Ends */}

        {/* FormImage Container Starts */}
        <View style={styles.formMainContainer}>
            <View style={styles.imageContainer}>
                <View style={styles.imageSelector}>
                    <ImageSelector/>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate("Choose Photo")}>
                    <CameraIcon/>
                    <Text style={[styles.smallText, {marginLeft: 8}]}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <Input label="First Name" isRequired={true} val='John'/>
                <Input label="Last Name" isRequired={true} val='Blake' topMargin={16}/>
                <Input label="Year of birth" isRequired={true} val='1980' topMargin={16} isDropdown={true}/>
            </View>
        </View>
        {/* FormImage Container Ends */}

        {/* Save Button Container Starts*/}
        <View style={styles.buttonContainer}>
            <Button label="Save"/>
        </View>
        {/* Save Button Container Ends*/}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Home

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    headingContainer: {
        width:'90%',
        marginHorizontal: 20,
        marginTop: height/10.5,
        //borderWidth: 1,
    },
    extraLargeText: {
        fontFamily: 'Abel-Regular', 
        fontWeight: '400', 
        fontSize: 20, 
        color: '#020617D9',
        lineHeight: 30,
    },
    largeText: {
        fontFamily: 'Abel-Regular', 
        fontWeight: '400', 
        fontSize: 16, 
        color: '#020617B2',
        lineHeight: 27.2,
    },
    formMainContainer: {
        width: '90%',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginTop: 24,
        //borderWidth: 1,
    },
    imageContainer: {
        alignSelf: 'center',
        //borderWidth: 1,
    },
    imageSelector: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderColor: '#0206170F',
        //borderWidth: 1,
    },
    editButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        zIndex: 999,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: '#0206171F',
        borderRadius: 30,
        backgroundColor: '#F8FAFC',
        marginTop: -16,   
    },
    smallText: {
        fontFamily: 'Abel-Regular', 
        fontWeight: '400', 
        fontSize: 14, 
        color: '#020617D9',
        lineHeight: 23.8,
    },
    formContainer: {
        width: '100%',
        marginTop: 40,
    },
    buttonContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
    }
})