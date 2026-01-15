import BalanceComponent from '@/components/BalanceComponent';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

const SearchScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const { width, height } = useWindowDimensions();
    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <Header
                title="Analysis"
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

            <BalanceComponent />

            <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.57 : 0.57), backgroundColor: Colors[theme].secondary }]}>

            </View>
        </Screen>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    contentContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: spacingX._30,
        paddingTop: spacingY._20,
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
