import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,

} from "react-native";

import Button from './Button';
import Box from './Box';

function Input({onChangeFocus}) {

const[value, setValue] = React.useState('')
const[isFocus, setFocus] = React.useState(false)


const onClear = () => {
  setValue('')
  setFocus(false)
}

  return(
    <Box>
      <TextInput
        textAlign={'center'}
        marginTop={15}
        backgroundColor="#e4eaf1"
        width={325}
        height={50}
        borderRadius={10}
        fontSize={19}
        value={value}
        onFocus={() => setFocus(true)}
        onChange={e => setValue(e.text)}


        />
        { isFocus && (
          <Button onPress={onClear} position="absolute" right={16} top={29}>
            <Text>X</Text>
          </Button>
          )}
      </Box>
  )
}


export default Input;
