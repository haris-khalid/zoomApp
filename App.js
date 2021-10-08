
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screen/Home';

import Navigation from './Navigation/Navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
     {/* <Navigation/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
