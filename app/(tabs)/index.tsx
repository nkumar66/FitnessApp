import { StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { View } from '@/components/Themed';
import React, { useState, useEffect } from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { ZenTokyoZoo_400Regular } from '@expo-google-fonts/zen-tokyo-zoo';

//const loadFonts = async () => {
  //await Font.loadAsync({
    //'LilitaOne': require('E:/WorkoutApp/FitnessApp/assets/fonts/LilitaOne-Regular.ttf'),
    //'ZenTokyoZoo': require('E:/WorkoutApp/FitnessApp/assets/fonts/ZenTokyoZoo-Regular.ttf'),
    // Add more fonts here if needed
  //});
//};



export default function TabOneScreen() {

  //const [fontsLoaded, setFontsLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
    ZenTokyoZoo_400Regular
    //add more if needed
  });


  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //useEffect(() => {
    //(async () => {
      //await loadFonts();
      //setFontsLoaded(true);
    //})();
  //}, []);


  const handleLogin = () => {
    Alert.alert('Login Button Pressed', `Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>BEST FIT</Text>
      <Text style={styles.usernameLabel}>Username</Text>
      <TextInput
        style={styles.usernameInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter Username"
        placeholderTextColor="#999"
      />
      <Text style={styles.passwordLabel}>Password</Text>
      <TextInput
        style={styles.passwordInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />
      <Text style={styles.forgotpassword}>Forgot password?</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#212121',
    paddingTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'LilitaOne_400Regular',
  },
  subtitle: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'ZenTokyoZoo_400Regular',
    paddingTop: 10,
  },
  usernameLabel: {
    fontSize: 20,
    color: 'white',
    paddingTop: 15,
    fontFamily: 'LilitaOne_400Regular',
    alignSelf: 'flex-start', // Aligns the text to the left
    marginLeft: 20,
  },
  usernameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  passwordLabel: {
    fontSize: 20,
    color: 'white',
    paddingTop: 40,
    fontFamily: 'LilitaOne_400Regular',
    alignSelf: 'flex-start', // Aligns the text to the left
    marginLeft: 20,
  },
  passwordInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  forgotpassword: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'ZenTokyoZoo',
    paddingTop: 30,
    marginRight: 50,
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});