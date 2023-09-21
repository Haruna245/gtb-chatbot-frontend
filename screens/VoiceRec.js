import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,Image,ImageBackground,ActivityIndicator,Modal } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function AudioRecorder({ navigation }) {
  const [sound, setSound] = React.useState();
  const [recording, setRecording] = React.useState();
  const [recSound, setRecSound] = React.useState();
  const [genText, setgenText] = React.useState('Testing');
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

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
    } catch (err) {
      console.error('Failed to start recording', err);
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
      alert('No recorded sound to play.');
    }
  }

  React.useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  //Api call
  const sendMessageToServer = async (recSound) => {
    setModalVisible(true);
    setIsLoading(true);
    if (recSound) {
      const apiUrl ='https://79a9-154-160-18-189.ngrok-free.app/uploadfile/';

      const formData = new FormData();
      formData.append('file', {
        uri: recSound,
        //name: "sound",
        //type: 'multipart/form-data',
        name: "sound.m4a",
        type: "audio/m4a",
        //type: "image/jpg" 
      });

      try {
        const response = await axios.post(apiUrl,formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        

        
        console.log(response.data)
        
        setgenText(response.data)
        
        
        
      } catch (error) {
        console.error(error);
      }
      finally {
        setIsLoading(false); // Set loading back to false after the API call completes
        setModalVisible(false);
      }
    } 
    // Assuming the server responds with the message

     
  };


  // Function to handle image upload to API
  const handleImageUpload = async () => {
    if (recSound) {
      const apiUrl = 'http://127.0.0.1:8000/upload-voice';

      const formData = new FormData();
      formData.append('data', {
        uri: recSound,
        name: "sound.m4a",
        type: "audio/m4a" 
      });

      try {
        const response = await axios.post(apiUrl,formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        

        // Assuming the API response contains the uploaded image URL
        console.log(response.data)
        //setUploadedImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error(error);
      }
    } else{
      console.log('no data')
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
       <View style={{marginTop:20,width:'100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          </View> 
      {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> 
      <Button title="Play Sound" onPress={playSound} />
      <Button title="process voice" onPress={playSound} />
      */}
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

      <TouchableOpacity onPress={recording ? stopRecording : startRecording} 
      style={{backgroundColor:'#FD8936',borderRadius:50,alignItems:'center',height:100,width:100,justifyContent:'center',}}>
                
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require('../images/smallMic.png')}
                />
                
      </TouchableOpacity>
      {recording ? (
        <Text>recording in progress....</Text>
      ) : (
        <Text>Tap to start recording</Text>
      )}
      
      <View style={{flexDirection:'row',margin:10,width:'100%',alignItems:'center',justifyContent:'center'}}>
      {recording ? (
        <Text></Text>
      ) : (
        
        <><TouchableOpacity style={styles.ctrlBtn} onPress={playSound}><Text>Play Sound</Text></TouchableOpacity>
        
        <TouchableOpacity style={styles.ctrlBtn} onPress={()=>sendMessageToServer(recSound)} ><Text>Generate Text</Text></TouchableOpacity></>
      )}
      {/* {isLoading && (
          <ActivityIndicator size="small" color="#FD8936" />
        )} */}
      
      </View>
        
      
      </View>
      <View style={{marginStart:10}}>
      <Text>Generated Text</Text>
      </View>
      <View style={{backgroundColor:'white',width:'90%',height:70,margin:10,marginBottom:5,borderRadius:10,padding:10}}>
      <Text>{genText} </Text>
      </View>
      <View>
      <TouchableOpacity style={{backgroundColor:'#FD8936',margin:10,height:50,borderRadius:10,alignItems:'center',justifyContent:'center'}} 
      onPress={() => navigation.navigate('VoiceMsg',{message:genText})}>
        <Text style={{color:'white'}}>Send Text</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#FD8936" />
            <Text>Generating Text...</Text>
          </View>
        </View>
      </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    
  },
  imageBackground: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  ctrlBtn:{
    backgroundColor:'white',
    width:120,
    height:40,
    margin:10,borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    alignItems: 'flex-start',
    justifyContent:'center',
    //backgroundColor: '#FEFEFE',
    //padding: 10,
    width:60,
    height:40,
    borderRadius:10,
    //marginBottom:5,
    //marginStart:5
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
