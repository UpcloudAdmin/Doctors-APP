// ReviewPrompt.js
import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
import { openURL } from "react-native-linking";

const ReviewPrompt = () => {
  const [rating, setRating] = useState(0);

  const handleRatingSubmit = () => {
    if (rating === 0) {
      // Show an alert if the user hasn't selected a rating
      Alert.alert("Please select a rating before submitting.");
    } else {
      // Navigate to the app/Play Store for written review
      openURL("https://chat.openai.com/c/182c7820-e955-4bb8-bb0f-bac6ebca8566");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Our App</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        halfStar={"ios-star-half"}
        iconSet={"Ionicons"}
        rating={rating}
        selectedStar={(rating) => setRating(rating)}
        starSize={30}
        fullStarColor="#FFD700"
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleRatingSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ReviewPrompt;
