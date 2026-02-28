import CalenderIcon from '@/assets/svgs/CalenderIcon';
import CustomDatePicker from '@/components/CustomDatePicker';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const AddExpenseScreen = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Add Expense"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.84 : 0.90), backgroundColor: Colors[theme].secondary }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Date</ThemedText>
          <View style={[styles.inputContainer, { backgroundColor: Colors.light.secondaryBtn }]}>
            <Text style={[styles.input, { color: Colors.light.text }]}>{date.toDateString()}</Text>
            <Pressable style={styles.leftIconContainer} onPress={() => setShowDatePicker(true)}>
              <CalenderIcon />
            </Pressable>
          </View>

          <CustomDatePicker
            value={date}
            onChange={(newDate) => setDate(newDate)}
            visible={showDatePicker}
            setVisible={setShowDatePicker}
          />

        </ScrollView>
      </View>
    </Screen>
  );
};

export default AddExpenseScreen;

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
  label: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: spacingY._5,
    marginTop: spacingY._10,
    marginLeft: spacingX._10,
  },
  inputContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
    height: 40,
    marginBottom: spacingY._5,
  },
  input: {
    flex: 1,
    // height: '80%',
    fontSize: 14,
    paddingLeft: spacingX._7,
  },
});