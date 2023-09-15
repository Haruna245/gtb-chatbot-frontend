import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/splash1.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.centeredView}>
        <View style={{marginStart:5}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          </View>
          <View style={{margin:20,alignItems:'center'}}>
            <Text style={{textAlign: 'center',justifyContent: 'center',fontWeight: 'light',fontSize:17}}>To recover your User ID and reset your password ,enter your info below.</Text>
            <Text style={{textAlign: 'center',justifyContent: 'center',fontWeight: 'bold',fontSize:17}}>Code Sent</Text>
         
          </View>
          {/* <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
          /> */}
          <View style={{position: 'absolute',bottom:100,left:40,right:20}}>
            <Text style={{margin:20,fontWeight:'bold',fontSize:17}}>Check in your inbox for a code to reset you password.</Text>
          <TouchableOpacity style={{backgroundColor: '#FD8936',alignItems: 'center',height:50,borderRadius:10,
                                      padding: 10,}}
                                      onPress={() => navigation.navigate('Settings')}
                                      >
              <Text style={{marginTop:5,color:'white',fontWeight: 'bold'}} >Proceed</Text>
            </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
      
    );
  }

  {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
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
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
    marginTop:10,
    marginBottom:5
  },
});