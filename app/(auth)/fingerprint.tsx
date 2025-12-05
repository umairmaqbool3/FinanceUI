import FingerPrint from '@/assets/svgs/FingerPrint';
import CustomButton from '@/components/CustomButton';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const FingerprintScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: Colors[theme].text }]}>Security Fingerprint</Text>
            </View>

            <View style={[styles.contentContainer, { height: height * 0.76, backgroundColor: Colors[theme].secondary }]}>
                <View style={styles.formContainer}>

                    <FingerPrint />

                    <ThemedText style={[styles.label, { color: theme == 'light' ? Colors[theme].text : Colors.light.primary }]}>Use Fingerprint To Access</ThemedText>
                    <ThemedText style={[styles.orText, { color: Colors[theme].text }]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </ThemedText>

                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <CustomButton
                            title="Use Touch Id"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            width={width * 0.8}
                            containerStyle={{ backgroundColor: Colors.light.secondaryBtn, marginTop: spacingY._40 }}
                            onPress={() => router.push('/login')}
                        />
                    </View>

                    <View style={styles.orContainer}>
                        <ThemedText style={[styles.orText, { color: Colors[theme].text }]}>¿Or prefer use pin code?</ThemedText>
                    </View>

                </View>
            </View>
        </Screen>
    );
};

export default FingerprintScreen;

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
        paddingTop: spacingY._60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: spacingY._5,
        marginTop: spacingY._50,
        marginLeft: spacingX._10,
    },
    orContainer: {
        alignItems: 'center',
        marginTop: spacingY._15,
    },
    orText: {
        fontSize: 11,
        marginVertical: spacingY._10,
        lineHeight: 15,
        marginHorizontal: spacingX._10,
        textAlign: 'center',
    },

});