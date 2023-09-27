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

  const phoneNumber = '1234567890';
  const mail = 'gtbank@gmail.com'
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
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../assets/splash1.png')}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={styles.centeredView}>
            <View style={{margin:5,marginTop:30,width:'100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'center',margin:10}}>
          <Text style={{fontSize: 20, padding: 5, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
          How would you like to communicate with our live agents?
          </Text>
            
          </View>
          <View style={{position:'absolute',bottom:'10%',left:50}}>
          <View style={{flexDirection:'row',margin:20,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                <Image
                  style={{ height: 60, width: 60, marginEnd: 30 }}
                  source={require('../images/video.png')}
                />
                <Text>Video call</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPhoneApp(phoneNumber)}>
                <Image
                  style={{ height: 60, width: 60, marginEnd: 30 }}
                  source={require('../images/call.png')}
                />
                <Text>Voice call</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openMailApp(mail)}>
                <Image
                  style={{ height: 60, width: 60, marginEnd: 10 }}
                  source={require('../images/chat.png')}
                />
                <Text>live chat</Text>
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