import AnimatedSemiCircle from '@/components/AnimatedSemiCircle';
import CustomDropdown from '@/components/CustomDropdown';
import ExpenseListItem from '@/components/ExpenseListItem';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { data } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const months = [
  { label: 'January', value: 'january' },
  { label: 'February', value: 'february' },
  { label: 'March', value: 'march' },
  { label: 'April', value: 'april' },
  { label: 'May', value: 'may' },
  { label: 'June', value: 'june' },
  { label: 'July', value: 'july' },
  { label: 'August', value: 'august' },
  { label: 'September', value: 'september' },
  { label: 'October', value: 'october' },
  { label: 'November', value: 'november' },
  { label: 'December', value: 'december' },
]

const years = [
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
  { label: '2026', value: '2026' },
  { label: '2027', value: '2027' },
]

const CalenderScreen = () => {
  const { width, height } = useWindowDimensions();
  const date = new Date();
  const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const [selectedMonth, setSelectedMonth] = useState<string | number | null>(new Date().toLocaleString('default', { month: 'long' }).toLocaleLowerCase());
  const [selectedYear, setSelectedYear] = useState<string | number | null>(new Date().getFullYear().toString());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [spends, setSpends] = useState(true);

  const handleMonthChange = (newMonthYear: any) => {
    // newMonthYear should be a string in 'YYYY-MM-DD' format, 
    // e.g., '2025-10-01' for October 2025
    setSelectedDate(newMonthYear);
  };

  const spendsAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(spends ? Colors.light.primary : Colors.light.secondaryBtn, { duration: 500 }),
    };
  });

  const categoriesAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(!spends ? Colors.light.primary : Colors.light.secondaryBtn, { duration: 500 }),
    };
  });

  const spendsDataAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(spends ? 1 : 0, { duration: 500 }),
    }
  })

  const categoryDataAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(!spends ? 1 : 0, { duration: 500 }),
    }
  })


  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title={'Calender'}
        theme={theme}
        leftIcon={<Ionicons name="arrow-back" size={24} color={Colors[theme].text} />}
        rightIcon={<View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={20} />
        </View>}
        onLeftPress={() => router.back()}
        onRightPress={() => console.log('Notifications/Right pressed')}
        style={{
          marginHorizontal: spacingX._12,
          marginBottom: -spacingY._20,
        }}
      />

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.80 : 0.85), backgroundColor: Colors[theme].secondary }]}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <CustomDropdown
              options={months}
              selectedValue={selectedMonth}
              onSelect={(option) => setSelectedMonth(option.value)}
              placeholder="Select Month"
            />
            <CustomDropdown
              options={years}
              selectedValue={selectedYear}
              onSelect={(option) => setSelectedYear(option.value)}
              placeholder="Select Year"
            />
          </View>

          <Calendar
            style={{
              height: 340,
            }}
            hideArrows={true}
            firstDay={1}
            initialDate={new Date().toISOString().split('T')[0].toString()}
            current={
              selectedYear && selectedMonth
                ? `${selectedYear}-05-01`
                : today
            }
            theme={{
              'stylesheet.calendar.header': {
                header: {
                  height: 0
                }
              },
              calendarBackground: Colors[theme].secondary,
              textSectionTitleColor: Colors.light.focusText,
              selectedDayBackgroundColor: '#00adf5',
              todayTextColor: '#00adf5',
              dayTextColor: Colors[theme].text,
            } as any}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -spacingY._10, gap: 15, marginBottom: spacingY._10 }}>
            <AnimatedPressable
              onPress={() => setSpends(true)}
              style={[
                { width: 150, height: 38, borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
                spendsAnimatedStyle
              ]}
            >
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '400' }}>Spends</Text>
            </AnimatedPressable>
            <AnimatedPressable
              onPress={() => setSpends(false)}
              style={[
                { width: 150, height: 38, borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
                categoriesAnimatedStyle
              ]}
            >
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '400' }}>Categories</Text>
            </AnimatedPressable>
          </View>

          {spends ? (
            <Animated.View style={[spendsDataAnimatedStyle]}>
              {data.slice(0, 2).map((item, index) => (
                <ExpenseListItem key={index} item={item} index={index} />
              ))}
            </Animated.View>
          ) : (
            <Animated.View style={[categoryDataAnimatedStyle]}>
              <AnimatedSemiCircle />
            </Animated.View>

          )}


        </ScrollView>
      </View>
    </Screen>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._5,
  },
  contentContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: spacingX._30,
    paddingTop: spacingY._15,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  iconContainer: {
    backgroundColor: Colors.light.secondaryBtn,
    padding: spacingX._5,
    borderRadius: 50,
  },
  leftIconContainer: {
    backgroundColor: Colors.light.primary,
    borderRadius: 14,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});