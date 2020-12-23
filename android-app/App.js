import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LogIn';
import Registration from './screens/Registration';
import Verification from './screens/Verification';
import Category from './screens/Category';
import Products from './screens/Products';
import Description from './screens/Description';

export default function App() {
  return (
    <View style={styles.container}>
    
     {/* <Login/> */}
     {/* <Registration/> */}
     {/* <Verification/> */}
     {/* <Category/> */}
     <Products/>
     {/* <Description/> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
