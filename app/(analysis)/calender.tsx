import CustomButton from '@/components/CustomButton';
import CustomDropdown from '@/components/CustomDropdown';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

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
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const [selectedMonth, setSelectedMonth] = useState<string | number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | number | null>(null);

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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.78 : 0.85), backgroundColor: Colors[theme].secondary }]}>
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

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: spacingY._25, gap: 15 }}>
            <CustomButton
              title="Spends"
              textStyle={{ color: 'black', fontSize: 13, fontWeight: '400' }}
              onPress={() => router.back()}
              width={150}
              height={38}
            />
            <CustomButton
              title="Categories"
              textStyle={{ color: 'black', fontSize: 13, fontWeight: '400' }}
              onPress={() => router.back()}
              containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
              width={150}
              height={38}
            />
          </View>

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
    paddingTop: spacingY._25,
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