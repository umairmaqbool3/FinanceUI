import CustomButton from '@/components/CustomButton';
import CustomModal from '@/components/CustomModal';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors, Fonts } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const DeleteAccount = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.85 : 0.90), backgroundColor: Colors[theme].secondary }]}>

        <ThemedText style={[styles.title, { color: Colors[theme].text }]}>
          Are You Sure You Want To Delete Your Account?
        </ThemedText>

        <View style={{
          backgroundColor: Colors.dark.secondaryBtn,
          width: '100%',
          height: (height * (Platform.OS == 'ios' ? 0.85 : 0.90)) - 1000, // '30%',
          borderRadius: 25,
          marginVertical: spacingY._15,
          paddingVertical: spacingX._15,
          paddingHorizontal: spacingX._30,
        }}
        >
          <Text style={{ fontFamily: Fonts.light, fontSize: 12 }}>
            This action will permanently delete all of your data, and you will not be able to recover it. Please keep the following in mind before proceeding:
          </Text>
          <View style={[styles.bulletPoint, { marginTop: spacingY._15 }]}>
            <Text>•</Text>
            <Text style={styles.bulletPointText}>All your expenses, income and associated transactions will be eliminated.</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text>•</Text>
            <Text style={styles.bulletPointText}>You will not be able to access your account or any related information.</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text>•</Text>
            <Text style={styles.bulletPointText}>This action cannot be undone.</Text>
          </View>
        </View>

        <ThemedText style={[styles.title, { color: Colors[theme].text, marginHorizontal: spacingY._25, marginBottom: spacingY._25 }]}>
          Please Enter Your Password To Confirm Deletion Of Your Account.
        </ThemedText>

        <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
          <TextInput
            placeholder="● ● ● ● ● ● ● ●"
            placeholderTextColor={Colors.dark.primary}
            secureTextEntry={!showPassword}
            style={[styles.input, { color: Colors.light.text, opacity: 0.5 }]}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, { marginTop: spacingY._30, marginBottom: spacingY._10 }]}>
          <CustomButton
            title="Yes, Delete Account"
            textStyle={styles.buttonText}
            onPress={() => setModalVisible(true)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Cancel"
            textStyle={styles.buttonText}
            containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
            onPress={() => router.back()}
          />
        </View>

        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title="Delete Account"
        />

      </View>

    </Screen >
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
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: spacingY._5,
    marginHorizontal: spacingX._40,
  },
  bulletPoint: {
    flexDirection: 'row',
    gap: spacingX._15,
    marginVertical: spacingY._5,
  },
  bulletPointText: {
    fontFamily: Fonts.light,
    fontSize: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '300'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})