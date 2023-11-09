import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const ChatRegister = () => {
  // Sample chat data, you would replace this with your actual data
  const [text, setText] = React.useState(''); // State to store text input value
  const [chatData, setChatData] = React.useState([
    { id: 1, text: 'Hello, how are you?', isSent: false },
    { id: 2, text: 'I am good. How about you?', isSent: true },
    { id: 3, text: 'Hello, how are you?', isSent: false },
    { id: 4, text: 'Hello, how are you?', isSent: false },
    { id: 5, text: 'I am good. How about you?', isSent: true },
    // Add more chat messages here...
  ]);

  const renderChatItem = ({ item }) => {
    const alignStyle = item.isSent ? 'flex-end' : 'flex-start';
    const backgroundColor = item.isSent ? '#DCF8C6' : 'white';

    return (
      <View style={[styles.messageContainer, { alignSelf: alignStyle, backgroundColor, marginTop: 10 }]}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const handleSendMessage = () => {
    if (text.trim() !== '') {
      const newMessage = { id: chatData.length + 1, text, isSent: true };
      setChatData([...chatData, newMessage]);
      setText(''); // Clear the input field after sending
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id.toString()} // Make sure to convert id to a string
        style={styles.container}
      />
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%', // Adjust this as needed
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  input: {
    flex: 1, // Take available space in the row
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    margin: 8,
  },
  inputContainer: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Vertically center children
    paddingHorizontal: 8,
    margin: 8,
  },
});

export default ChatRegister;
