import CalenderIcon from '@/assets/svgs/CalenderIcon';
import IncomeIcon from '@/assets/svgs/IncomeIcon';
import PlaneIcon from '@/assets/svgs/PlaneIcon';
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

const SIZE = 90;
const BORDER_WIDTH = 3;

const SavingsItem = () => {
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.83 : 0.90), backgroundColor: Colors[theme].secondary }]}>
        <View style={styles.container}>
          <View>
            <View>
              <IncomeIcon color={theme == 'light' ? Colors.light.text : Colors.dark.text} />
            </View>
            <ThemedText>$1,962.93</ThemedText>
          </View>
          <View>
            <View style={styles.wrapper}>
              {/* White half */}
              <View style={[styles.halfBorder, styles.whiteHalf]} />
              {/* Green half */}
              <View style={[styles.halfBorder, styles.greenHalf]} />
              {/* Icon container */}
              <PlaneIcon />
            </View>
          </View>
        </View>
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
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._25 }}>
            <CustomButton
              title="Add Savings"
              textStyle={{ color: 'black', fontSize: 14, }}
              onPress={() => router.push('/(categories)/addExpense')}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default SavingsItem;

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
  container: {
    marginHorizontal: spacingX._5,
    borderRadius: 20,
    padding: spacingX._20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacingX._20,
  },
  wrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  halfBorder: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: BORDER_WIDTH,
  },

  whiteHalf: {
    borderColor: Colors.light.focusText,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '135deg' }],
  },

  greenHalf: {
    borderColor: Colors.light.white,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    transform: [{ rotate: '135deg' }],
  },
});