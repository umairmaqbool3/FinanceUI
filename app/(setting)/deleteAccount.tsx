import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

const DeleteAccount = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Delete Account"
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

        <ThemedText style={[styles.title, { color: Colors[theme].text }]}>
          Are You Sure You Want To Delete Your Account?
        </ThemedText>

      </View>

    </Screen>
  )
}

export default DeleteAccount;

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
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: spacingY._5,
    marginTop: spacingY._10,
    marginLeft: spacingX._10,
  },
  inputContainer: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
    height: 42,
    marginBottom: spacingY._5,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    paddingLeft: spacingX._7,
  },
  eyeIcon: {
    padding: 5,
  },
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.secondaryBtn,
    marginTop: spacingY._20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: spacingY._5,
    marginHorizontal: spacingX._20,
  },
})