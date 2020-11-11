import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import Box from '../components/box';

function Login() {
  return (

      <Box style={styles.container}>
      {/* header */}
          <Box style={styles.half}>
          <Text style={styles.textsStyle}>React-Native</Text>


          </Box>
      {/* body */}
          <Box style={styles.quarter}>
              <TouchableOpacity>
                <Text style={{color: "#8d9195",}}>Don't have an account? Sign up</Text>
              </TouchableOpacity>
            <TextInput
              textAlign={'center'}
              style={styles.input}
              placeholder="U S E R N A M E" />
            <TextInput
              textAlign={'center'}
              style={styles.input}
              placeholder="P A S S W O R D" />

              <Box mt={10}>
                <TouchableOpacity>
                  <Text  style={{color: "#8d9195", paddingLeft:210 }}>Forgot password?</Text>
                </TouchableOpacity>
              </Box>
          </Box>
      {/* foot */}
          <Box style={[styles.quarter2]}>
              <Box>
                <Image source={require('../icons/react.png')} />
              </Box>
              <Text style={{color: "#8d9195"}}>Designed And Produced By Eyyüp Sincar</Text>
          </Box>
      </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#f9f9f9',
  },

  half: {
     flex: 0.15,
     justifyContent: 'center',
     alignItems: 'center',
 },
 quarter: {
   flex: 0.70,
   justifyContent: 'center',
   alignItems: 'center',
 },
 quarter2: {
   flex: 0.15,
   justifyContent: 'center',
   alignItems: 'center',
 },
  input: {
    marginTop:15,
    backgroundColor: '#e4eaf1',
    width: 325,
    height:50,
    borderRadius: 10,
    fontSize: 19,
  },

  textsStyle: {
    fontSize: 35,
    opacity: 0.90,
    color: '#8d9195',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Login;
