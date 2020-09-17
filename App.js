import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button 
} from 'react-native';
import MyButton from './componensts/MyButton.js'

export default function App() {
  const [input, setInput] = useState('')
  const [color, setColor] = useState('')
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://s359.kapook.com/r/600/auto/pagebuilder/5321988a-8ea2-419f-94e1-05bb4d46f450.jpg'}}
      style={styles.logo}
      />
      <Text style={styles.title}>Michele Morone</Text>
      <TextInput 
        value={input} 
        onChangeText={(text) => { setInput(text)}}
        placeholder = "Input here" 
        style={styles.input}
      />
      <Text style={{ fontSize: 18, marginTop: 20, color: color }}>
        {input}
      </Text>
      <View style={styles.buttonLayout}>
        <MyButton title="Red" color="red" onChangeColor={(color) => { setColor(color) }}/>
        <MyButton title="Blue" color="blue" onChangeColor={(color) => { setColor(color) }}/>
        <MyButton title="Green" color="green" onChangeColor={(color) => { setColor(color) }}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  logo:{
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
  },
  buttonLayout: {
    flexDirection: 'row',
    margin: 20
  }
});