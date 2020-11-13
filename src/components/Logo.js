import React from "react";
import "react-native-gesture-handler";
import { Image } from "react-native";

import Box from './Box';


function Input() {
  return(
    <Box>
      <Image source={require('../icons/react.png')} />
    </Box>
  )
}


export default Input;
