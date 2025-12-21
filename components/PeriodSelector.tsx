import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface PeriodSelectorProps {
    options: string[];
    selected: string;
    onSelect: (option: string) => void;
}

const PeriodSelector = ({ options, selected, onSelect }: PeriodSelectorProps) => {
    return (
        <View style={styles.container}>
            {options.map((option) => {
                const isSelected = selected === option;
                return (
                    <Pressable
                        key={option}
                        onPress={() => onSelect(option)}
                        style={[
                            styles.tab,
                            isSelected && styles.activeTab
                        ]}
                    >
                        <Text style={[
                            styles.text,
                            isSelected ? styles.activeText : styles.inactiveText
                        ]}>
                            {option}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default PeriodSelector;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        borderRadius: 30,
        padding: 4,
        marginHorizontal: spacingX._20,
        marginVertical: spacingY._10,
        alignSelf: 'center',
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: Colors.light.white,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
    },
    activeText: {
        color: Colors.light.text,
    },
    inactiveText: {
        color: Colors.light.white, // Assuming dark theme background context broadly
        opacity: 0.8,
    },
});
