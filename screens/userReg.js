import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function UserReg({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [number, onChangenumber] = React.useState('');
  const [accnumber, onChangeaccnumber] = React.useState('');
  const [firstname, onChangefirstname] = React.useState('');
  const [lastname, onChangelastname] = React.useState('');
  const [othername, onChangeothername] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [ConfPassword, onChangeConfPassword] = React.useState('');
  const [date, onChangedate] = React.useState('');
  const [accSuccess, Setaccfail] = React.useState('');

  const scrollViewRef = React.useRef();
  const data = {
    email: email, password:Password,firstname:firstname,lastname:lastname
  }

  const sendMessageToServer = async (data) => {
    const apiUrl ='https://xrvk8977-8000.euw.devtunnels.ms/users/';
    try {
      const response = await axios.post(apiUrl,{
    email: email, password:Password,first_name:firstname,last_name:lastname
  }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log(response.data)
      //setGlobalData(response.data);
      if(response.status == 200){
        console.log("authenticated")
        //SetaccSuccess()
        navigation.navigate('UserSuccess')
        /* Setaccfail('');
        onChangeText('')
        onPassword('') */
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
          <View style={{marginStart:8,marginTop:55}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View>
          <View style={{marginTop:1,margin:5,alignItems:'center',marginBottom:15}}>
            <Text style={{textAlign: 'center',justifyContent: 'center',fontWeight: 'light',fontSize:17}}>Sign Up</Text>
          </View>
          <ScrollView
          
          ref= {scrollViewRef} /* {(scrollView) => {
            this.scrollView = scrollView; // Create a reference to the ScrollView
          }} */
          onContentSizeChange={() => {
            // Scroll to the bottom whenever content size changes (new messages are added)
            //this.scrollView.scrollToEnd({ animated: true });
            scrollViewRef.current.scrollToEnd({ animated: true });
          }}
          showsVerticalScrollIndicator={false}
        > 
          <View style={{flexDirection:'row',}}>
          <TextInput
            style={{marginStart:20,width: '20%',backgroundColor:'#FFFFFF',
          
                    height: 50,borderRadius:5,padding:10,borderWidth: 1,borderColor:'#d15921'}}
            onChangeText={onChangeText}
            value="+233"
            placeholder="+233"
          />
          <TextInput
            style={{marginStart:5,width: '70%',backgroundColor:'#FFFFFF', height: 50,borderRadius:5,padding:5,borderWidth: 1,borderColor:'orange'}}
            onChangeText={onChangenumber}
            value={number}
            placeholder="phone number"
          />
          </View>
          <View>
            <TextInput
            style={styles.input}
            onChangeText={onChangefirstname}
            value={firstname}
            placeholder="first name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangelastname}
            value={lastname}
            placeholder="Last name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeothername}
            value={othername}
            placeholder="other name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="new password"
            secureTextEntry
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeConfPassword}
            value={ConfPassword}
            placeholder="confirm new password"
            secureTextEntry
            />
            <View style={{marginStart:20,padding:1,marginTop:1}}>
                <Text style={{fontSize:13,fontWeight:'bold'}}>
                Please set a new password .Make sure character are more than 8 and has symbols like $#%&(!........ 
                </Text>
            </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangedate}
            value={date}
            placeholder="DD/MM/YYYY"
          />
          </View>
          <View>
            <TouchableOpacity style={{backgroundColor: '#d15921',alignItems: 'center',height:50,borderRadius:10,
                                      margin:20,padding: 10,marginTop:30}}
                                      onPress={sendMessageToServer}
                                      >
              <Text style={{marginTop:5,color:'white',fontWeight: 'bold',marginTop:8}} >Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginStart:20,marginEnd:20}}>
            <Text>By continuing ,you agree to our  Digital Banking Agreement and have read our Online Policy.</Text>
          </View>
          </ScrollView>
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
      borderColor:'#d15921'
    },
  });
  
