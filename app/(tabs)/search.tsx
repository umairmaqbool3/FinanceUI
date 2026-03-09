import CalenderIcon from '@/assets/svgs/CalenderIcon';
import BalanceComponent from '@/components/BalanceComponent';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";

const data = [
    { value: 5000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Jan' },
    { value: 7000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    { value: 11000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Feb' },
    { value: 12000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    { value: 11000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Mar' },
    { value: 10000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    { value: 13000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Apr' },
    { value: 9000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    { value: 7000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'May' },
    { value: 7800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];

const SearchScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const { width, height } = useWindowDimensions();
    const [selectedPeriod, setSelectedPeriod] = React.useState({ name: 'Daily ', icon: '' });
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
                <SegmentedControl
                    data={[{ name: 'Daily ', icon: '' }, { name: 'Weekly', icon: '' }, { name: 'Monthly', icon: '' }, { name: 'Yearly', icon: '' }]}
                    onPress={item => setSelectedPeriod(item)}
                    selected={selectedPeriod}
                    width={width - 55}
                    height={55}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingRight: 7 }}>
                    <View
                        style={{
                            margin: 6,
                            padding: 25,
                            borderRadius: 40,
                            width: '100%',
                            backgroundColor: Colors.light.secondaryBtn,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                            <Text style={{ color: Colors.light.text, fontSize: 14, fontWeight: 'bold' }}>
                                Income & Expenses
                            </Text>
                            <View style={{ flexDirection: 'row', gap: spacingX._5 }}>
                                <View style={styles.rightIconContainer}>
                                    <Feather name="search" size={18} color="black" />
                                </View>
                                <View style={styles.rightIconContainer}>
                                    <CalenderIcon size={18} />
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <BarChart
                                data={data}
                                barWidth={8}
                                initialSpacing={15}
                                spacing={25}
                                barBorderRadius={8}
                                yAxisThickness={0}
                                xAxisType={'solid'}
                                xAxisColor={'black'}
                                yAxisTextStyle={{ color: Colors.light.focusText }}
                                yAxisOffset={1}
                                maxValue={15000}
                                noOfSections={4}
                                yAxisLabelTexts={['', '1k', '5k', '10k', '15k']}
                                labelWidth={40}
                                xAxisLabelTextStyle={{ color: Colors.light.text, textAlign: 'center' }}
                                backgroundColor={Colors.light.secondaryBtn}
                            />
                        </View>
                    </View>
                </ScrollView>

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
    rightIconContainer: {
        backgroundColor: Colors.light.primary,
        borderRadius: 12,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
