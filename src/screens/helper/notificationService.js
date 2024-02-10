import messaging from "@react-native-firebase/messaging";
import { AppStorage, key } from "./asynStorage";

async function registerAppWithFCM() {
  await messaging().registerDeviceForRemoteMessages();
}
async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
    }
  } catch (error) {
    console.log("Authorization status:", error);
  }
}

const getFcmToken = async () => {
  const fcmTokenLocal = await AppStorage.getFcmToken();
  console.log("fcmTokenLocal", fcmTokenLocal);

  if (!fcmTokenLocal) {
    try {
      const fcmToken = await messaging().getToken();
      if (!!fcmToken) {
        await AppStorage.saveKey(key.SAVE_FCM_TOKEN, JSON.stringify(fcmToken));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
};

export default requestUserPermission;

export const notificationListener = async (navigation) => {
  messaging().onNotificationOpenedApp((notification) => {
    console.log("Notification opened: ", notification);
  });
  messaging().onMessage(async (remoteMessage) => {
    console.log("Message handled in the foreground!", remoteMessage);
  });
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
      }
    });
};
