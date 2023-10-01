import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Satisfy({ navigation }){
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../images/imgbg2.png')}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={styles.centeredView}>
            <View style={{marginTop:60,margin:10,width:'100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text>Back</Text>
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'center',margin:10}}>
          <Text style={{alignItems:'center',fontSize:20,padding:10}}>
          Did I answer all you questions like you wanted?
        
          </Text>
            <View style={{flexDirection:'row',margin:20}}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SatisfyYes')}>
                    <Text style={{fontSize:17,color:"white"}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SatisfyNo')}>
                    <Text style={{fontSize:17,color:"white"}}>No</Text>
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
    backgroundColor: '#FEFEFE',
    padding: 10,
    width:60,
    height:40,
    borderRadius:10,
    marginBottom:5
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#d15921',
    padding: 10,
    width:90,
    height:40,
    borderRadius:10,
    marginBottom:5,
    marginStart:10
  },
});

 // Was I of very good help or you wish to be connected to a real customer service?