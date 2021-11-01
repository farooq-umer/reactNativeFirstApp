import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button } from 'react-native';
import Home from './screens/Home';

export default function App () {
  const [name, setName] = useState({ firstName: 'Umer', lastName: 'Farooq' });
  const [counter, setCounter] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const onClickBtn = () => {
    // setName({ firstName: 'Samreen', lastName: 'Farooq' });
    setCounter(counter + 5);
    setClickCount(clickCount + 1);
  }

  const onClickResetBtn = () => {
    setCounter(0);
    setClickCount(0);
  }

  return <Home />

  // return (
  //   <View style={styles.container}>
  //     <Text>Counter: {counter}</Text>
  //     <Button title='Update Counter!' onPress={onClickBtn} ></Button>
  //     <Text>You clicked {clickCount} times</Text>
  //     <Button title='Reset Counter' onPress={onClickResetBtn} ></Button>

  //     {/* <Button title='Open Youtube!' onPress={() => { Linking.openURL('https://youtube.com') }} ></Button> */}
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
