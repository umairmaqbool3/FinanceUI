import CustomSwitch from '@/components/CustomSwitch';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

const NotificationSetting = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [enabled, setEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundCallEnabled, setSoundCallEnabled] = useState(true);
  const [vibrate, setVibrate] = useState(true);
  const [transactionUpdate, setTransactionUpdate] = useState(true);
  const [expenseReminder, setExpenseReminder] = useState(true);
  const [budgetNotification, setBudgetNotification] = useState(true);
  const [lowBalanceAlert, setLowBalanceAlert] = useState(true);

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="NotificationSettings"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.85 : 0.90), backgroundColor: Colors[theme].secondary }]}>
        {/* {options.map((item, index) => ( */}
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>General Notification</ThemedText>
          </View>
          <CustomSwitch
            value={enabled}
            onValueChange={setEnabled}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Sound</ThemedText>
          </View>
          <CustomSwitch
            value={soundEnabled}
            onValueChange={setSoundEnabled}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Sound Call</ThemedText>
          </View>
          <CustomSwitch
            value={soundCallEnabled}
            onValueChange={setSoundCallEnabled}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Vibrate</ThemedText>
          </View>
          <CustomSwitch
            value={vibrate}
            onValueChange={setVibrate}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Transaction Update</ThemedText>
          </View>
          <CustomSwitch
            value={transactionUpdate}
            onValueChange={setTransactionUpdate}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Expense Reminder</ThemedText>
          </View>
          <CustomSwitch
            value={expenseReminder}
            onValueChange={setExpenseReminder}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Budget Notification</ThemedText>
          </View>
          <CustomSwitch
            value={budgetNotification}
            onValueChange={setBudgetNotification}
            height={18}
            width={35}
          />
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <ThemedText style={styles.optionTitle}>Low Balance Alert</ThemedText>
          </View>
          <CustomSwitch
            value={lowBalanceAlert}
            onValueChange={setLowBalanceAlert}
            height={18}
            width={35}
          />
        </View>
        {/* ))} */}
      </View>
    </Screen>
  )
}

export default NotificationSetting;

const styles = StyleSheet.create({
  contentContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: spacingX._30,
    paddingTop: spacingY._30,
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
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacingY._12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._12,
  },
  optionTitle: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '300',
  }
})