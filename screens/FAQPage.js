import React from 'react';
import { View, ImageBackground, Button, StyleSheet,TouchableOpacity,Text,TextInput,
    FlatList,Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function FAQpage({ navigation }) {
    const [text, onChangeText] = React.useState('');

    const FAQsData = [
        {  text: 'How do i find GTBank near me?',
        answer:'You can use the ATM/Branch Locator link on our website to find an ATM or branch near you. You will also see the address, phone number, hours and driving directions. We have branches and more than 2,000 ATMs throughout the whole nation.' },
        {  text: 'How can i contact you by telephone?',
        answer:'You can use the ATM/Branch Locator link on our website to find an ATM or branch near you. You will also see the address, phone number, hours and driving directions. We have branches and more than 2,000 ATMs throughout the whole nation.'},
        {  text: 'How do i change my address online ?',
        answer:'You can use the ATM/Branch Locator link on our website to find an ATM or branch near you. You will also see the address, phone number, hours and driving directions. We have branches and more than 2,000 ATMs throughout the whole nation.'},
        {  text: 'Are you open on holidays?',
        answer:'You can use the ATM/Branch Locator link on our website to find an ATM or branch near you. You will also see the address, phone number, hours and driving directions. We have branches and more than 2,000 ATMs throughout the whole nation.'},
        {  text: 'Can i make auto-loan payment online?',
        answer:'You can use the ATM/Branch Locator link on our website to find an ATM or branch near you. You will also see the address, phone number, hours and driving directions. We have branches and more than 2,000 ATMs throughout the whole nation.'},
        // Add more chat messages here...
      ];
    
      const renderChatItem = ({ item }) => {
        //const alignStyle = item.isSent ? 'flex-end' : 'flex-start';
        //const backgroundColor = item.isSent ? '#DCF8C6' : 'white';
    
        return (
          <TouchableOpacity style={{backgroundColor:'white',height:50,justifyContent:'center',padding:10,borderBottomColor:'grey',borderBottomWidth:1}}
            onPress={()=>navigation.navigate('FAQanswer',{text:item.text,answer:item.answer})}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        );
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
          <View style={{alignItems:'center',justifyContent:'center',width:'70%',marginTop:20}}>
            <Text style={{fontSize:20,color:'#FD8936',marginStart:10}}>Frequently Asked Question</Text>
          </View>
          </View>
          <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5}} />
        
        <View style={styles.centeredView}>
        <View style={{backgroundColor:'#FD8936',height:60,justifyContent:'center',padding:10}}>
            <TextInput 
                style={{height:40,width:'100%',padding:10,color:'black',fontSize:12,backgroundColor:'white',borderRadius:5}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search for Answers......." />
            </View>
            <FlatList
                data={FAQsData}
                renderItem={renderChatItem}
                keyExtractor={(item) => item.id}
                style={{}}
                />
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
    /* justifyContent: 'center',
    alignItems: 'center', */
  },
  button: {
    alignItems: 'flex-start',
    //backgroundColor: '#FEFEFE',
    justifyContent:'center',
    //padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
   // marginTop:5,
    //marginBottom:5
  },
});

export default FAQpage;
