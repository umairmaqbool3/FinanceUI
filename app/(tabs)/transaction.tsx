import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

const TransactionScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();
    const { width, height } = useWindowDimensions();

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

            <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.55 : 0.55), backgroundColor: Colors[theme].secondary }]}>

            </View>

        </Screen>
    );
};

export default TransactionScreen;

const styles = StyleSheet.create({
    contentContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: spacingX._30,
        paddingTop: spacingY._40,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
