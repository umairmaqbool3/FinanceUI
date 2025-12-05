import Facebook from '@/assets/svgs/Facebook';
import Google from '@/assets/svgs/Google';
import CustomButton from '@/components/CustomButton';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { OtpInput } from "react-native-otp-entry";

const OTPScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: Colors[theme].text }]}>Security Pin</Text>
            </View>

            <View style={[styles.contentContainer, { height: height * 0.76, backgroundColor: Colors[theme].secondary }]}>
                <View style={styles.formContainer}>
                    <ThemedText style={[styles.enterSecurityPinLabel, { color: theme == 'light' ? Colors.light.text : Colors.light.primary }]}>Enter Security Pin</ThemedText>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <OtpInput
                            numberOfDigits={6}
                            focusColor="green"
                            autoFocus={false}
                            hideStick={true}
                            placeholder="******"
                            blurOnFilled={true}
                            disabled={false}
                            type="numeric"
                            secureTextEntry={false}
                            focusStickBlinkingDuration={500}
                            onFocus={() => console.log("Focused")}
                            onBlur={() => console.log("Blurred")}
                            onTextChange={(text) => console.log(text)}
                            onFilled={(text) => console.log(`OTP is ${text}`)}
                            textInputProps={{
                                accessibilityLabel: "One-Time Password",
                            }}
                            textProps={{
                                accessibilityRole: "text",
                                accessibilityLabel: "OTP digit",
                                allowFontScaling: false,
                            }}
                            theme={{
                                containerStyle: { width: width / 1.4, },
                                //     pinCodeContainerStyle: styles.pinCodeContainer,
                                pinCodeTextStyle: { fontSize: 14, color: Colors[theme].text },
                                //     focusStickStyle: styles.focusStick,
                                //     focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                                placeholderTextStyle: { opacity: 0.3, fontSize: 24, marginTop: 8 },
                                filledPinCodeContainerStyle: {
                                    borderRadius: 100,
                                    height: 40,
                                    width: 40,
                                    borderColor: Colors.light.primary,
                                    borderWidth: 2,
                                    marginVertical: spacingY._30
                                },
                                //     disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
                            }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._35, marginBottom: spacingY._15 }}>
                        <CustomButton
                            title="Accept"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            onPress={() => router.push('/changePassword')}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <CustomButton
                            title="Send Again"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
                            onPress={() => router.push('/signup')}
                        />
                    </View>

                    <View style={{ position: 'absolute', bottom: 70, width: '100%', alignItems: 'center' }}>
                        <View style={styles.orContainer}>
                            <ThemedText style={[styles.orText, { color: Colors[theme].text }]}>or sign up with</ThemedText>
                        </View>

                        <View style={styles.socialContainer}>
                            <TouchableOpacity>
                                <Facebook color={theme === 'light' ? '' : Colors.light.secondaryBtn} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Google color={theme === 'light' ? '' : Colors.light.secondaryBtn} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footer}>
                            <ThemedText style={[styles.footerText, { color: Colors[theme].text }]}>Don't have an account? <ThemedText style={[styles.signUpLink, { color: Colors[theme].focusText }]}>Sign Up</ThemedText></ThemedText>
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
};

export default OTPScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        width: '100%',
    },
    enterSecurityPinLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: spacingY._5,
        marginTop: spacingY._10,
        textAlign: 'center',
    },
    resetPasswordText: {
        fontSize: 10,
        marginBottom: spacingY._35,
        marginTop: spacingY._5,
        marginLeft: spacingX._5,
        lineHeight: 15
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: spacingY._5,
        marginTop: spacingY._10,
        marginLeft: spacingX._5,
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
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        marginVertical: spacingY._10,
    },
    fingerprintContainer: {
        alignItems: 'center',
        marginVertical: spacingY._17,
    },
    fingerprintText: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: spacingX._1,
    },
    fingerprintLink: {
        fontWeight: '500',
        fontSize: 13,
    },
    orContainer: {
        alignItems: 'center',
        marginBottom: spacingY._15,
    },
    orText: {
        fontSize: 12,
        marginTop: 10,
        opacity: 0.8
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: spacingY._20,
    },
    socialButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        opacity: 0.8
    },
    signUpLink: {
        fontWeight: '400',
        fontSize: 13,
    },
});