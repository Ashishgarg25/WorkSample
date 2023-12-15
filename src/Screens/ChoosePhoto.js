import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ExitIcon from '../Components/Exit'
import { COLORS } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import Header from '../Components/Header'
import Button from '../Components/Button'
import CameraIcon from '../Components/Camera'
import { styles } from './Home'
import Modal from 'react-native-modal';
import GalleryIcon from '../Components/GalleryIcon'
import DeleteIcon from '../Components/DeleteIcon'
import ImagePicker from 'react-native-image-crop-picker';
import AvatarOne from '../Components/Avatar01'
import AvatarThree from '../Components/Avatar03'
import AvatarFour from '../Components/Avatar04'
import AvatarTwo from '../Components/Avatar02'
import AvatarFive from '../Components/AvatarFive'

const avatarList = [
    {
        id: 1,
        image: <AvatarOne/>,
    },
    {
        id: 2,
        image: <AvatarTwo/>,
    },
    {
        id: 3,
        image: <AvatarThree/>,
    },
    {
        id: 4,
        image: <AvatarFour/>,
    },
    {
        id: 5,
        image: <AvatarFive/>,
    },
    {
        id: 6,
        image: <AvatarTwo/>,
    },
    {
        id: 7,
        image: <AvatarThree/>,
    },
    {
        id: 8,
        image: <AvatarFour/>,
    },
    {
        id: 9,
        image: <AvatarOne/>,
    },
    {
        id: 10,
        image: <AvatarTwo/>,
    },
    {
        id: 11,
        image: <AvatarThree/>,
    },
    {
        id: 12,
        image: <AvatarFour/>,
    },
]

const Option =(props)=> {
    return (
        <View style={{width: '100%'}}>
            <Pressable 
                style={[
                    {flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 24},
                    props.verticalBordered && 
                    {borderTopWidth: 1, borderBottomWidth: 1, borderColor: COLORS['border-lighter']}
                ]}
                onPress={props.handleImage}
            >
                {props.icon}
                <Text style={[styles.largeText, {marginLeft: 8}]}> {props.label} </Text>
            </Pressable>
        </View>
    );
}

const ModalContent =(props)=> {
    return(
        <View style={choosingStyles.modalContainer}>
            <View style={choosingStyles.modalKnob}/>
            <View style={choosingStyles.optionsContainer}>
                <Text style={[styles.extraLargeText, {marginHorizontal: 20}]}> Upload your Photo </Text>
                <View style={{marginTop: 16}}>
                    <Option icon={<GalleryIcon/>} label="View photo library" handleImage={props.selectImage}/>
                    <Option icon={<CameraIcon/>} label="Take a photo" verticalBordered={true} handleImage={props.clickImage}/>
                    <Option icon={<DeleteIcon/>} label="Remove photo" handleImage={props.deleteImage}/>
                </View>
            </View>
        </View>
    );
}

const ChoosePhoto = () => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState();
  const [tab, setTab] = useState(1);
  const [selectedAvatar, setSelectedAvatar] = useState();

  const SelectImage = () => {
    ImagePicker.openPicker({
      width: 330,
      height: 330,
      cropping: true,
    }).then(image => {
      //console.log(image);
      setPhoto(image.path);
      setModalVisible(false);
    });
  };

  const ClickImage =()=> {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      //console.log(image);
      setPhoto(image.path);
      setModalVisible(false);
    });
  }

  const RemoveImage =()=> {
    setPhoto();
    setModalVisible(false);
  }

  return (
    <View style={choosingStyles.container}>
        <View style={{margin: 20}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <ExitIcon/>
            </TouchableOpacity>
        </View>
        <View style={choosingStyles.photoMainContainer}>
            <Header
                heading="Choose profile photo."
                subHeading="Choose a profile photo from your library or select an avatar to add to your profile"
                choosingPhoto={true}
            />
            <View style={choosingStyles.tabsContainer}>
                <Button label="Choose Photo" tabBtn={true} lightBgBtn={tab==1 ? false : true} handlePress={()=> setTab(1)}/>
                <Button label="Avatars" tabBtn={true} lightBgBtn={tab==2 ? false : true} handlePress={()=> setTab(2)}/>
            </View>
            <View style={{marginTop: 24, width: '100%', alignItems: 'center'}}>
                { tab===1 ?
                    <> 
                        <View style={choosingStyles.photoSelector}>
                            {photo &&
                            (<Image 
                                source={{uri: photo}} 
                                style={{width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 200}}
                            />)}
                        </View>
                        <TouchableOpacity style={choosingStyles.editButton} onPress={()=> setModalVisible(true)}>
                            <CameraIcon choosingPhoto={true}/>
                            <Text style={[styles.largeText, {marginLeft: 8}]}>Edit Photo</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <View style={choosingStyles.avatarSelector}>
                        <FlatList
                            data={avatarList}
                            keyExtractor={(item)=> item.id}
                            numColumns={4}
                            renderItem={({item})=> (
                                <TouchableOpacity 
                                    key={item.id} 
                                    style={[
                                        {width: 84, height: 84, borderRadius: 42, margin: 6},
                                        selectedAvatar===item.id && {borderWidth: 2, borderColor: COLORS.primary}
                                    ]}
                                    onPress={()=> setSelectedAvatar(item.id)}
                                >
                                    {item.image}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                }
            </View>
            <View style={choosingStyles.buttonContainer}>
                <Button label="Save" borderedBtn={true} lightBgBtn={true}/>
            </View>
        </View>
        <Modal 
            style={choosingStyles.modal}
            isVisible={modalVisible} 
            animationIn={'slideInUp'} 
            animationInTiming={500}
            animationOutTiming={500}
            animationOut={'slideOutDown'} 
            onBackButtonPress={()=> setModalVisible(false)}
            onBackdropPress={()=> setModalVisible(false)}
            backdropTransitionOutTiming={0}
        >
            <ModalContent selectImage={SelectImage} clickImage={ClickImage} deleteImage={RemoveImage}/>
        </Modal>
    </View>
  )
}

export default ChoosePhoto

const choosingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    photoMainContainer: {
        width: '100%',
        marginTop: 12,
        height: '100%',
        //marginHorizontal: 20,
        //borderWidth: 1,
    },
    tabsContainer: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 24,
        marginHorizontal: 20,
        backgroundColor: COLORS['bg-2'],
        padding: 4,
        borderRadius: 12,
        //borderWidth: 1,
    },
    photoSelector: {
        width: 328,
        height: 328,
        borderRadius: 200,
        backgroundColor: COLORS['bg-2'],
        borderWidth: 2,
        borderColor: COLORS['border-lighter'],
    },
    avatarSelector: {
        width: '100%',
        paddingHorizontal: 8,
        //borderWidth: 1,
    },
    editButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: COLORS['border-light'],
        borderRadius: 30,
        backgroundColor: COLORS['bg-1'],   
        marginTop: 24,
    },
    buttonContainer: {
        width: '90%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 110,
        //marginBottom: 10,
        marginHorizontal: 20,
    },
    modal: {
        margin: 'auto', 
        height: '33%', 
        width: '100%', 
        backgroundColor: COLORS.white, 
        position: 'absolute', 
        bottom: 0,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        //borderWidth: 1,
    },
    modalKnob: {
        width: 40,
        height: 4,
        backgroundColor: COLORS['text-disabled'],
        alignSelf: 'center',
        marginVertical: 16,
    },
    optionsContainer: {
        width: '100%',
        marginTop: 8,
        //paddingHorizontal: 20,
    }
})