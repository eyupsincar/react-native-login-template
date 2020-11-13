import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Box from './Box';


function Input() {
  return(
    <Box>
      <TextInput
        textAlign={'center'}
        marginTop={15}
        backgroundColor="#e4eaf1"
        width={325}
        height={50}
        borderRadius={10}
        fontSize={19} />
    </Box>
  )
}


export default Input;
