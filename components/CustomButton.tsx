import { Colors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({
    title = 'Button',
    onPress = () => { },
    backgroundColor = Colors.light.primary,
    width = 200,
    containerStyle = {},
    textStyle = {},
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                { backgroundColor, width },
                containerStyle
            ]}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
});
