import HelpIcon from '@/assets/svgs/HelpIcon';
import LogoutIcon from '@/assets/svgs/LogoutIcon';
import ProfileIcon from '@/assets/svgs/Profile';
import SecurityIcon from '@/assets/svgs/SecurityIcon';
import SettingIcon from '@/assets/svgs/SettingIcon';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';

const data = [
    {
        icon: <ProfileIcon color={Colors.light.white} />,
        title: 'Edit Profile',
        onPress: () => router.push('/(profile)/edit_profile'),
    },
    {
        icon: <SecurityIcon color={Colors.light.white} />,
        title: 'Security',
        onPress: () => router.push('/(profile)/security'),
    },
    {
        icon: <SettingIcon color={Colors.light.white} />,
        title: 'Setting',
        onPress: () => router.push('/(profile)/setting'),
    },
    {
        icon: <HelpIcon color={Colors.light.white} />,
        title: 'Help',
        onPress: () => router.push('/(profile)/help'),
    },
    {
        icon: <LogoutIcon color={Colors.light.white} size={26} />,
        title: 'Logout',
    },
]

const ProfileScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const { width, height } = useWindowDimensions();
    const router = useRouter();

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <Header
                title="Profile"
                theme={theme}
                leftIcon={<Ionicons name="arrow-back" size={24} color={Colors[theme].text} />}
                rightIcon={<View style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={20} />
                </View>}
                onLeftPress={() => router.replace('/(tabs)')}
                onRightPress={() => console.log('Notifications/Right pressed')}
                style={{
                    marginHorizontal: spacingX._12,
                    marginBottom: -spacingY._20,
                }}
            />

            <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.65 : 0.75), backgroundColor: Colors[theme].secondary }]}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginTop: - (height / 7) * 0.65 }}>
                        <Image source={require('@/assets/images/profile.png')} style={{ width: 100, height: 100, marginBottom: 10 }} />
                        <ThemedText type='defaultSemiBold'>John Smith</ThemedText>
                    </View>
                </View>

                <View style={{ marginTop: spacingY._45 }}>
                    {data.map((item, index) => (
                        <Pressable key={item.title} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 18, marginBottom: spacingY._30 }} onPress={item?.onPress}>
                            <View style={{ backgroundColor: Colors.light.lightBlue, borderRadius: 20, padding: 12, width: 53, height: 53, justifyContent: 'center', alignItems: 'center' }}>
                                {item.icon}
                            </View>
                            <ThemedText type='default'>{item.title}</ThemedText>
                        </Pressable>
                    ))}
                </View>
            </View>
        </Screen>
    );
};

export default ProfileScreen;

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
});
