import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';

let options = [
  {
    icon: <Ionicons name="notifications-outline" size={18} />,
    title: 'Notification Settings',
    onPress: () => router.push('/(setting)/notificationSetting'),
  },
  {
    icon: <Foundation name="key" size={18} />,
    title: 'Password Settings',
    onPress: () => router.push('/(setting)/changePassword'),
  },
  {
    icon: <FontAwesome name="user-o" size={16} color="black" />,
    title: 'Delete Account',
    onPress: () => router.push('/(setting)/deleteAccount'),
  },
]

const Setting = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Settings"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.85 : 0.85), backgroundColor: Colors[theme].secondary }]}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionContainer} onPress={item.onPress}>
            <View style={styles.optionLeft}>
              <View style={styles.leftIconContainer}>
                {item.icon}
              </View>
              <ThemedText style={styles.optionTitle}>{item.title}</ThemedText>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color={Colors[theme].text} />
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  )
}

export default Setting

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
    paddingVertical: spacingY._10,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._12,
  },
  optionTitle: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '300',
  }
})