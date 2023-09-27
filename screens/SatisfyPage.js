import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather,AntDesign } from '@expo/vector-icons';


export default function Satisfy({ navigation }){
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
          Did I answer all you questions like you wanted?
          </Text>
            <View style={{flexDirection:'row',margin:20}}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SatisfyYes')}>
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SatisfyNo')}>
                    <Text>No</Text>
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
    borderRadius:10,
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