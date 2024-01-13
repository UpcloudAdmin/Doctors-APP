import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Contacts from "react-native-contacts";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Request permission to access contacts
    Contacts.checkPermission().then((permission) => {
      if (permission === "authorized") {
        // Get contacts
        Contacts.getAll().then((contacts) => {
          setContacts(contacts);
        });
      } else if (permission === "undefined") {
        // Request permission
        Contacts.requestPermission().then((permission) => {
          if (permission === "authorized") {
            // Get contacts
            Contacts.getAll().then((contacts) => {
              setContacts(contacts);
            });
          }
        });
      }
    });
  }, []);

  const renderContact = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text>{item.displayName}</Text>
      <Text>
        {item.phoneNumbers.length > 0
          ? item.phoneNumbers[0].number
          : "No phone number"}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(contact) => contact.recordID}
        renderItem={renderContact}
      />
    </View>
  );
};

export default ContactList;
