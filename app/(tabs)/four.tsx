import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, ZenTokyoZoo_400Regular } from '@expo-google-fonts/zen-tokyo-zoo';

export default function MainPage() {
  let [fontsLoaded] = useFonts({
    ZenTokyoZoo_400Regular,
  });

  return (
    <View style={styles.container}>
      {/* "Best Fit" Title */}
      <Text style={styles.bestFitTitle}>BEST FIT</Text>

      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://example.com/path-to-your-profile-picture.jpg' }}
        style={styles.profileImage}
      />

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Count</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Finder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
  bestFitTitle: {
    fontSize: 45,
    color: 'white',
    fontFamily: 'ZenTokyoZoo_400Regular',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  roundButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FF6F61',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});