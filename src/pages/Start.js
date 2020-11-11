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
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyles}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyles}>Register</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({

  buttons: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    marginTop: 20,
    borderRadius: 15,
  },

  textStyles: {
    color: "white",

  }
});

export default Start;
