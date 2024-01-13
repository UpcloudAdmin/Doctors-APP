import { showMessage, hideMessage } from "react-native-flash-message";

const CustomMessage = (message, type) => {
  return showMessage({
    message: message,
    autoHide: true,
    duration: 10000,
    type: type,
  });
};

export default CustomMessage;
