import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,KeyboardAvoidingView,ImageBackground,Image,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { setGlobalData } from './ApiData';
//import  ProfileScreen  from '../screens/profile'


  function HomeScreen({ navigation }) {
    const [accountID, onChangeText] = React.useState('');
    const [password, onPassword] = React.useState('');
    const [accfail, Setaccfail] = React.useState('');
    const [accSuccess, SetaccSuccess] = React.useState([]);

   const data = {
      email: accountID, password:password
    }

    const sendMessageToServer = async (data) => {
      const apiUrl ='http://127.0.0.1:8000/users/login';
      try {
        const response = await axios.post(apiUrl,data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log(response.data)
        setGlobalData(response.data);
        if(response.status == 200){
          console.log("authenticated")
          //SetaccSuccess()
          navigation.navigate('chatWelcome',{data:accSuccess})
          Setaccfail('');
          onChangeText('')
          onPassword('')
        }
      
        
      } catch (error) {
        Setaccfail('fail');
        console.error(error);
      }

    }
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../images/imgbg2.png')}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.centeredView}>
              <Image
            style={styles.tinyLogo}
            source={require('../images/gtblogo.png')}
          />
          
          <Text style={{ color: '#FF7A00',fontSize:20 ,marginTop:20}}>GTBank</Text>
          <Text style={{ color: '#FF7A00',fontSize:23  }}>Customer Service</Text>
          <Text style={{ color: '#FF7A00',fontSize:20  }}>Chatbot</Text>
          
          
          <View style={{ width: '100%' }}> 
          <View>{accfail ? (
        <Text style={{fontSize:12,color: 'red',marginStart:20}}>account not found</Text>
      ) : (
        <Text  style={{fontSize:20}}></Text>
      )}</View>

        
          
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={accountID}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            onChangeText={onPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          </View>
          
      
            {/* <Button
              title="Go to Profile"
              onPress={() => navigation.navigate('Profile')}
              style={{marginTop:50}}
            /> */}
            <View style={{width:'100%',alignItems: 'center' }}>

            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('chatWelcome')}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={() => sendMessageToServer(data)}>
              <Text style={styles.buttonText}>LOG IN </Text>
            </TouchableOpacity>
            </View>

            <View style={{width:'100%',marginStart:70}}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.forgetPasswordText}>Forget Password?</Text>
         
              </TouchableOpacity>
             </View>
             <View style={{width:'100%',alignItems:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('ChatRegister')}>
              <Text style={styles.forgetPasswordText}>Don't have an account?</Text>
         
              </TouchableOpacity>
             </View>
             <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginBottom:10}}>

          <View style={{flexDirection:'row',marginBottom:20,}}>
            <TouchableOpacity onPress={() => navigation.navigate('Location')}>
            <Text style={{color: 'black',fontSize:18}}>Location </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FAQpage')}>
            <Text style={{color: 'black',fontSize:18,marginStart:20}}>| FAQs </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FeedbackScreen')}>
              <Text style={{color: 'black',fontSize:18,marginStart:20}}>| Feedback</Text>
            </TouchableOpacity>
            </View>
            <View>
              <Text style={{marginBottom:20}}>COPYRIGHT 2023 GTBank,N.A. All Rights Reserved</Text>
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
      width: 80,
      height: 80,
      display:'flex',
      justifyContent: 'center',
      marginTop:50    },
    input: {
      height: 50,
      margin: 12,
      marginStart:20,
      /* borderWidth: 1, */
      padding: 10,
      width: '90%',
      backgroundColor:'#FFFFFF',
      borderRadius:25,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#d15921',
      padding: 10,
      width:'80%',
      margin:40,
      height:50,
      borderRadius:30,
      marginBottom:5,
      marginTop:35
    },
    buttonText: {
      textAlign: 'center', // Center the text horizontally
      justifyContent: 'center', // Center the text vertically
      color: 'white', // Text color
      fontWeight: 'bold', // Text style
      marginTop:8,
    },
    forgetPasswordText: {
      //textAlign: 'center', // Center the text horizontally
      color: '#FF7A00',marginTop:15,marginStart:10 // Text color
      //textDecorationLine: 'underline', // Underline the text
      //marginTop: 10, // Add margin to separate it from the button
    },
  });
  

  export default HomeScreen;