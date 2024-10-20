import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { ZenTokyoZoo_400Regular } from '@expo-google-fonts/zen-tokyo-zoo';

export default function MainPage() {

  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
    ZenTokyoZoo_400Regular
  });

  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [proteinConsumed, setProteinConsumed] = useState(0);  // New state for protein
  const dailyCalorieGoal = 2000;
  const dailyProteinGoal = 150; // Add a daily protein goal (e.g., 150g)

  const handleUpdateCalories = () => {
    if (isNaN(caloriesConsumed) || caloriesConsumed < 0) {
      alert("Please enter a valid number of calories.");
    }
  };

  const handleUpdateProtein = () => {
    if (isNaN(proteinConsumed) || proteinConsumed < 0) {
      alert("Please enter a valid number of protein (grams).");
    }
  };

  const calorieProgressPercentage = Math.min((caloriesConsumed / dailyCalorieGoal) * 100, 100);
  const proteinProgressPercentage = Math.min((proteinConsumed / dailyProteinGoal) * 100, 100);


  const getProgressBarColor = (percentage: number) => {
    if (percentage < 50) {
      return '#FF6F61'; // Red for less than 50%
    } else if (percentage < 80) {
      return '#FFB74D'; // Orange for 50-79%
    } else {
      return '#4CAF50'; // Green for 80-100%
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bestFitTitle}>BEST FIT</Text>

      <Image 
        source={{ uri: 'https://example.com/path-to-your-profile-picture.jpg' }} 
        style={styles.profileImage}
      />

      <Text style={styles.caloriesLabel}>Calories Consumed</Text>
      <TextInput
        style={styles.caloriesInput}
        onChangeText={(text) => setCaloriesConsumed(Number(text))}
        value={caloriesConsumed.toString()}
        placeholder="Enter calories consumed"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateCalories}>
        <Text style={styles.updateButtonText}>Update Calories</Text>
      </TouchableOpacity>

      <Text style={styles.goalText}>Daily Calorie Goal: {dailyCalorieGoal} kcal</Text>

      {/* Calories Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, { width: `${calorieProgressPercentage}%`, backgroundColor: getProgressBarColor(calorieProgressPercentage) }]}>
          <Text style={styles.progressText}>{Math.round(calorieProgressPercentage)}%</Text>
        </View>
      </View>

      {/* Protein Consumed Section */}
      <Text style={styles.proteinLabel}>Protein Consumed (g)</Text>
      <TextInput
        style={styles.proteinInput}
        onChangeText={(text) => setProteinConsumed(Number(text))}
        value={proteinConsumed.toString()}
        placeholder="Enter protein consumed"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProtein}>
        <Text style={styles.updateButtonText}>Update Protein</Text>
      </TouchableOpacity>

      <Text style={styles.goalText}>Daily Protein Goal: {dailyProteinGoal} g</Text>

      {/* Protein Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, { width: `${proteinProgressPercentage}%`, backgroundColor: getProgressBarColor(proteinProgressPercentage) }]}>
          <Text style={styles.progressText}>{Math.round(proteinProgressPercentage)}%</Text>
        </View>
      </View>
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
  bestFitTitle: {
    fontSize: 45,
    color: 'white',
    fontFamily: 'ZenTokyoZoo_400Regular',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  profileImage: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  caloriesLabel: {
    fontSize: 20,
    color: 'white',
    paddingTop: 40,
    fontFamily: 'LilitaOne_400Regular',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  caloriesInput: {
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
  updateButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  goalText: {
    fontSize: 18,
    color: 'white',
    paddingTop: 20,
  },
  progressBarContainer: {
    width: '90%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginTop: 30,
    height: 30,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  proteinLabel: {
    fontSize: 20,
    color: 'white',
    paddingTop: 40,
    fontFamily: 'LilitaOne_400Regular',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  proteinInput: {
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
});