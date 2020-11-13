import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import Input from '../components/Input';
import Box from '../components/Box';
import Button from '../components/Button';

function Login({navigation}) {

  return (

      <Box
        flex={1}
        flexDirection="column"
        backgroundColor='#f9f9f9'>

          <Box
            flex={0.35}
            justifyContent='center'
            alignItems='center'>
              <Text style={{fontSize: 35 ,opacity: 0.90, color: '#8d9195',}}>React-Native</Text>
          </Box>

          <Box
            flex={0.50}
            justifyContent='center'
            alignItems='center'>

              <TouchableOpacity>
                <Text style={{color: "#8d9195",}}>Don't have an account? Sign up </Text>
              </TouchableOpacity>

                <Input placeholder="U S E R N A M E" />
                <Input placeholder="P A S S W O R D" />

              <Box mt={10}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Forgot')}>
                  <Text  style={{color: "#8d9195", paddingLeft:210 }}>Forgot password?</Text>
                </TouchableOpacity>
              </Box>
              <Box>
                <Button mt={10}>
                  <Text onPress={() => {
                    navigation.setParam('user', {data: "eyyup"})
                  }} style={{color: '#8d9195', fontSize: 17}}>L O G İ N</Text>
                </Button>
              </Box>
          </Box>


          <Box
            flex={0.15}
            justifyContent='center'
            alignItems='center'>

              <Box>
                <Image source={require('../icons/react.png')} />
              </Box>

              <Text style={{color: "#8d9195"}}>Designed And Produced By Eyyüp Sincar</Text>
          </Box>
      </Box>
  )
};

export default Login;
