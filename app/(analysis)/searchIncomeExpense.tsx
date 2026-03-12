import CalenderIcon from '@/assets/svgs/CalenderIcon';
import CustomButton from '@/components/CustomButton';
import CustomDatePicker from '@/components/CustomDatePicker';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Food', value: 'food' },
  { label: 'Transport', value: 'transport' },
  { label: 'Medicine', value: 'medicine' },
  { label: 'Groceries', value: 'groceries' },
  { label: 'Rent', value: 'rent' },
  { label: 'Savings', value: 'savings' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Other', value: 'other' },
];

const SearchIncomeExpense = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const { screenTitle } = useLocalSearchParams();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('income');
  const [searchedText, setSearchedText] = React.useState('');

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title={'Search'}
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

      <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn, marginHorizontal: spacingX._30, marginTop: spacingY._40 }]}>
        <TextInput
          placeholder="Search"
          value={searchedText}
          onChangeText={setSearchedText}
          placeholderTextColor={Colors.dark.primary}
          style={[styles.input, { color: Colors.light.text, opacity: 0.3 }]}
        />
      </View>

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.78 : 0.85), backgroundColor: Colors[theme].secondary }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText style={[styles.label, { color: Colors[theme].text, marginTop: spacingY._15 }]}>Category</ThemedText>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select the category"
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          />

          <View style={{ height: spacingY._20 }} />

          <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Date</ThemedText>
          <View style={[styles.inputContainer, { backgroundColor: Colors.light.secondaryBtn }]}>
            <Text style={[styles.input, { color: Colors.light.text }]}>{date.toDateString()}</Text>
            <Pressable style={styles.leftIconContainer} onPress={() => setShowDatePicker(true)}>
              <CalenderIcon />
            </Pressable>
          </View>


          {/* Transaction Type Radio Buttons */}
          <View style={styles.radioContainer}>
            <Pressable style={styles.radioButton} onPress={() => setTransactionType('income')}>
              <View style={[styles.radioOuter, transactionType === 'income' && styles.radioSelected]}>
                <View style={[styles.radioInner, { backgroundColor: transactionType === 'income' ? Colors.light.primary : 'transparent' }]} />
              </View>
              <Text style={[styles.radioLabel, { color: Colors[theme].text }]}>Income</Text>
            </Pressable>
            <Pressable style={styles.radioButton} onPress={() => setTransactionType('expense')}>
              <View style={[styles.radioOuter, transactionType === 'expense' && styles.radioSelected]}>
                <View style={[styles.radioInner, { backgroundColor: transactionType === 'expense' ? Colors.light.primary : 'transparent' }]} />
              </View>
              <Text style={[styles.radioLabel, { color: Colors[theme].text }]}>Expense</Text>
            </Pressable>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._25 }}>
            <CustomButton
              title="Search"
              textStyle={{ color: 'black', fontSize: 16, fontWeight: '400' }}
              onPress={() => router.back()}
            />
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

export default SearchIncomeExpense;

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
    marginLeft: spacingX._5,
  },
  inputContainer: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._10,
    height: 40,
    marginBottom: spacingY._5,
  },
  input: {
    flex: 1,
    // height: '80%',
    fontSize: 14,
    paddingLeft: spacingX._7,
  },
  // --------------------
  dropdown: {
    height: 40,
    backgroundColor: Colors.light.secondaryBtn,
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.secondaryBtn,
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    opacity: 0.6
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  prefix: {
    fontSize: 16,
  },
  // New styles for radio buttons
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: spacingY._25,
    marginBottom: spacingY._15,
    gap: spacingX._40,
    marginLeft: 6
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: Colors.light.primary,
    borderWidth: 1
  },
  radioSelected: {
    borderColor: Colors.light.primary,
  },
  radioLabel: {
    fontSize: 14,
  },
});