import { StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { View } from '@/components/Themed';
import React, { useState } from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { ZenTokyoZoo_400Regular } from '@expo-google-fonts/zen-tokyo-zoo';

export default function TabOneScreen() {

  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
    ZenTokyoZoo_400Regular
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState(''); // State for Re-Enter Password

  const handleSignUp = () => {
    Alert.alert('Sign Up Button Pressed', `Username: ${username}, Password: ${password}, Re-Enter Password: ${reEnterPassword}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <Text style={styles.reEnterPasswordLabel}>Re-Enter Password</Text> {/* Re-Enter Password Label */}
      <TextInput
        style={styles.passwordInput} // Reuse the same style as password input
        onChangeText={setReEnterPassword}
        value={reEnterPassword}
        placeholder="Re-Enter Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.SignUpButton} onPress={handleSignUp}>
        <Text style={styles.SignUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
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
    alignSelf: 'flex-start',
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
    alignSelf: 'flex-start',
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
  reEnterPasswordLabel: {  // Style for Re-Enter Password Label
    fontSize: 20,
    color: 'white',
    paddingTop: 40,
    fontFamily: 'LilitaOne_400Regular',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  SignUpButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 40,
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  SignUpButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});