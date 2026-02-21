import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <SegmentedControl
            data={[{ name: 'Support Assitant ', icon: '' }, { name: 'Help Center', icon: '' }]}
            onPress={item => setSelectedPeriod(item)}
            selected={selectedPeriod}
            width={width - 55}
            height={55}
          />
        </ScrollView>
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

})