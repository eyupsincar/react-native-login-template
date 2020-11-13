import React, {useState}  from "react";
import "react-native-gesture-handler";
import {
  StyleSheet, Text
} from "react-native";

import Box from './src/components/Box';
import Router from './src/router';
// localstorage a ait kontrolleri bu kisma yazacagiz.
function App() {

  const [user, setUser] = useState(0);

  // mantik: kullanici girisi yapilmis mi kullanici girisi zaten varsa usestate kullanilarak kullanici propunu veri olarak guncelle.

  return(
      <Box style={styles.container}>
      {!user ? <Router props={user} /> : <Text>Anasayfa yuklenecek</Text>}
      </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});



export default App;
