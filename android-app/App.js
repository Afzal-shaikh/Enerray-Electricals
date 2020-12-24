// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AppNavigator from './navigation/navigation';

// Fix This -  remove all the redundant imports

import Login from "./screens/LogIn";
import Registration from "./screens/Registration";
import Verification from "./screens/Verification";
import Category from "./screens/Category";
import Products from "./screens/Products";
import Description from "./screens/Description";

export default function App() {
  return (
   
   <AppNavigator />
  

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight + 4) : 0,
  },
});
