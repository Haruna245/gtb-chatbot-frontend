import React, { useState,useRef,useEffect  } from 'react';
import { View, ImageBackground, Button, StyleSheet,Text,TouchableOpacity,ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

function VoiceMsg({ navigation }) {
    const route = useRoute();
    const [responseMessage, setResponseMessage] = React.useState('Waiting for responds....');

    const message = route.params.message;
    const scrollViewRef = useRef();
    
    useEffect(() => {
      // Define the URL of your backend API endpoint
      const backendUrl = 'https://627d-154-160-22-32.ngrok-free.app/chat'; // Replace with your actual backend URL
  
      // Define the message to send to the backend
      const messageToSend = route.params.message;
  
      // Make a POST request to the backend using Axios
      axios
        .post(backendUrl, { body: messageToSend })
        .then((response) => {
          // Handle the response from the backend here
          const responseData = response.data;
          console.log(responseData)
          //setResponseMessage(responseData.message); // Update the response message state
          setResponseMessage(responseData);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error sending message:', error);
        });
    }, []); // This effect will run once when the component mounts



  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={{marginTop:30,margin:10,width:'100%',flexDirection:'row' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={{alignItems:'center',justifyContent:'center',width:'60%',marginTop:20}}>
            <Text style={{fontSize:20}}>Voice Chat</Text>
          </View>
          </View>
          <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5}} />
        
        <View style={styles.centeredView}>
        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContentContainer}
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
            <View style={{margin:10,maxWidth: '80%',
                        marginVertical: 8,
                        padding: 10,
                        borderRadius: 8,
                        //borderWidth: 1,
                        borderColor: '#E0E0E0',backgroundColor:'#DCF8C6',alignSelf:'flex-start'}}>
            <Text>{message}</Text>

            </View>
            <View style={{margin:10,maxWidth: '80%',
                        marginVertical: 8,
                        padding: 10,
                        borderRadius: 8,
                        //borderWidth: 1,
                        borderColor: '#E0E0E0',backgroundColor:'white',alignSelf:'flex-end'}}>
                            <Text>{responseMessage}</Text>
                        </View>
            </ScrollView>
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
    //backgroundColor: '#FEFEFE',
    justifyContent:'center',
    width:'15%',
    height:40,
    borderRadius:10,
   
  },
});

export default VoiceMsg;
