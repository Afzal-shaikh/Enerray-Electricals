import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  ScrollView,
} from 'react-native';
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';
import auth from '@react-native-firebase/auth';

export default function Verification(props) {
  const fullName = props.navigation.getParam('fullName');
  const mobileNo = props.navigation.getParam('mobileNo');
  const email = props.navigation.getParam('email');
  const password = props.navigation.getParam('password');

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    console.log(confirmation)
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      callSignUpApi()
    } catch (error) {
      alert('Invalid code.');
    }
  }

  //useEffect
  useEffect(() => {
     signInWithPhoneNumber('+91' + mobileNo);
  }, []);

  return (
    <ScrollView style={globalStyles.scrollView}>
      <View style={globalStyles.container}>
        <WavyHeader />
        <Text style={globalStyles.text}>Mobile No.</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter Mobile No."
          value={mobileNo}
          editable={false}
        />

        <Text style={globalStyles.text}> OTP </Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter OTP"
          // secureTextEntry={true}
          onChangeText={text => setCode(text)}
        />

        <View style={globalStyles.button}>
          <Button style={globalStyles.button} title="Submit" 
            onPress = {()=>{confirmCode()}}
          />
        </View>
      </View>
    </ScrollView>
  );

  function callSignUpApi(){
    console.log("sign up api is called+++++++++++")
    let createUserApi = `http://www.rudvedatrading.com/api/createuser`
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_name:`${fullName}`,
            user_phone:`${mobileNo}`,
            user_mail:`${email}`,
            user_password:`${password}`
          }),
        };

        fetch(createUserApi , requestOptions)
          .then((response) => response.json())
          .then((json) => {
            // add code to save the success response in context
            console.log(json)
            if (json.success == "true") {
              props.navigation.replace("Category")
            }
          })
          .catch((error) => {
             console.log(error);//asl Divyaraj to make the api return json 
             alert(`${json.message}`)
          })
          .finally(() => {console.log("finally")});
  }
}
