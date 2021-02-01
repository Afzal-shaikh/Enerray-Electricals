import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    (async () => {

      try {
        const value = await AsyncStorage.getItem('@user_name')
        if(value !== null) {
          // value previously stored
          console.log("value stored")
          props.navigation.replace('Category');
        }
      } catch(e) {
        // error reading value
        console.log("value not stored")
      }
      
    })();
}, []);

  return (
    <ScrollView style={globalStyles.scrollView}>
      <View style={globalStyles.container}>
        <WavyHeader />
        <Text style={globalStyles.text}>User Name</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter UserName"
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <Text style={globalStyles.text}> Password </Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <View style={globalStyles.button}>
          <Button
            style={globalStyles.button}
            title="Submit"
            onPress={() => {
              console.log(userName, password);
              // props.navigation.replace('Category');
              callLoginApi();
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text>
            Need an account ?
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace('Registration');
              }}>
              <Text style={globalStyles.textLink}> Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );

  function callLoginApi() {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailReg.test(userName) && password != '') {
      let loginUrl = `http://www.rudvedatrading.com/api/userlogin`;
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_name: `${userName}`,
          user_password: `${password}`,
        }),
      };

      fetch(loginUrl, requestOptions)
        .then((response) => response.json())
        .then(async (json) => {
          console.log(json)
          if (json.success == 'true'){
          try {
            await AsyncStorage.setItem('@user_name', json.user.user_name)
            await AsyncStorage.setItem('@user_mail', json.user.user_mail)
            await AsyncStorage.setItem('@user_phone', json.user.user_phone)
            props.navigation.replace('Category');
          } catch (e) {
            // saving error
            console.log("saving error")
          }
          }
          
        })
        .catch((error) => {
          console.log(error); //asl Divyaraj to make the api return json
          alert("Please enter correct 'User email' and 'Password'");
        })
        .finally(() => {
          console.log('finally');
        });
    } else {
      alert("Please enter correct 'User email' and 'Password'");
      console.log(emailReg.test(userName));
    }
  }
}
