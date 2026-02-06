import HelpIcon from '@/assets/svgs/HelpIcon';
import LogoutIcon from '@/assets/svgs/LogoutIcon';
import ProfileIcon from '@/assets/svgs/Profile';
import SecurityIcon from '@/assets/svgs/SecurityIcon';
import SettingIcon from '@/assets/svgs/SettingIcon';
import CustomButton from '@/components/CustomButton';
import CustomSwitch from '@/components/CustomSwitch';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Platform, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';

const data = [
  {
    icon: <ProfileIcon color={Colors.light.white} />,
    title: 'Edit Profile',
  },
  {
    icon: <SecurityIcon color={Colors.light.white} />,
    title: 'Security',
  },
  {
    icon: <SettingIcon color={Colors.light.white} />,
    title: 'Setting',
  },
  {
    icon: <HelpIcon color={Colors.light.white} />,
    title: 'Help',
  },
  {
    icon: <LogoutIcon color={Colors.light.white} size={26} />,
    title: 'Logout',
  },
]

const EditProfileScreen = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Edit My Profile"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.78 : 0.78), backgroundColor: Colors[theme].secondary }]}>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ marginTop: - (height / 7) * 0.65 }}>
            <Image source={require('@/assets/images/profile.png')} style={{ width: 100, height: 100, marginBottom: 10 }} />
            <ThemedText type='defaultSemiBold'>John Smith</ThemedText>
            <ThemedText style={{ fontSize: 12, textAlign: 'center', marginTop: -5 }}>ID: 25030024</ThemedText>
          </View>
        </View>

        <ThemedText type='subtitle' style={{ marginTop: spacingY._20 }}>
          Account Settings
        </ThemedText>

        <View>
          <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Username</ThemedText>
          <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
            <TextInput
              placeholder="John Smith"
              placeholderTextColor={Colors[theme].icon}
              style={[styles.input, { color: Colors[theme].text }]}
            />
          </View>
        </View>

        <View>
          <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Phone</ThemedText>
          <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
            <TextInput
              placeholder="+44 555 5555 55"
              placeholderTextColor={Colors[theme].icon}
              inputMode='numeric'
              style={[styles.input, { color: Colors[theme].text }]}
            />
          </View>
        </View>

        <View>
          <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Email Address</ThemedText>
          <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
            <TextInput
              placeholder="johnsmith@example.com"
              placeholderTextColor={Colors[theme].icon}
              inputMode='email'
              style={[styles.input, { color: Colors[theme].text }]}
            />
          </View>
        </View>

        <View style={styles.switchContainers}>
          <ThemedText>
            Push Notification
          </ThemedText>

          <CustomSwitch
            value={enabled}
            onValueChange={setEnabled}
          />

        </View>

        <View style={styles.switchContainers}>
          <ThemedText>
            Turn Dark Theme
          </ThemedText>

          <CustomSwitch
            value={enabled}
            onValueChange={setEnabled}
          />

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._25 }}>
          <CustomButton
            title="Update Profile"
            textStyle={{ color: 'black', fontSize: 14, }}
            onPress={() => router.back()}
          />
        </View>


      </View>
    </Screen>
  );
};

export default EditProfileScreen;

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
    height: 35,
    marginBottom: spacingY._5,
  },
  input: {
    flex: 1,
    // height: '80%',
    fontSize: 14,
    paddingLeft: spacingX._7,
  },
  switchContainers: {
    marginVertical: spacingY._20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
