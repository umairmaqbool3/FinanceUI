import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const Security = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Security"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.80 : 0.80), backgroundColor: Colors[theme].secondary }]}>

        <ThemedText type='subtitle' style={{ marginVertical: spacingY._15 }}>
          Security
        </ThemedText>

        <TouchableOpacity style={styles.itemView} onPress={() => router.push("/(security)/changePin")}>
          <ThemedText>Change Pin</ThemedText>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Colors[theme].text} />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.itemView}>
          <ThemedText>Fingerprint</ThemedText>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Colors[theme].text} />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.itemView}>
          <ThemedText>Terms And Conditions</ThemedText>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Colors[theme].text} />
        </TouchableOpacity>

        <View style={styles.divider} />

      </View>
    </Screen>
  )
}

export default Security;

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
  itemView: {
    marginVertical: spacingY._20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: Colors.light.secondaryBtn,
    marginVertical: spacingY._10
  }
})