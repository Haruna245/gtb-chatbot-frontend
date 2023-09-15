import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


export default function ProfileScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
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
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View>
          <View style={{margin:20,alignItems:'center'}}>
            <Text style={{textAlign: 'center',justifyContent: 'center',fontWeight: 'light',fontSize:17}}>To recover your User ID and reset your password ,enter your info below.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <TextInput
            style={{marginStart:20,width: '20%',backgroundColor:'#FFFFFF',
          
                    height: 50,borderRadius:5,padding:10,borderWidth: 1,borderColor:'orange'}}
            onChangeText={onChangeText}
            value={text}
            placeholder="+233"
          />
          <TextInput
            style={{marginStart:5,width: '70%',backgroundColor:'#FFFFFF',
          
                    height: 50,borderRadius:5,padding:5,borderWidth: 1,borderColor:'orange'}}
            onChangeText={onChangeText}
            value={text}
            placeholder="phone number"
          />
          </View>
          <View>
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
            placeholder="DD/MM/YYYY"
          />
          </View>
          <View>
            <TouchableOpacity style={{backgroundColor: '#FD8936',alignItems: 'center',height:50,borderRadius:10,
                                      margin:20,padding: 10,marginTop:30}}
                                      onPress={() => navigation.navigate('Notifications')}
                                      >
              <Text style={{marginTop:5,color:'white',fontWeight: 'bold'}} >Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginStart:20,marginEnd:20}}>
            <Text>By continuing ,you agree to our  Digital Banking Agreement and have read our Online Policy.</Text>
          </View>
        {/* <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} /> */}
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
      alignItems: 'flex-start',
      justifyContent:'center',
      //backgroundColor: '#FEFEFE',
      //padding: 10,
      width:'15%',
      height:40,
      borderRadius:10,
      //marginTop:10,
      //marginBottom:5
    },
    input: {
      height: 50,
      margin: 12,
      marginStart:20,
      borderWidth: 1,
      padding: 10,
      width: '90%',
      backgroundColor:'#FFFFFF',
      borderRadius:5,
      borderColor:'orange'
    },
  });
  
