import AsyncStorage from "@react-native-async-storage/async-storage";

const key = {
  SAVE_FCM_TOKEN: "SAVE_FCM_TOKEN",
};

const AppStorage = {
  async saveKey(keyName, value) {
    try {
      await AsyncStorage.setItem(keyName, value);
    } catch (error) {}
  },

  async removeItemKey(keyName) {
    try {
      await AsyncStorage.removeItem(keyName);
      return true;
    } catch (error) {
      return false;
    }
  },

  async clearItem(keyName) {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  },

  async getFcmToken() {
    try {
      let response = await AsyncStorage.getItem(key.SAVE_FCM_TOKEN);
      let parsedResponse = JSON.parse(response);
      return parsedResponse;
    } catch (error) {}
  },
};

export { AppStorage, key };
