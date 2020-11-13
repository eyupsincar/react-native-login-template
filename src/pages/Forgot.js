import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

function Forgot({navigation}) {
  console.log(navigation.getParam('data'))
  return (
    <View>
      <Text>Forgot.js dosyasındasın</Text>
    </View>
  )
};

export default Forgot;
