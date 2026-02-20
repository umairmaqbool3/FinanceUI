import CustomerServiceIcon from '@/assets/svgs/CustomerServiceIcon';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const list = [
  {
    name: 'Help Center',
    message: 'Your account is ready to use...',
    time: 'Feb 08 -2024',
  },
  {
    name: 'Support Assistant',
    message: 'Hello! I\'m here to assist you',
    time: 'Dec 14 -2023',
  },
  {
    name: 'Support Assistant',
    message: 'Hello! I\'m here to assist you',
    time: 'Sep 10 -2023',
  },
  {
    name: 'Help Center',
    message: 'Hi, how are you today?',
    time: 'June 12 -2023',
  },
]

const CustomerService = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Online Support"
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText>Active Chats</ThemedText>
          <View style={[styles.itemContainer, { backgroundColor: Colors[theme].tabbarBg }]}>
            <View style={styles.leftIconContainer}>
              <CustomerServiceIcon size={28} />
            </View>
            <View>
              <ThemedText>Support Assistant</ThemedText>
              <ThemedText style={{ fontSize: 13, fontWeight: '300' }}>Hello! I'm here to assit you</ThemedText>
            </View>
            <Text style={styles.timeText}>2 Min Ago</Text>
          </View>

          <ThemedText style={{ marginTop: spacingY._40 }}>Ended Chats</ThemedText>
          {list.map((item, index) => (
            <View key={index + item.name} style={[styles.itemContainer, { backgroundColor: Colors[theme].tabbarBg, marginTop: index == 0 ? spacingY._10 : spacingY._15 }]}>
              <View style={styles.leftIconContainer}>
                <CustomerServiceIcon size={28} />
              </View>
              <View>
                <ThemedText style={{ lineHeight: 16 }}>{item.name}</ThemedText>
                <ThemedText style={{ fontSize: 12, fontWeight: '300' }}>{item.message}</ThemedText>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          ))}

          <View style={[styles.buttonContainer, { marginTop: spacingY._30, marginBottom: spacingY._10 }]}>
            <CustomButton
              title="Start Another Chat"
              textStyle={styles.buttonText}
              onPress={() => console.log(
                "I am pressed"
              )}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  )
}

export default CustomerService;

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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._12,
    padding: spacingX._10,
    borderRadius: 15,
    marginTop: 10
  },
  leftIconContainer: {
    backgroundColor: Colors.light.primary,
    borderRadius: 15,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 11,
    fontWeight: '300',
    color: Colors.light.text,
    backgroundColor: Colors.light.secondaryBtn,
    padding: spacingX._3,
    borderRadius: 50,
    paddingHorizontal: spacingX._5,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400'
  },
})