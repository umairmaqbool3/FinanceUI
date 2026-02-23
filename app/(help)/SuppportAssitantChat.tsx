import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { Colors, Fonts } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const list = [
  {
    message: 'Welcome, I am your virtual assistant',
    role: 'assistant',
  },
  {
    message: 'How can I help you today?',
    role: 'assistant',
  },
  {
    message: 'Hello! I have a question. How can I record my expenses by date?',
    role: 'user',
  },
  {
    message: 'Response to your request:\nYou can register expenses in the top menu of the homepage.',
    role: 'assistant',
  },
  {
    message: 'Enter the purchase information, including the date, etc',
    role: 'assistant',
  },
  {
    message: 'OK, thanks a lot',
    role: 'user',
  },
  {
    message: 'It was a pleasure to acccommodate your request. See you soon!',
    role: 'assistant',
  },

]

const SupportAssitantChat = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Support Assitant ', icon: '' });

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
        <SegmentedControl
          data={[{ name: 'Support Assitant ', icon: '' }, { name: 'Help Center', icon: '' }]}
          onPress={item => setSelectedPeriod(item)}
          selected={selectedPeriod}
          width={width - 55}
          height={55}
        />
        <View style={{ height: height * 0.6 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {list.map((item, index) => (
              <View key={index}
                style={[styles.chatView, {
                  backgroundColor: item.role === 'user' ? Colors.light.primary : Colors.light.secondaryBtn,
                  alignSelf: item.role === 'user' ? 'flex-end' : 'flex-start',
                }]}
              >
                <Text style={{ fontSize: 12, fontFamily: Fonts.light }}>{item.message}</Text>
              </View>
            ))}

          </ScrollView>
        </View>

        <View style={styles.chatContainer}>
          <TouchableOpacity style={styles.chatIconContainer}>
            <SimpleLineIcons name="camera" size={16} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Write Here..."
            placeholderTextColor={Colors.light.text}
            style={styles.chatInput}
          />
          <TouchableOpacity style={styles.chatIconContainer}>
            <SimpleLineIcons name="microphone" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatIconContainer}>
            <Feather name="send" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}

export default SupportAssitantChat;

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
  chatView: {
    padding: spacingX._10,
    paddingHorizontal: spacingX._15,
    borderRadius: 50,
    marginVertical: spacingY._7,
    width: '75%',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10,
    backgroundColor: Colors.light.primary,
    padding: spacingX._10,
    borderRadius: 15,
  },
  chatIconContainer: {
    backgroundColor: Colors.light.secondaryBtn,
    padding: spacingY._7,
    borderRadius: 12,
  },
  chatInput: {
    backgroundColor: Colors.light.secondaryBtn,
    padding: spacingY._7,
    borderRadius: 12,
    flex: 1,
    fontSize: 12,
    fontFamily: Fonts.light,
  }
})