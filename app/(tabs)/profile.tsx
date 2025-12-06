import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ProfileScreen = () => {
    const theme = useColorScheme() ?? 'light';
    return (
        <Screen style={{ backgroundColor: Colors[theme].primary, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors[theme].text, fontSize: 20 }}>Profile Screen</Text>
        </Screen>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
