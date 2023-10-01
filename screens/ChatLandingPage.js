import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

export default function ChatWelcome({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.centeredView}>
        <View style={{marginStart:5}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent: 'center',marginTop:30 }}>
            <View>
          <Image
            style={styles.tinyLogo}
            source={require('../images/gtblogo.png')}
          />
         </View>
         <View>
         <Text style={{ color: '#FF7A00', }}>GTBank</Text>
          <Text style={{ color: '#FF7A00', }}>Customer Service</Text>
          <Text style={{ color: '#FF7A00', }}>Chatbot</Text>
         </View>

          </View>
          <View style={{alignItems: 'center',margin:20,marginStart:50,marginEnd:50}}>
            <Text style={{fontSize:18}}>Hi name is GT Esi,How may i be of your service?</Text>
          </View>
          <View style={{with:'100%',alignItems:'center',marginTop:10}}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen2')}>
          <Image
            style={styles.tinyLogo}
            source={require('../images/tapChat.png')}
          />
          <Text style={{fontSize:19}}>Tap here to Chat</Text>
          </TouchableOpacity>
          
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


{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View> */}

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
    alignItems: 'flex-start',
    justifyContent:'center',
    //backgroundColor: '#FEFEFE',
    padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
    marginTop:30,
    //marginBottom:5
  },
  tinyLogo: {
    marginStart:30,
    width: 70,
    height: 70,
    display:'flex',
    justifyContent: 'center',
    
  }
});
      