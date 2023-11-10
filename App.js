import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/Profile';
import NotificationsScreen from './screens/OtpProceed';
import SettingsScreen from './screens/EnterOtp';
import PasswordReset from './screens/passwordResetsc';
import ChatWelcome from './screens/ChatLandingPage';
import ChatScreen from './screens/chatPage';
import ChatScreen1 from './screens/ChatTrl';
import ChatScreen2 from './screens/dchartTrl';
import AudioRecorder from './screens/VoiceRec';
import Satisfy from './screens/SatisfyPage';
import SatisfyYes from './screens/SatisfyYes';
import SatisfyNo from './screens/SatisfyNo';
import CustomerService from './screens/CustomerService';
import FeedbackScreen from './screens/feedback';
import FAQpage from './screens/FAQPage';
import Location from './screens/Location';
import FAQanswer from './screens/FAQanswer';
import VoiceMsg from './screens/VoiceMsg';
import FeedbackSuccess from './screens/feedbackSuccess';
import Map from './screens/map';
import ChatRegister from './screens/ChatRegister';
import UserReg from './screens/userReg';
import UserSuccess from './screens/UserRegSuccess';
/* function ChatScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
  <Stack.Screen name="ChatScreen2" component={ChatScreen2} />
      <Stack.Screen name="ChatScreen1" component={ChatScreen1} />
}  */

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{  headerTitle: false,headerShown:false }}>

      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="UserReg" component={UserReg}  />
      <Stack.Screen name="UserSuccess" component={UserSuccess}  />
      <Stack.Screen name="ChatRegister" component={ChatRegister}  />
      <Stack.Screen name="Location" component={Location}  />
      <Stack.Screen name="Map" component={Map}  />
      <Stack.Screen name="FAQpage" component={FAQpage}  />
      <Stack.Screen name="FAQanswer" component={FAQanswer}  />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen}  />
      <Stack.Screen name="FeedbackSuccess" component={FeedbackSuccess}  />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="chatWelcome" component={ChatWelcome} />
      <Stack.Screen name="ChatScreen2" component={ChatScreen2} />
      <Stack.Screen name="VoiceRec" component={AudioRecorder} />
      <Stack.Screen name="VoiceMsg" component={VoiceMsg} />
      <Stack.Screen name="Satisfy" component={Satisfy} />
      <Stack.Screen name="SatisfyYes" component={SatisfyYes} />
      <Stack.Screen name="SatisfyNo" component={SatisfyNo} />
      <Stack.Screen name="CustomerService" component={CustomerService} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
} 
