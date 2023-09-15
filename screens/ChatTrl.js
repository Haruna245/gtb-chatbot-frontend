import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const chatMessage = [];
  //const axios = require('axios');

  const addMessage = async () => {
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),//chatData.length + 2,
      text: message,
      isSent: true,
    };

    setChatData([...chatData, newMessage]);
    chatMessage.push(newMessage);
    const newMessage1 = {
      id: Date.now().toString(),//chatData.length + 2,
      text: message,
      isSent: false,
    };
    //chatMessage.push(newMessage1);
    //console.log(chatMessage);
    //api call
    /* try {
        const apiUrl = 'http://127.0.0.1:8000/data'
        const response = axios.post(apiUrl,{body:message}, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
            console.log(response.data);
            setMessage(response.data);
            
          });
        
        
      } catch (error) {
        console.error(error);
      } */
    //end api
    setMessage('');
    try {
        const response = await sendMessageToServer(message);
        console.log(response)
        setResponseMessage(response);
        console.log("new message is "+response)
        const receivedMessage = {
          id: Date.now().toString(), 
          text: response,
          isSent: false,
        };
        //setChatData([...chatData, receivedMessage]);
        recievedMessage();
        chatMessage.push(receivedMessage);
        
        console.log(chatMessage)
      } catch (error) {
        console.error('Error sending message:', error);
      }

      //recievedMessage();
  };

   
  const recievedMessage = () => {
    console.log("recieved function called")
    if (responseMessage.trim() === '') {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      text: responseMessage,
      isSent: false,
    };

    setChatData([...chatData, newMessage]);
    chatMessage.push(newMessage);
    console.log(chatMessage);
    setMessage('');
  };
  const sendMessageToServer = async (message) => {
    // Replace with your server endpoint
    const response = await axios.post('http://127.0.0.1:8000/data', {body: message });
    return response.data; // Assuming the server responds with the message
  };

  

  return (
    <ImageBackground source={require('../images/imgbg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          
          {chatData.map((item) => (
            <View
              key={item.id}
              style={[
                styles.messageContainer,
                { alignSelf: item.isSent ? 'flex-end' : 'flex-start',backgroundColor : item.isSent ? '#DCF8C6' : 'white' },
              ]}
            >
              <Text>{item.text}</Text>
            </View>
          ))}
        </View>
        <View style={{flexDirection:'row'}}>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity onPress={recievedMessage} style={styles.iconContainer}>
          <Image
            style={{height:60,width:60,marginEnd:10,}}
            source={require('../images/tapChat.png')}
          />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={addMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  chatContainer: {
    flex: 1,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    //borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD8936',
    borderRadius: 30,
    padding: 5,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    paddingLeft: 20,
    //backgroundColor: '#F0F0F0',
    backgroundColor: '#FD8936',
    color:'white',
    //outline:'none',
    borderRadius: 20,
    width:220,
    height:60
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent:'center',
    width:55,
    margin:5,
    marginEnd:10
  },
  sendButtonText: {
    color: 'white',
  },
  iconContainer: {
    //padding: 10,
    borderRadius: 20,
    //backgroundColor: '#007AFF',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

export default ChatScreen;
