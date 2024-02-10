import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { imagePath } from "../../utils/imagePath";
import { appColors } from "../../utils/appColors";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";

const NotificationTab = () => {
  const { colorScheme } = useAppCommonDataProvider();
  return (
    <View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: "3%",
              paddingLeft: 36,
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Aashay Shirsawade
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: "3%",
              marginRight: "22.5%",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            4{" "}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#cae2f8",
            borderRadius: 12,
            marginLeft: 22,
            marginRight: "18.5%",
            paddingBottom: 15,
          }}
         >
          <Text
            style={{
              textAlign: "right",
              fontSize: 11,
              fontWeight: "700",
              marginTop: 2,
              marginRight: 11,
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            19 Jun, 21:22
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginLeft: 13,
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            M/
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginLeft: 13,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {" "}
              21
            </Text>
          </Text>
          <Text
            numberOfLines={6}
            style={{
              paddingTop: "2%",
              fontSize: 15,
              fontWeight: "500",
              marginLeft: 13,
              marginRight: 12,
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            It has been a week since my last consultancy and there has been a
            visible decrease in my pain. Thank you! It has been a week since my
            last consultancy and there has been a visible decrease in my pain.
            Thank you!
          </Text>
        </View>
        <View style={{backgroundColor:'red',width:40,height:40}}></View>

        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            marginLeft: 43,
            marginRight: "22%",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color:
                colorScheme === "light"
                  ? appColors?.replyTextColor
                  : appColors?.gray,
            }}
          >
            reply
          </Text>
          <TouchableOpacity>
            <Image
              source={imagePath?.like}
              style={{ height: 17, width: 17.12 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#007AFF",
              fontSize: 13,
              fontWeight: "600",
              marginLeft: 60,
            }}
          >
            read more
          </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 12,
              marginRight: 22,
              marginLeft: "18.5%",
              paddingBottom: 10,
              marginTop: 24,
            }}
          >
            <Text
              style={{
                textAlign: "right",
                fontSize: 11,
                fontWeight: "700",
                marginTop: 2,
                marginRight: 11,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              11 March, 18:27
            </Text>
            <Text
              numberOfLines={6}
              style={{
                paddingTop: 5,
                fontSize: 15,
                fontWeight: "500",
                marginLeft: 13,
                marginRight: 12,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Thank you, Mr. Ram for your positive reply! I am glad that you
              find this platform an our services effective. Your Thank you, Mr.
              Ram for your positive reply! I am glad that you find this platform
              an our services effective. Your
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            justifyContent: "flex-end",
            //marginLeft: "60%",
            //paddingRight: 32,
            color: appColors?.black,
          }}
        >
          <Text
            style={{
              paddingRight: 10,
              fontSize: 13,
              fontWeight: "400",
              color:
                colorScheme === "light"
                  ? appColors?.editedTextColor
                  : appColors?.gray,
            }}
          >
            11 Mar, 18:27
          </Text>
          <Text
            style={{
              paddingRight: 10,
              fontSize: 13,
              fontWeight: "400",
              color:
                colorScheme === "light"
                  ? appColors?.editedTextColor
                  : appColors?.gray,
            }}
          >
            edited
          </Text>
          <Text
            style={{
              color: "#007AFF",
              fontSize: 13,
              fontWeight: "600",
              marginRight: 32,
            }}
          >
            read more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationTab;

const styles = StyleSheet.create({});
