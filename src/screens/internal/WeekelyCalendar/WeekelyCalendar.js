import React from "react";
import {View,Text} from "react-native"
import ScreenWrapper from "../../../components/ScreenWrapper";
import CalendarStrip from "react-native-calendar-strip";

const WeekelyCalendar = ()=>{
    const datesBlacklistFunc = date => {
        return date.isoWeekday() === 6; // disable Saturdays
      }
    
    return(
       <ScreenWrapper>
        <View>
            <Text>sadasd</Text>
            <View style={{backgroundColor:"red"}}>
            <CalendarStrip
      datesBlacklist={datesBlacklistFunc}
    />
    </View>
        </View>
       </ScreenWrapper>
    )
}
export default WeekelyCalendar