import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet } from 'react-native';

const TransactionScreen = () => {
    const theme = useColorScheme() ?? 'light';
    return (
        <Screen style={{ backgroundColor: Colors[theme].primary, }}>
            <Header
                title="Transaction"
                theme={theme}
            />
        </Screen>
    );
};

export default TransactionScreen;

const styles = StyleSheet.create({});
