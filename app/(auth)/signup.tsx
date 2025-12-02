import CustomButton from '@/components/CustomButton';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const SignupScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const theme = useColorScheme() ?? 'light';

    const themedColor = { color: Colors[theme].text }

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: Colors[theme].text }]}>Create Account</Text>
            </View>

            <View style={[styles.contentContainer, { height: height * 0.76, backgroundColor: Colors[theme].secondary }]}>
                <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
                    <ThemedText style={[styles.label, themedColor]}>Full Name</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="i.e John Doe"
                            placeholderTextColor={Colors[theme].icon}
                            style={[styles.input, { color: Colors[theme].text }]}
                        />
                    </View>

                    <ThemedText style={[styles.label, themedColor]}>Email</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="example@example.com"
                            placeholderTextColor={Colors[theme].icon}
                            style={[styles.input, { color: Colors[theme].text }]}
                        />
                    </View>

                    <ThemedText style={[styles.label, themedColor]}>Mobile Number</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="+ 123 456 789"
                            placeholderTextColor={Colors[theme].icon}
                            style={[styles.input, { color: Colors[theme].text }]}
                        />
                    </View>

                    <ThemedText style={[styles.label, themedColor]}>Date Of Birth</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="DD / MM / YYYY"
                            placeholderTextColor={Colors[theme].icon}
                            style={[styles.input, { color: Colors[theme].text }]}
                        />
                    </View>

                    <ThemedText style={[styles.label, themedColor]}>Password</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="● ● ● ● ● ● ● ●"
                            placeholderTextColor={Colors.dark.primary}
                            secureTextEntry={!showPassword}
                            style={[styles.input, { color: Colors[theme].text, opacity: 0.3, fontSize: 12 }]}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                        </TouchableOpacity>
                    </View>

                    <ThemedText style={[styles.label, themedColor]}>Confirm Password</ThemedText>
                    <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
                        <TextInput
                            placeholder="● ● ● ● ● ● ● ●"
                            placeholderTextColor={Colors.dark.primary}
                            secureTextEntry={!showPassword}
                            style={[styles.input, { color: Colors[theme].text, opacity: 0.3, fontSize: 12 }]}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors[theme].icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: spacingX._20, marginTop: spacingY._10 }}>
                        <ThemedText style={[styles.agreeText, themedColor]}>
                            By continuing, you agree to
                            {'\n '}
                            <ThemedText style={[styles.termAndPolicyText, themedColor]}>
                                Terms of Service
                            </ThemedText>
                            {' '}
                            and
                            {' '}
                            <ThemedText style={[styles.termAndPolicyText, themedColor]}>
                                Privacy Policy
                            </ThemedText>
                        </ThemedText>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: spacingY._5 }}>
                        <CustomButton
                            title="Sign Up"
                            textStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                            onPress={() => console.log("clcked")}
                        />
                    </View>

                    <View style={styles.footer}>
                        <ThemedText style={[styles.footerText, themedColor]}>
                            Already have an account?{'   '}
                            <ThemedText
                                style={[styles.termAndPolicyText, { color: Colors[theme].focusText }]}
                                onPress={() => router.replace('/login')}
                            >
                                Log In
                            </ThemedText>
                        </ThemedText>
                    </View>

                    <View style={{ height: spacingY._30 }} />
                </ScrollView>
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
        // marginBottom: spacingY._5,
        marginTop: spacingY._5,
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
    agreeText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        marginVertical: spacingY._10,
        lineHeight: 15
    },
    footer: {
        alignItems: 'center',
        marginVertical: spacingY._10,
    },
    footerText: {
        fontSize: 12,
        opacity: 0.8
    },
    termAndPolicyText: {
        fontWeight: '500',
        fontSize: 12,
    },
});