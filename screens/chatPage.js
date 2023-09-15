import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function ChatScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.centeredView}>
        <View style={{flexDirection:'row'}}>

        <View style={{margin:10}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Back</Text>
        </TouchableOpacity>
        </View>
        <View style={{margin:10,position:'absolute',right:160}}>
        <Image
        style={styles.tinyLogo}
        source={require('../images/tapChat.png')}
        />
        </View >
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{backgroundColor:'grey',paddingStart:10,paddingEnd:10,borderRadius:5,marginBottom:5}}>Today</Text>
        </View>
        <View style={{borderBottomColor:'black',borderBottomWidth:1}} />
         <View style={{position:'absolute',bottom:1,left:10,right:10,marginBottom:10}}>
        <View style={{flexDirection:'row'}}>

          <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'center',
                         borderRadius:30,backgroundColor:'#FD8936'}}>
            <View>
                <TextInput 
                style={{height:64,width:220,padding:10,color:'white',fontSize:16,}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Ask any question......." />
            </View>
            <View>
            <TouchableOpacity>

            <Image
            style={{height:60,width:60,marginEnd:10,}}
            source={require('../images/tapChat.png')}
          />
            </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
          <TouchableOpacity style={{backgroundColor:'white',width:70,height:60,alignItems:'center',justifyContent:'center',marginStart:5}} onPress={() => navigation.goBack()}>
            <Text>send</Text>
          </TouchableOpacity>
          </View>
            </View>
          <View style={{justifyContent:'center',marginStart:20,fontSize:15,marginEnd:20,marginTop:10}}>
            <Text>Hi ,my name is chatbot GTBank, speak into the microphone or type and ask me anything!</Text>
          </View>
         </View>
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
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    padding: 10,
    width:50,
    height:40,
    borderRadius:10,
    marginBottom:5
  },
  tinyLogo: {
    //marginStart:30,
    width: 50,
    height: 50,
    display:'flex',
    justifyContent: 'center',
    
  }
});