import React from 'react';
import { View, ImageBackground, Button, StyleSheet,TouchableOpacity,Text,TextInput,
    FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Location({ navigation }) {
    const [text, onChangeText] = React.useState('');

    const FAQsData = [
        { id:1, name: 'GTBank | Branch',location:'East Legon , Bathure St',state:'0547867153,Closed' },
        { id:2, name: 'GTBank | ATM Legon Campus',location:'Central Cafetaria',state:'Open 24 hours' },
        { id:3, name: 'GTBank Labone| Branch',location:'Accra',state:'Opens Soon ' },
        { id:4, name: 'GTBank | ATM',location:'One Airport Square',state:'Opens 24 hours' },
        // Add more chat messages here...
      ];
    
      const renderChatItem = ({ item }) => {
        //const alignStyle = item.isSent ? 'flex-end' : 'flex-start';
        //const backgroundColor = item.isSent ? '#DCF8C6' : 'white';
    
        return (
          <TouchableOpacity style={{backgroundColor:'white',height:70,justifyContent:'center',padding:10,borderBottomColor:'#FD8936',borderBottomWidth:1}}>
            <Text>{item.name}</Text>
            <Text>{item.location}</Text>
            <Text>{item.state}</Text>
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
          <View style={{alignItems:'center',justifyContent:'center',width:'60%',marginTop:20}}>
            <Text style={{fontSize:20,color:'#FD8936',marginStart:10}}>Location</Text>
          </View>
          </View>
          <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:5}} />
        
        <View style={styles.centeredView}>
        <View style={{backgroundColor:'#FD8936',height:60,justifyContent:'center',padding:10}}>
            <TextInput 
                style={{height:40,width:'100%',padding:10,color:'black',fontSize:12,backgroundColor:'white',borderRadius:5}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search......." />
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
    justifyContent:'center',
    //backgroundColor: '#FEFEFE',
    //padding: 10,
    width:'15%',
    height:40,
    borderRadius:10,
    //marginTop:5,
    //marginBottom:5
  },
});

export default Location;
