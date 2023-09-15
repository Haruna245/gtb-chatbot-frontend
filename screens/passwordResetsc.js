import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,Image,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function PasswordReset({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={{margin:10}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.centeredView}>
        <View style={{ width: '100%' }}> 

            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="new password"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="confirm new password"
            />
            </View>
            <View style={{margin:20,padding:10,marginTop:10}}>
                <Text style={{fontSize:13,fontWeight:'bold'}}>
                Please set a new password .Make sure character are more than 8 and has symbols like $#%&(!........ 
                </Text>
            </View>
            <View>
            <TouchableOpacity style={{backgroundColor:'orange',height:50,margin:20,alignItems: 'center',
              justifyContent:'center',borderRadius:10 
            }}
            onPress={() => navigation.navigate('chatWelcome')}
            >
                <Text style={{color:'white',fontSize:16}}>Proceed</Text>
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
    
},
centeredView: {
    flex: 1,
    justifyContent:'center',
},
button: {
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
    marginTop:20,
    marginBottom:5
  },
  input: {
    height: 50,
    margin: 12,
    marginStart:20,
    /* borderWidth: 1, */
    padding: 10,
    width: '90%',
    backgroundColor:'#FFFFFF',
    borderRadius:5
  }
});