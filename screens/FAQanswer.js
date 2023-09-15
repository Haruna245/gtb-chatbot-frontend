import React from 'react';
import { View, ImageBackground, Button, StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

function FAQanswer({ navigation }) {
    const route = useRoute();
    const question = route.params.text;
    const answer = route.params.answer;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../images/imgbg2.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={{marginTop:10,width:'100%',flexDirection:'row' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={{alignItems:'center',justifyContent:'center',width:'70%',marginTop:20}}>
            <Text style={{fontSize:20,color:'#FD8936',marginStart:10}}>Frequently Asked Question</Text>
          </View>
          </View>
          <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5}} />
        
        <View style={styles.centeredView}>
          <Text style={{fontWeight:'bold'}}>{question}</Text>
          <Text>{answer}</Text>

          
        </View>
        <View style={{justifyContent:'flex-end',alignItems:'center'}}>
            <TouchableOpacity>
                <Text>Does this Answer your Question?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',marginBottom:20}}>
            <TouchableOpacity>
            <Image
          style={{width:40,height:40}}
          source={require('../images/Good Quality.png')}
          />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
          style={{width:40,height:40,marginStart:20}}
          source={require('../images/Unlike.png')}
          />
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
    margin:5
    /* justifyContent: 'center',
    alignItems: 'center', */
  },
  button: {
    alignItems: 'flex-start',
    //backgroundColor: '#FEFEFE',
    justifyContent:'center',
    //padding: 5,
    width:'15%',
    height:40,
    borderRadius:10,
    //marginTop:5,
    //marginBottom:5
  },
});

export default FAQanswer;
