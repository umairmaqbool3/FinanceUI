import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface PeriodSelectorProps {
    options: string[];
    selected: string;
    onSelect: (option: string) => void;
}

const PeriodSelector = ({ options, selected, onSelect }: PeriodSelectorProps) => {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={[styles.container, { backgroundColor: Colors[theme].tabbarBg }]}>
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
                            { color: theme === 'light' ? Colors.light.text : Colors.light.white },
                            isSelected ? styles.activeText : styles.inactiveText,
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
        borderRadius: 15,
        padding: 4,
        marginVertical: spacingY._15,
        alignSelf: 'center',
        height: spacingY._50,
        paddingHorizontal: spacingX._10,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    activeTab: {
        backgroundColor: Colors.light.primary,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
    },
    activeText: {
        color: Colors.light.text,
    },
    inactiveText: {
        opacity: 0.8,
    },
});
