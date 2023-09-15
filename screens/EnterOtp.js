import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function SettingsScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    return (
        <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/splash1.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.centeredView}>
        <View style={{marginStart:10}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          </View>
          <View style={{margin:20}}>
            <Text style={{fontSize:20}}>Please enter the 6 digits code sent to your number</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 1 }}>
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText}
                value={text}
                keyboardType="numeric"
                placeholder=""
            />
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText2}
                value={text}
                keyboardType="numeric"
                placeholder=""
            />
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText3}
                value={text}
                keyboardType="numeric"
                placeholder=""
            />
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText4}
                value={text}
                keyboardType="numeric"
                placeholder=""
            />
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText5}
                value={text}
                keyboardType="numeric"
                placeholder=""
                
            />
            <TextInput
                style={styles.otpbtn}
                onChangeText={onChangeText6}
                value={text}
                keyboardType="numeric"
                placeholder=""
            />
             </View>
             <View style={{marginTop:50}}>
              <TouchableOpacity style={{backgroundColor:'orange',height:50,margin:20,alignItems: 'center',
              justifyContent:'center',borderRadius:10 
            }}
            onPress={() => navigation.navigate('PasswordReset')}
            >
                <Text style={{color:'white',fontSize:16}}>Proceed</Text>
              </TouchableOpacity>
             </View>

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
    width:'15%',
    height:40,
    borderRadius:10,
    marginTop:10, 
    marginBottom:5
  },
  otpbtn:{
    flex: 1, 
    borderWidth: 1, 
    borderColor: 'grey', 
    padding: 10,width:50,
    margin:7,
    backgroundColor:'white',
    borderRadius:5 
  }
});