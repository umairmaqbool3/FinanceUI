import DotInCircle from '@/assets/svgs/DotInCircle';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const ChangePassword = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showCurrentPin, setShowCurrentPin] = useState(false);
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [passordChangedSuccessfully, setPassordChangedSuccessfully] = useState(false);

  const handlePasswordChange = () => {
    setPassordChangedSuccessfully(true);
    setTimeout(() => {
      setPassordChangedSuccessfully(false);
      router.back();
    }, 1500);
  };

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      {passordChangedSuccessfully ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DotInCircle color={Colors.light.secondaryBtn} />
          <ThemedText style={[styles.successText]}>Password Has Been {'\n'}Changed Successfully</ThemedText>
        </View>
      ) : (
        <>
          <Header
            title="Password Settings"
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

            <View style={styles.formContainer}>
              <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Current Password</ThemedText>
              <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                <TextInput
                  placeholder="●  ●  ●  ●  ●  ●  ●"
                  placeholderTextColor={Colors[theme].icon}
                  value={currentPin}
                  onChangeText={setCurrentPin}
                  secureTextEntry={!showCurrentPin}
                  inputMode='numeric'
                  style={[styles.input, { color: Colors.light.text, opacity: !showCurrentPin ? 0.3 : 0.6 }]}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowCurrentPin(!showCurrentPin)}>
                  <Ionicons name={!showCurrentPin ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                </TouchableOpacity>
              </View>

              <ThemedText style={[styles.label, { color: Colors[theme].text }]}>New Password</ThemedText>
              <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                <TextInput
                  placeholder="●  ●  ●  ●  ●  ●  ●"
                  placeholderTextColor={Colors.dark.primary}
                  secureTextEntry={!showNewPin}
                  value={newPin}
                  onChangeText={setNewPin}
                  inputMode='numeric'
                  style={[styles.input, { color: Colors.light.text, opacity: !showNewPin ? 0.3 : 0.6 }]}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowNewPin(!showNewPin)}>
                  <Ionicons name={!showNewPin ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                </TouchableOpacity>
              </View>

              <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Confirm Password</ThemedText>
              <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                <TextInput
                  placeholder="●  ●  ●  ●  ●  ●  ●"
                  placeholderTextColor={Colors.dark.primary}
                  secureTextEntry={!showConfirmPin}
                  value={confirmPin}
                  onChangeText={setConfirmPin}
                  inputMode='numeric'
                  style={[styles.input, { color: Colors.light.text, opacity: !showConfirmPin ? 0.3 : 0.6 }]}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPin(!showConfirmPin)}>
                  <Ionicons name={!showConfirmPin ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                </TouchableOpacity>
              </View>

              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._35 }}>
                <CustomButton
                  title="Change Password"
                  textStyle={{ color: 'black', fontSize: 14 }}
                  onPress={() => handlePasswordChange()}
                />
              </View>
            </View>
          </View>
        </>
      )}

    </Screen>
  )
}

export default ChangePassword;

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
})