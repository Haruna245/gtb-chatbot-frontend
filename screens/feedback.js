import React, { useState,useRef,useEffect  } from 'react';
import { View, ImageBackground, Button, StyleSheet,TouchableOpacity,Text,TextInput,ScrollView,TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

function FeedbackScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [rate, SetRate] = React.useState();
  const [complete, Setcomplete] = React.useState();
  const scrollViewRef = useRef();
  const [buttonColor, setButtonColor] = useState('black');
  const [textbuttonColor, setTextButtonColor] = useState('black');

  const SendFeedBack = async () => {
    const response = await axios.post('https://xrvk8977-8000.euw.devtunnels.ms/Feedback', { rate:rate,complete:complete,feedbackText:text} );
    //return response.data; // Assuming the server responds with the message
    if(response.status == 200){
      onChangeText('')
      navigation.navigate('FeedbackSuccess')
    }
  };
  
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
            <Text style={{fontSize:20}}>FEEDBACK</Text>
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
          <View style={{marginTop:30,margin:10}}>
            <View>

            <Text>
            1.Overall, how satisfied are you with the GT Bank Mobile Banking App? *
            </Text>
            </View>
            <View style={{flexDirection:'row',marginTop:5}}>
            <TouchableOpacity style={rate === '1' ? styles.buttonPressed : styles.button1}
            onPress={() => {
              SetRate('1');
              setButtonColor('white'); // Change color to white on press
            }}>
            <Text style={{color:'black'}}>1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={rate === '2' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('2');setButtonColor('white');}}>
            <Text style={{color:'black'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '3' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('3');setButtonColor('white');}}>
            <Text style={{color:'black'}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '4' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('4');setButtonColor('white');}}>
            <Text style={{color:'black'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '5' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('5');setButtonColor('white');}}>
            <Text style={{color:'black'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '6' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('6');setButtonColor('white');}}>
            <Text style={{color:'black'}}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '7' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('7');setButtonColor('white');}}>
            <Text style={{color:'black'}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '8' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('8');setButtonColor('white');}}>
            <Text style={{color:'black'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '9' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('9');setButtonColor('white');}}>
            <Text style={{color:'black'}}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={rate === '10' ? styles.buttonPressed : styles.button1} onPress={()=>{SetRate('10');setButtonColor('white');}}>
            <Text style={{color:'black'}}>10</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:10,padding:20}}>
              <Text>
              Please tell us the reasons for your score.
              For your security, please do not submit any personal or account information.
              </Text>
            </View>
            
            <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5,marginLeft:0}} />  
            <View style={{marginTop:10,padding:20}}>
              <Text>
                2.Were you able to complete everything you needed to today with the GTBank Mobile Banking App?
                
              </Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={complete === 'Yes' ? styles.buttonPressed2 : styles.button2} onPress={()=>{Setcomplete('Yes');setButtonColor('white');}}>
                <Text style={{color:'black'}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={complete === 'No' ? styles.buttonPressed2 : styles.button2} onPress={()=>{Setcomplete('No');setButtonColor('white');}}>
                <Text style={{color:'black'}}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={complete === 'Not Yet' ? styles.buttonPressed2 : styles.button2} onPress={()=>{Setcomplete('Not Yet');setButtonColor('white');}}>
                <Text style={{color:'black',padding:5}}>Not Yet</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:2,padding:20}}>
              <Text>
              3.Is there anything else you would like to share with us?
              </Text>
            </View>
            <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5,marginLeft:0}} />
            <View style={{backgroundColor:'#FD8936',borderRadius:10}}>
            <TextInput 
                style={{height:50,width:'100%',padding:10,color:'white',fontSize:16,}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type here......." />
            </View>
            <View style={{margin:20}}>
              <Text>
              For your security, please do not submit any personal or account information.
Your responses will be used in accordance with our Online
Privacy Policy.
              </Text>
            </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#FD8936',borderColor:'#FD8936',borderWidth:1,width:'50%',height:50,alignItems:'center',justifyContent:'center',
                                         borderRadius:10 }} onPress={SendFeedBack}>
                <Text style={{color:'white'}}>Submit feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
          {/* <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          /> */}
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
    /* justifyContent: 'center',*/
    alignItems: 'center', 
  },
  button: {
    alignItems: 'flex-start',
    justifyContent:'center',
    //backgroundColor: '#FEFEFE',
    //padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
    marginTop:5,
    //marginBottom:5
  },
  button1:{
    width:22,
    height:22,
    //backgroundColor:'#FD8936',
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    margin:5
  },
  button2:{
    backgroundColor:'white',
    width:62,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:10
  },
  buttonPressed: {
    // your styles when the button is pressed
    backgroundColor: '#FD8936',
    padding: 10,
    width:22,
    height:22,
    borderRadius:20,
    margin:5,
    
    // other styles...
  },
  buttonPressed2:{
    backgroundColor:'#FD8936',
    width:62,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:10
  },
});

export default FeedbackScreen;
