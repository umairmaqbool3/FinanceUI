import Facebook from '@/assets/svgs/Facebook';
import Google from '@/assets/svgs/Google';
import CustomButton from '@/components/CustomButton';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const SignupScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const theme = useColorScheme() ?? 'light';

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: Colors[theme].text }]}>Create Account</Text>
            </View>

            <View style={[styles.contentContainer, { height: height * 0.76, backgroundColor: Colors[theme].secondary }]}>
                <View style={styles.formContainer}>
                    <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Username Or Email</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="example@example.com"
                            placeholderTextColor={Colors[theme].icon}
                            style={[styles.input, { color: Colors[theme].text }]}
                        />
                    </View>

                    <ThemedText style={[styles.label, { color: Colors[theme].text }]}>Password</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="● ● ● ● ● ● ● ●"
                            placeholderTextColor={Colors.dark.primary}
                            secureTextEntry={!showPassword}
                            style={[styles.input, { color: Colors[theme].text, opacity: 0.3 }]}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._35 }}>
                        <CustomButton
                            title="Log In"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            onPress={() => console.log("clcked")}
                        />
                    </View>

                    <TouchableOpacity>
                        <ThemedText style={[styles.forgotPasswordText, { color: Colors[theme].text }]}>Forgot Password?</ThemedText>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <CustomButton
                            title="Sign Up"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
                            onPress={() => console.log("clcked")}
                        />
                    </View>

                    <View style={styles.fingerprintContainer}>
                        <ThemedText style={[styles.fingerprintText, { color: Colors[theme].text }]}>
                            Use{' '}
                            <ThemedText style={[styles.fingerprintLink, { color: Colors[theme].focusText }]}>Fingerprint</ThemedText>
                            {' '}To Access
                        </ThemedText>
                    </View>

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
        </Screen>
    );
};

export default SignupScreen;

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
    },
    formContainer: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: spacingY._5,
        marginTop: spacingY._10,
        marginLeft: spacingX._10,
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