import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

function Login() {
  return (
    <View style={styles.container}>

    {/*




      */}

      <View style={styles.container}>
      {/* header */}
          <View style={styles.half}>

          </View>
      {/* body */}
          <View style={styles.quarter}>
            <TextInput style={styles.input}
              placeholder="U S E R N A M E"
            />
            <TextInput style={styles.input}
              placeholder="P A S S W O R D"
            />
            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.textStyles}>Register</Text>
            </TouchableOpacity>
          </View>
      {/* foot */}
          <View style={[styles.quarter2]}>
              <View>
                <Image source={require('../icons/react.png')} />
              </View>
              <Text>Designed And Produced By Eyyüp Sincar</Text>
          </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  half: {
     flex: 0.15, // veya .5
     backgroundColor: '#f9f9f9',
 },
 quarter: {
   flex: 0.70, // veya .25
   backgroundColor: '#f9f9f9',
   justifyContent: 'center',
   alignItems: 'center',
 },
 quarter2: {
   flex: 0.15, // veya .25
   backgroundColor: '#f9f9f9',
   justifyContent: 'center',
   alignItems: 'center',
 },
  input: {
    marginTop:15,
    backgroundColor: '#cef0fa',
    width: 325,
    height:50,
    borderRadius: 10,
    fontSize: 25,
    paddingLeft:75,
  },

  textsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
