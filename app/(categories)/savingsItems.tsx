import CalenderIcon from '@/assets/svgs/CalenderIcon';
import CheckIcon from '@/assets/svgs/CheckIcon';
import ExpenseIcon from '@/assets/svgs/ExpenseIcon';
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
import { Platform, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const SIZE = 80;
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
            <View style={styles.rowTextView}>
              <IncomeIcon color={theme == 'light' ? Colors.light.text : Colors.dark.text} />
              <ThemedText style={{ fontSize: 13 }}>Goal</ThemedText>
            </View>
            <ThemedText style={{ marginLeft: spacingX._15, fontWeight: '700', fontSize: 18, marginBottom: spacingY._10 }}>$1,962.93</ThemedText>
            <View style={styles.rowTextView}>
              <ExpenseIcon color={theme == 'light' ? Colors.light.text : Colors.dark.text} />
              <ThemedText style={{ fontSize: 13 }}>Amount Saved</ThemedText>
            </View>
            <ThemedText style={{ marginLeft: spacingX._15, fontWeight: '700', fontSize: 18, color: Colors.light.primary }}>$653.31</ThemedText>
          </View>
          <View style={styles.wrapperContainer}>
            <View style={styles.wrapper}>
              {/* White half */}
              <View style={[styles.halfBorder, styles.whiteHalf]} />
              {/* Green half */}
              <View style={[styles.halfBorder, styles.greenHalf]} />
              {/* Icon container */}
              <PlaneIcon size={45} />
            </View>
            <ThemedText style={{ fontSize: 13, textAlign: 'center' }}>{headerTitle}</ThemedText>
          </View>
        </View>
        <View style={styles.bar}>
          <View style={styles.barBlack}
          >
            <Text style={{ color: Colors.light.secondaryBtn, marginLeft: spacingX._20 }}>40%</Text>
            <View style={styles.barSecondary}>
              <Text
                style={{
                  color: Colors.light.text,
                  textAlign: 'right',
                  marginRight: spacingX._20,
                  fontStyle: 'italic',
                }}
              >
                $1,962.93
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.rowStart]}>
          <CheckIcon theme={theme} />
          <ThemedText style={{ fontSize: 13 }}>30% Of Your Expenses, Looks Good.</ThemedText>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacingY._5, marginTop: spacingY._15 }}>
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
              onPress={() => router.push({ pathname: '/(categories)/addExpense', params: { screenTitle: 'Add Savings' } })}
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
    width: SIZE + 20,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfBorder: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
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
  wrapperContainer: {
    backgroundColor: '#6DB6FE',
    padding: spacingX._15,
    borderRadius: spacingY._30
  },
  rowTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: spacingX._10,
    marginLeft: 10
  },
  bar: {
    marginVertical: spacingY._7,
    // marginHorizontal: -spacingX._10,
  },
  barBlack: {
    height: 28,
    width: '100%',
    backgroundColor: Colors.light.primary,
    borderRadius: 20,
    justifyContent: 'center',
  },
  barSecondary: {
    height: 28,
    width: '75%',
    backgroundColor: Colors.light.secondaryBtn,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
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