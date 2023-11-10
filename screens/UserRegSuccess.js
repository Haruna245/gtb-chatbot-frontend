import React from 'react';
import { View, ImageBackground, Button, StyleSheet,Image,Text, TouchableOpacity } from 'react-native';

function UserSuccess({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={styles.imageBackground}
      >
        <View style={styles.centeredView}>
        <Image
                  style={{ height: 150, width: 150 }}
                  source={require('../images/CheckMark.png')}
                /> 
        <Text>Account Created Successfully</Text>
          {/* <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          /> */}
          
        </View>
        <View style={{justifyContent:'flex-end',width:'70%',margin:'20px',
                      padding:'10px'  }}>
        <TouchableOpacity style={{backgroundColor:'#d15921',height:50,justifyContent:'center',alignItems:'center',borderRadius:10}}
        onPress={() => navigation.navigate('Home')}
        >
            <Text style={{color:'white'}}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserSuccess;
