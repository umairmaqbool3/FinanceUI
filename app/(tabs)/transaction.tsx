import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const TransactionScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();
    return (
        <Screen style={{ backgroundColor: Colors[theme].primary, }}>
            <Header
                title="Transaction"
                theme={theme}
                leftIcon={<Ionicons name="arrow-back" size={24} color={Colors[theme].text} />}
                rightIcon={<Ionicons name="notifications-outline" size={24} color={Colors[theme].text} />}
                onLeftPress={() => router.replace('/(tabs)')}
                onRightPress={() => console.log('Notifications/Right pressed')}
            />

        </Screen>
    );
};

export default TransactionScreen;

const styles = StyleSheet.create({});
