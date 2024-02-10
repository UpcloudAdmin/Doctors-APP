import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors } from "../../../utils/appColors";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";

const ListItems = ({ name, data }) => {
  console.log("data:---", data);
  const { colorScheme } = useAppCommonDataProvider();
  const arr = [
    "Hair Transplant Surgery",
    "Integrated Medicine",
    "Pediatrics",
    "Integrated Medicine",
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
          fontWeight: "600",
          color: colorScheme === "light" ? appColors?.black : appColors?.white,
        }}
      >
        {name}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 6,
                borderBottomColor:  colorScheme === "light"
                      ? appColors?.listcolor
                      : appColors?.white,
                borderBottomWidth: 0.7,
                marginTop: 10,
                padding: 4,
              }}
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 17,
                  fontWeight: "400",

                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.loaderColor,
                }}
              >
                {item}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                {/* 4 */}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
