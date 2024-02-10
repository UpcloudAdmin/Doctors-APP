// DoctorCard.js

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { imagePath } from "../../../utils/imagePath";

const DoctorCard = ({ name, specialization, address, contact }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F5515F", "#9F041B"]}
        style={styles.linearGradient}
      >
        <Image
          style={{
            height: 150,
            width: 150,
            marginTop:50
          }}
          source={imagePath?.demoProfile}
        />
        <Text style={styles.buttonText}>Dr. Swapnil Katare</Text>
      </LinearGradient>
      <View style={styles.whiteCard}>
        <Text style={styles.name}>{name}</Text>
        <Image
          style={{
            height: 80,
            width: 80,
          }}
          source={imagePath?.ActivitySupported}
        />
        <Text style={styles.specialization}>{specialization}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.contact}>{contact}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 23,
    marginRight: 23,
    borderRadius: 8,
  },
  name: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: "700",

    marginBottom: 8,
  },
  specialization: {
    fontSize: 13,
    padding: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#C02236",
  },
  contact: {
    fontSize: 14,
    color: "#007BFF",
  },
  linearGradient: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  whiteCard: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default DoctorCard;
