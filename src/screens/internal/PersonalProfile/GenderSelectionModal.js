import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const GenderSelectionModal = ({
  isVisible,
  onGenderSelected,
  onClose,
  handleGenderSelect,
  selectedGender,
}) => {
  const genders = ['Male', 'Female', 'Others'];

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.header}>Select Gender</Text>
        {genders.map(gender => (
          <TouchableOpacity
            key={gender}
            onPress={() => handleGenderSelect(gender)}
            style={[
              styles.genderButton,
              selectedGender === gender && styles.selectedGenderButton,
            ]}>
            <Text
              style={[
                styles.genderText,
                selectedGender === gender && styles.selectedGenderText,
              ]}>
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
  genderText: {
    fontSize: 16,
  },
  selectedGenderButton: {
    backgroundColor: '#4CAF50',
  },
  selectedGenderText: {
    color: 'white',
  },
});

export default GenderSelectionModal;
