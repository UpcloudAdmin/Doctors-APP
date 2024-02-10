import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appColors } from "../../utils/appColors";
import * as Progress from "react-native-progress";
import { imagePath } from "../../utils/imagePath";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";

const ProfileBar = ({ text, onPress, progress, workingText, bstyle }) => {
  const { colorScheme } = useAppCommonDataProvider();
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor:
            colorScheme === "light" ? appColors?.gray : appColors?.loaderColor,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.progressContainer}>
        <View style={styles.profileInfo}>
          <Text
            style={[
              styles.profileTitle,
              {
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.lightWhite,
              },
            ]}
          >
            {text}
          </Text>
          {bstyle && (
            <Text
              style={[
                styles.profileTitle1,
                {
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.lightWhite,
                },
              ]}
            >
              {text}
            </Text>
          )}
        </View>
        {progress && (
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>57%</Text>

            <Progress.Bar
              progress={0.7}
              width={170}
              color={
                colorScheme === "light"
                  ? appColors?.lightblue
                  : appColors?.lightblue
              }
            />
          </View>
        )}

        {workingText && (
          <View style={styles.profileInfo}>
            <Text style={styles.profileTitle}>9AM-4:30PM</Text>
          </View>
        )}
        <Image
          tintColor={
            colorScheme === "light" ? appColors?.black : appColors?.white
          }
          source={imagePath?.chevron}
          style={styles.chevronImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,

    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    height: 89,
  },
  profileInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 50,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: appColors?.black,
    // paddingLeft: 8,
    width: 136,
  },
  profileTitle1: {
    fontSize: 16,
    fontWeight: "600",
    color: appColors?.black,
    paddingLeft: 8,
    //  width: 136,
  },
  progressContainer: {
    height: 50,
    paddingTop: 5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  progressTextContainer: {
    alignItems: "center",
  },
  progressText: {
    textAlign: "center",
    color: appColors?.lightblue,
    marginBottom: 5,
  },
  chevronImage: {
    alignSelf: "center",
  },
});

export default ProfileBar;
