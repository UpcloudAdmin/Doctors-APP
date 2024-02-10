import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { imagePath } from "../../../utils/imagePath";
import { appColors } from "../../../utils/appColors";
import { useFocusEffect } from "@react-navigation/native";
import { apiGetModule } from "../../../utils/commonFunction";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import RightButton from "../../../components/RightButton/RightButton";

const ClinicService = ({ navigation }) => {
    const { colorScheme, clinicServices } = useAppCommonDataProvider();

  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const { setSpecial, setClinicServices } = useAppCommonDataProvider();
  const [state, setState] = useState([]);
  const [service, setService] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  useEffect(() => {
    setClinicServices(service);
  }, [service]);
  const getData = async () => {
    const getCollege = await apiGetModule("v11/doctorlist/clinicservices");
    console.log(getCollege, "<--getCollege");
    setState(getCollege?.clinicServicess);
    // setCollege(getCollege?.colleges);
  };

  return (
    <ScreenWrapper
      statusBarColor={
        colorScheme === "light"
          ? appColors?.white
          : colorScheme === "dark"
          ? appColors?.brown
          : colorScheme === "justDark"
          ? "#000000"
          : appColors?.white
      }
    >
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: "7%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate("ClinicProfile");
            }}
          >
            <Image source={imagePath?.back} style={{ tintColor: "black" }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>Specialities</Text>
        </View>
        <View style={{ paddingTop: 25 }}>
          <View
            style={{
              height: 40,
              backgroundColor: appColors?.gray,
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image source={imagePath?.eyeClose} />
            <TextInput
              style={{ height: 40, paddingLeft: 20 }}
              placeholder="searchbar"
            />
          </View>
          <View>
            <FlatList
              style={{ marginTop: "5%" }}
              data={service}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      const filtered = service?.filter(
                        (itm) => itm !== item.clinicServices
                      );
                      setService(filtered);
                    }}
                    style={{
                      paddingVertical: "2%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: "#8A5D3C",
                      }}
                    >
                      {item}
                    </Text>
                    <Image source={imagePath?.no} />
                  </TouchableOpacity>
                );
              }}
            />
            <FlatList
              style={{ height: "90%", paddingTop: "5%" }}
              data={state}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setService([...service, item?.clinicServices]);
                    }}
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 0.6,
                      paddingVertical: "5%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: appColors?.gray,
                      }}
                    >
                      {item?.clinicServices}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={{ backgroundColor: "red", height: 100 }}></View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ClinicService;

const styles = StyleSheet.create({});
