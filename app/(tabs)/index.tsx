import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

const HomeScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <View style={styles.headerContainer}>

            </View>

            <View style={[styles.contentContainer, { height: height * 0.65, backgroundColor: Colors[theme].secondary }]}>

            </View>
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
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