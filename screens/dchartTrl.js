import React, { useState,useRef,useEffect  } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image,Animated, Easing, 
Alert,ScrollView } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';
import { Feather,AntDesign } from '@expo/vector-icons';


const ChatScreen2 = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [chatData, setChatData] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [sound, setSound] = React.useState();
    const [recording, setRecording] = React.useState();
    const [recSound, setRecSound] = React.useState();
    const [isListening, setIsListening] = React.useState(false);
    
    const receivedMessageOpacity = new Animated.Value(0);
    const micButtonScale = useRef(new Animated.Value(1)).current;
    const scrollViewRef = useRef();//scroll modified
    useEffect(() => {
      //setIsListening(true);
        // Trigger the received message animation when a response is received
        if (responseMessage) {
          Animated.timing(receivedMessageOpacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false,
          }).start();
    
          // After a delay, reset the received message opacity and update the chatData
          setTimeout(() => {
            Animated.timing(receivedMessageOpacity, {
              toValue: 0,
              duration: 500,
              easing: Easing.ease,
              useNativeDriver: false,
            }).start(() => {
              // Update chatData by replacing the temporary message with the actual response
              const receivedMessage = {
                id: Date.now().toString(),
                text: responseMessage,
                isSent: false,
              };
              setChatData((prevChatData) => {
                const updatedChatData = [...prevChatData];
                const index = updatedChatData.findIndex((item) => item.text === 'Waiting for response...');
                if (index !== -1) {
                  updatedChatData[index] = receivedMessage;
                }
                return updatedChatData;
              });
              setIsListening(false);
            });
          }, 1500); // Adjust the delay as needed
        }
      }, [responseMessage]);

    const addMessage = async () => {
      if (message.trim() === '') {
        return;
      }
  
      const newMessage = {
        id: Date.now().toString(),
        text: message,
        isSent: true,
      };
  
      // Update chatData by appending the new sent message
      setChatData((prevChatData) => [...prevChatData, newMessage]);
  
      setMessage('');
  
      try {
        const response = await sendMessageToServer(message);
        setResponseMessage(response);
  
        const receivedMessage = {
          id: Date.now().toString(),
          text: response,
          isSent: false,
        };
  
        // Update chatData by appending the new received message
        setChatData((prevChatData) => [...prevChatData, receivedMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };
  
    const sendMessageToServer = async (message) => {
      const response = await axios.post('https://a436-154-160-5-95.ngrok-free.app/chat', { body: message });
      return response.data; // Assuming the server responds with the message
    };
  

    //Codes for the Recording
    async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
      Animated.timing(micButtonScale, {
        toValue: 1, // You can adjust the scale value as needed
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();

      console.log('Recording started ');
      alert('Recording started click on the mic button to stop the recording');
      //ButtonAlert();
    } catch (err) {
      console.error('Failed to start recording ', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    try {
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);
      setRecSound(uri);
      setRecording(null); // Clear the recording object
      ButtonAlert();
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  }

   async function playSound() {
    console.log('Playing Sound');
    if (recSound) {
      const { sound } = await Audio.Sound.createAsync({ uri: recSound });
      setSound(sound);
      await sound.playAsync();
    } else {
      console.log('No recorded sound to play.');
    }
  }


  const ButtonAlert = () =>
    Alert.alert('Message', 'Recording Stopped', [
      {
        text: 'Play Recording',
        onPress: () => playSound(),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    //end of function margin:10,
    //<View style={{flexDirection:'row',alignItems:'space-around',justifyContent:'space-around',width:'100%',
    //margin:5 }}> //</View>
    return (
      <ImageBackground source={require('../images/imgbg2.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
        <View style={{flexDirection:'row',}}>

          <View style={{marginTop:50,width:'100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View>
          </View>
          
          <View style={{position:'absolute',left:'45%',top:45 }}>
          <Image
          style={styles.tinyLogo}
          source={require('../images/tapChat.png')}
          />
          </View>
          <TouchableOpacity style={{position:'absolute',right:'10%',top:60 }} onPress={() => navigation.navigate('Satisfy')}>
            <Text>Satisfied?</Text>
          </TouchableOpacity>

          <View style={styles.chatContainer}>
          <View style={{borderBottomColor:'grey',borderBottomWidth:1}} />
          <View style={{alignItems:'flex-Start'}}>
          <View style={{backgroundColor:'white',maxWidth: '80%',
      marginVertical: 8,
      padding: 10,
      borderRadius: 8,
      //borderWidth: 1,
      borderColor: '#E0E0E0',}}>
            <Text>Hello, Welcome to your customer Service Chatbot.
              How may i help you today?
            </Text>
          </View>
          </View>
          
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
            {chatData.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.messageContainer,
                  { alignSelf: item.isSent ? 'flex-end' : 'flex-start', backgroundColor: item.isSent ? '#DCF8C6' : 'white' },
                ]}
              >
                <Text>{item.text}</Text>
              </View>
            ))}
            <Animated.View
            style={[
              styles.messageContainer,
              {
                alignSelf: 'flex-start',
                backgroundColor: 'white',
                opacity: receivedMessageOpacity,
              },
            ]}
          >
            <Text>Waiting for response...</Text>
          </Animated.View>
          </ScrollView>
          </View>
          <View style={{ flexDirection: 'row',margin:10 ,marginBottom:35,}}>
            <View style={styles.inputContainer}>
              <TextInput
              editable
              multiline
                style={styles.textInput}
                placeholder="Type your message...."
                value={message}
                onChangeText={(text) => setMessage(text)}
                textAlignVertical="center"
              />
              <TouchableOpacity onPress={() => navigation.navigate('VoiceRec')} style={styles.iconContainer}>
                <Animated.View
              style={[
                styles.iconContainer,
                { transform: [{ scale: micButtonScale }] } // Apply scale animation recording ? stopRecording : startRecording
              ]}
            >
                <Image
                  style={{ height: 60, width: 60, marginEnd: 10 }}
                  source={require('../images/smallMic.png')}
                />
                </Animated.View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={addMessage} style={styles.sendButton}>
              {/* <Text style={styles.sendButtonText}>Send</Text> */}
              {/* <Image
                  style={{ height: 20, width: 20,  }}
                  source={require('../images/send-fill.svg')}
                /> */}
                <Feather name="send" size={25} color="black" />
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
      
    },
    chatContainer: {
      flex: 1,
      margin:5,
      marginTop:20,
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
      width:'80%',
      padding: 5,
      //marginBottom:30,
    },
    textInput: {
      flex: 1,
      marginRight: 10,
      padding:20,
      paddingLeft: 20,
      //backgroundColor: '#F0F0F0',
      backgroundColor: '#FD8936',
      color:'white',
      //outline:'none',
      borderRadius: 20,
      width:220,
      height:60,
      paddingTop:23,
      fontWeight:'bold'
    },
    sendButton: {
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
      //opacity:0.5,
      alignItems: 'center',
      justifyContent:'center',
      width:60,
      margin:5,
      alignItems:'center',
      justifyContent:'center',
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
    button: {
      alignItems: 'flex-start',
      justifyContent:'center',
      //backgroundColor: '#FEFEFE',
      //padding: 10,
      width:60,
      height:40,
      borderRadius:10,
     // marginBottom:5,
      //marginStart:5
    },
    tinyLogo: {
      //marginStart:30,
      width: 50,
      height: 50,
      display:'flex',
      justifyContent: 'center',
      
    }
  });
  
  export default ChatScreen2;