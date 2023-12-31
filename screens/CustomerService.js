import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput,Image,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather,AntDesign } from '@expo/vector-icons';

//import { Platform } from 'react-native';
//import * as Linking from 'expo-linking';

if(Platform.OS !== 'web'){
  Linking =  require('expo-linking');
}

export default function CustomerService({ navigation }){

  const phoneNumber = '+233302611560';
  const mail = 'gtbank@gmail.com';
  const link = 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2RiOGU0MDctNjU5NS00NWQ4LWE0OWEtYTZjZmZiZTExMzY1%40thread.v2/0?context=%7b%22Tid%22%3a%226b9fa61e-2360-4e38-a783-2d9af377f31b%22%2c%22Oid%22%3a%2275207c3b-a7da-4d03-9be5-6757c2e41976%22%7d'
  const openPhoneApp = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;
    
    Linking.openURL(telUrl)
      .catch((err) => console.error('Failed to open phone app:', err));
  };

  const openMailApp = (mail) => {
    const telUrl = `mailto:${mail}`;
    
    Linking.openURL(telUrl)
      .catch((err) => console.error('Failed to open phone app:', err));
  };

  const openVideoApp = (link) => {
    const video = link;
    
    Linking.openURL(video)
      .catch((err) => console.error('Failed to open video app:', err));
  };
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../images/imgbg2.png')}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={styles.centeredView}>

            <View style={{marginTop:40,width:'100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'center',margin:10}}>
          <Text style={{fontSize: 20, padding: 5, textAlign: 'center', alignItems: 'center', justifyContent: 'center',fontSize:23}}>
          How would you like to communicate with our live agents?
          </Text>
            
          </View>
          <View style={{position:'absolute',bottom:'10%',left:50}}>
          <View style={{flexDirection:'row',margin:20,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => openVideoApp(link)}>
                <Image
                  style={{ height: 60, width: 60, marginEnd: 30 }}
                  source={require('../images/video.png')}
                />
                <Text style={{fontWeight:"bold"}}>Video call</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPhoneApp(phoneNumber)}>
                <Image
                  style={{ height: 60, width: 60, marginEnd: 30,}}
                  source={require('../images/call.png')}
                />
                <Text style={{fontWeight:"bold"}}>Voice call</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openMailApp(mail)}>
                <Image
                  style={{ height: 60, width: 60, marginEnd:10 }}
                  source={require('../images/chat.png')}
                />
                <Text style={{fontWeight:"bold"}}> Live chat</Text>
                </TouchableOpacity>
            </View>
          </View>
                
              {/* <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
              /> */}
            </View>
          </ImageBackground>
        </View>
      );
    }
    
const styles = StyleSheet.create({
imageBackground: {
flex: 1,
/* alignItems: 'center',
justifyContent: 'center', */
},
centeredView: {
flex: 1,
/* justifyContent: 'center',
alignItems: 'center', */
},
button: {
    alignItems: 'center',
    //backgroundColor: '#FEFEFE',
    //padding: 10,
    width:60,
    height:40,
    //borderRadius:10,
    //marginBottom:5
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    padding: 10,
    width:80,
    height:40,
    borderRadius:10,
    marginBottom:5,
    marginStart:10
  },
});