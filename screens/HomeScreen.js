import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,Image,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import  ProfileScreen  from '../screens/profile'


  function HomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/splash1.png')}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.centeredView}>
              <Image
            style={styles.tinyLogo}
            source={require('../images/gtblogo.png')}
          />
          
          <Text style={{ color: '#FF7A00', }}>GTBank</Text>
          <Text style={{ color: '#FF7A00', }}>Customer Service</Text>
          <Text style={{ color: '#FF7A00', }}>Chatbot</Text>
          
          <View style={{ width: '100%',marginTop:50 }}> 

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="account number"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="password"
          />
          </View>
      
            {/* <Button
              title="Go to Profile"
              onPress={() => navigation.navigate('Profile')}
              style={{marginTop:50}}
            /> */}
            <View style={{width:'100%',alignItems: 'center' }}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('chatWelcome')}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            </View>

            <View style={{width:'100%',marginStart:70}}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.forgetPasswordText}>forgetPassword</Text>
         
              </TouchableOpacity>
             </View>
             <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginBottom:10}}>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Location')}>
            <Text style={{color: '#FF7A00',}}>Location </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FAQpage')}>
            <Text style={{color: '#FF7A00',}}>| FAQs </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FeedbackScreen')}>
              <Text style={{color: '#FF7A00',}}>| FEEDBACK</Text>
            </TouchableOpacity>
            </View>
             </View>
          </View>
          
        </ImageBackground>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredView: {
      paddingTop:50,
      flex: 1,
      /* justifyContent: 'center',*/
      alignItems: 'center',
      width: '100%', 
    },
    tinyLogo: {
      /* marginBottom:50, */
      width: 60,
      height: 60,
      display:'flex',
      justifyContent: 'center',
      
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
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 10,
      width:'80%',
      margin:40,
      height:50,
      borderRadius:10,
      marginBottom:5
    },
    buttonText: {
      textAlign: 'center', // Center the text horizontally
      justifyContent: 'center', // Center the text vertically
      color: 'white', // Text color
      fontWeight: 'bold', // Text style
      marginTop:5,
    },
    forgetPasswordText: {
      //textAlign: 'center', // Center the text horizontally
      color: '#FF7A00', // Text color
      textDecorationLine: 'underline', // Underline the text
      //marginTop: 10, // Add margin to separate it from the button
    },
  });
  

  export default HomeScreen;