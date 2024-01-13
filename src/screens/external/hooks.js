import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";

function padMonthStart(monthData) {
  const firstDayOfWeek = monthData[0].day;
  const emptySlotsCount = (new Date(monthData[0].date).getDay() + 1) % 7;

  const emptySlots = Array.from({ length: emptySlotsCount }, (_, index) => ({
    day: null,
    date: null,
    dayOfWeek: null,
  }));

  console.log("emptySlots", emptySlots);
  return emptySlots.concat(monthData);
}

function padMonthEnd(monthData) {
  const lastDayOfWeek = monthData[monthData?.length - 1]?.day;
  const emptySlotsCount = (6 - lastDayOfWeek + 7) % 7;

  const emptySlots = Array.from({ length: emptySlotsCount }, (_, index) => ({
    day: null,
    date: null,
    dayOfWeek: null,
  }));

  return monthData?.concat(emptySlots);
}
export const useYearData = () => {
  const DAY = ["Sunday", "M", "T", "W", "T", "F", "Saturday"];
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getNextTenYearData = useCallback((startYear, numYears) => {
    const allYearsData = [];
    for (let i = 0; i < numYears; i++) {
      const currentYear = startYear + i;
      const monthsData = [];

      monthsData.push({
        month: "dummy",
        year: currentYear,
        dates: Array(30).fill(null),
      });

      for (let month = 0; month < 12; month++) {
        const firstDay = new Date(currentYear, month, 1);
        const lastDay = new Date(currentYear, month + 1, 0);

        const monthData = {
          month: month + 1,
          year: currentYear,
          dates: [],
        };

        for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
          const currentDate = new Date(currentYear, month, day);
          monthData.dates.push({
            day: day,
            date: currentDate.toISOString().split("T")[0], // Format as 'YYYY-MM-DD'
            dayOfWeek: currentDate.toLocaleDateString("en-US", {
              weekday: "long",
            }),
          });
        }
        const paddedMonth = padMonthStart(monthData?.dates);

        console.log("paddedMonth");

        monthsData.push({
          ...monthData,
          dates: paddedMonth,
        });
      }
      monthsData.push({
        month: "dummy",
        year: currentYear + 1,
        dates: Array(30).fill(null),
      });

      allYearsData.push({ year: currentYear, months: monthsData });
    }

    return allYearsData;
  }, []);

  const startYear = new Date().getFullYear();
  const numYears = 5;
  const allYearsData = getNextTenYearData(startYear, numYears);

  return { allYearsData, DAY, MONTH };
};
