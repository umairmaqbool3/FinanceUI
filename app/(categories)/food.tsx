import CalenderIcon from '@/assets/svgs/CalenderIcon';
import FoodIcon from '@/assets/svgs/FoodIcon';
import BalanceComponent from '@/components/BalanceComponent';
import CustomButton from '@/components/CustomButton';
import ExpenseListItem from '@/components/ExpenseListItem';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { foodData } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

const FoodScreen = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const { headerTitle } = useLocalSearchParams();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title={headerTitle as string}
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

      <BalanceComponent />

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.67 : 0.90), backgroundColor: Colors[theme].secondary }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacingY._5 }}>
            <ThemedText>April</ThemedText>
            <View style={styles.leftIconContainer}>
              <CalenderIcon />
            </View>
          </View>
          {foodData.map((item, index) => (
            <ExpenseListItem key={index} item={item} index={index} />
          ))}
          <ThemedText style={{ marginVertical: spacingY._7 }}>March</ThemedText>
          <ExpenseListItem item={{ title: 'Dinner', amount: '-$27,20', duration: '', date: "20:50 - March 31", icon: FoodIcon }} index={0} />
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._25 }}>
            <CustomButton
              title="Add Expenses"
              textStyle={{ color: 'black', fontSize: 14, }}
              onPress={() => router.push({ pathname: '/(categories)/addExpense', params: { screenTitle: 'Add Expenses' } })}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default FoodScreen;

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
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});