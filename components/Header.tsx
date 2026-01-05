
import { Colors } from '@/constants/theme';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface HeaderProps {
    title?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    style?: StyleProp<ViewStyle>;
    theme: string
}

// How to use this component
// <Header
//     title="Home"
//     leftIcon={<Ionicons name="menu" size={24} color={Colors[theme].text} />}
//     rightIcon={<Ionicons name="notifications-outline" size={24} color={Colors[theme].text} />}
//     onLeftPress={() => console.log('Menu/Left pressed')}
//     onRightPress={() => console.log('Notifications/Right pressed')}
// />

const Header: React.FC<HeaderProps> = ({
    title,
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress,
    style,
    theme
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.leftContainer}>
                {leftIcon && (
                    <TouchableOpacity onPress={onLeftPress} disabled={!onLeftPress}>
                        {leftIcon}
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.centerContainer}>
                {title && <Text style={[styles.title, { color: Colors[theme].text }]}>{title}</Text>}
            </View>

            <View style={styles.rightContainer}>
                {rightIcon && (
                    <TouchableOpacity onPress={onRightPress} disabled={!onRightPress}>
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        // height: 60, // Optional: fixed height
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});