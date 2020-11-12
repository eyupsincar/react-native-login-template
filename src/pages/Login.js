import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import Input from '../components/Input';
import Box from '../components/box';

function Login() {
  return (

      <Box
        flex={1}
        flexDirection="column"
        backgroundColor='#f9f9f9'>
      {/* header */}
          <Box
            flex={0.15}
            justifyContent='center'
            alignItems='center'>
            <Text style={styles.textsStyle}>React-Native</Text>
          </Box>
      {/* body */}
          <Box
            flex={0.70}
            justifyContent='center'
            alignItems='center'>
          {/* sign up */}
              <TouchableOpacity>
                <Text style={{color: "#8d9195",}}>Don't have an account? Sign up</Text>
              </TouchableOpacity>
          {/* username, password input */}
                <Input placeholder="U S E R N A M E" />
                <Input placeholder="P A S S W O R D" />
          {/* forgot password */}
              <Box mt={10}>
                <TouchableOpacity>
                  <Text  style={{color: "#8d9195", paddingLeft:210 }}>Forgot password?</Text>
                </TouchableOpacity>
              </Box>
          </Box>

      {/* foot */}
          <Box
            flex={0.15}
            justifyContent='center'
            alignItems='center'>
         {/* icon */}
              <Box>
                <Image source={require('../icons/react.png')} />
              </Box>
         {/* text */}
              <Text style={{color: "#8d9195"}}>Designed And Produced By Eyyüp Sincar</Text>
          </Box>
      </Box>
  )
};

const styles = StyleSheet.create({

  textsStyle: {
    fontSize: 35,
    opacity: 0.90,
    color: '#8d9195',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
