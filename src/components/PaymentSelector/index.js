import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const PaymentSelector = () => {
  const screenHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>sdfsfs</Text>
    </View>
  );
};

export default PaymentSelector;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
