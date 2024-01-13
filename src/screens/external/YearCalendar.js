import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useYearData } from "./hooks";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";

const YearCalendar = () => {
  const { allYearsData, DAY, MONTH } = useYearData();
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.monthContainer}>
        <ScrollView style={{ flex: 1 }}>
          {allYearsData.map((year, yearIndex) => {
            console.log("year", year);
            return (
              <View
                style={{
                  width: "100%",
                  // height: "66%",
                  marginVertical: 10,
                  flexDirection: "row",
                }}
              >
                {Array(2)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <View
                        style={{
                          // flexDirection: "row",

                          flex: 1,
                        }}
                      >
                        {year?.months
                          .filter((_, yearIndex) => yearIndex % 2 === index)
                          .map((item, index) => {
                            return (
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("CalenderScreen", {
                                    item: item,
                                    //screen: "CalenderScreen",
                                  });
                                }}
                              >
                                <View
                                  style={{
                                    height: 300,
                                    width: "100%",
                                  }}
                                >
                                  {item?.month === "dummy" ? (
                                    <Text
                                      style={{
                                        fontSize: 40,
                                        fontWeight: "500",
                                      }}
                                    >
                                      {item?.year}
                                    </Text>
                                  ) : (
                                    <Text>{MONTH[item.month - 1] + ""}</Text>
                                  )}

                                  {item?.month !== "dummy" && (
                                    <View style={{ flexDirection: "row" }}>
                                      {DAY.map((item, index) => (
                                        <View
                                          style={styles.dayBlock}
                                          key={`${item} + ${index}`}
                                        >
                                          <Text
                                            style={{
                                              fontWeight: "600",
                                            }}
                                          >
                                            {item.charAt(0)}
                                          </Text>
                                        </View>
                                      ))}
                                    </View>
                                  )}
                                  {/* <View
                                style={{
                                  flexDirection: "row",
                                  flex: 1,
                                }}
                               > */}

                                  <View
                                    style={{
                                      width: "100%",
                                      flexDirection: "row",
                                      flex: 1,
                                      //backgroundColor: "green",
                                    }}
                                  >
                                    {Array(7)
                                      .fill(null)
                                      .map((_, indexRow) => (
                                        <View
                                          style={{
                                            flex: 1,

                                            marginHorizontal: 1,
                                          }}
                                          key={indexRow}
                                        >
                                          {item?.dates
                                            ?.filter(
                                              (_, index) =>
                                                index % 7 == indexRow
                                            )
                                            .map((item, index) => {
                                              console.log("item", item);
                                              return (
                                                <View
                                                  style={{
                                                    height: 35,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                  }}
                                                >
                                                  <Text
                                                    style={{
                                                      //   color: getTextColor(item),
                                                      //   fontSize: theme.sizes.body + 1,
                                                      fontWeight: "600",
                                                    }}
                                                  >
                                                    {item?.day}
                                                  </Text>
                                                </View>
                                              );
                                            })}
                                        </View>
                                      ))}
                                  </View>
                                </View>
                              </TouchableOpacity>
                            );
                          })}
                      </View>
                    );
                  })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  monthContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dayContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  dayText: {
    fontSize: 16,
  },

  dayBlock: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  flatContainer: {
    height: 200,
    width: "100%",
    flexDirection: "row",
  },
});

export default YearCalendar;
