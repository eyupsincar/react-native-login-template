import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


function Start() {
  return (
    <View>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
    </View>
  )
};


export default Start;
