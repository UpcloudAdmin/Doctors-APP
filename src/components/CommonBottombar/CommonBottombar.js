import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;
const CommonBottombar = ({ item }) => {
  return (
    <View
      style={{
        height: h * 0.55,
        backgroundColor: "white",
        borderRadius: 25,
        paddingTop: 35,
      }}
    >
      <View
        style={{
          height: h * 0.4,

          alignSelf: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={item.img} />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flex: 1,

                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 22, marginHorizontal: 10 }}>
                Request
              </Text>
              <TouchableOpacity>
                <Image source={item.icon} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 30,
                  marginHorizontal: 10,
                }}
              >
                {item.mode}
              </Text>
              {item.time ? (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 7,
                  }}
                >
                  11:23
                </Text>
              ) : null}
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "blue", fontSize: 15 }}>{item.name}</Text>
          <Text style={{ fontSize: 10, marginTop: 3 }}>
            1548752195 95959595959
          </Text>
        </View>

        {item.button.map((item) => {
          console.log("first===========>", item);
          return (
            <TouchableOpacity
              style={{
                backgroundColor: item.color ? item.color : "#65D24A",
                height: 57,
                width: 330,
                borderRadius: 5,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              {item.Internalicon ? (
                <Image
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: "white",
                    alignSelf: "center",
                    marginHorizontal: 5,
                  }}
                  source={item.Internalicon}
                />
              ) : null}
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                  alignSelf: "center",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}

        <Text
          style={{
            fontSize: 13,
            marginTop: 20,
            textAlign: "center",
            fontWeight: "400",
            width: 260,
            alignSelf: "center",
          }}
        >
          {item.textDiscription}
        </Text>
      </View>
    </View>
  );
};

export default CommonBottombar;
