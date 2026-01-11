import AnalysisIcon from '@/assets/svgs/AnalysisIcon';
import CategoryIcon from '@/assets/svgs/CategoryIcon';
import HomeIcon from '@/assets/svgs/HomeIcon';
import ProfileIcon from '@/assets/svgs/Profile';
import TransactionIcon from '@/assets/svgs/TransactionIcon';
import AnimatedTabIcon from '@/components/AnimatedTabIcon';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const theme = colorScheme ?? 'light';

    return (
        <View style={{ backgroundColor: Colors[theme].secondary, flex: 1 }}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: Colors[theme].tabbarBg,
                        borderTopWidth: 0,
                        elevation: 0,
                        height: Platform.OS === 'ios' ? 95 : 70,
                        paddingBottom: Platform.OS === 'ios' ? 20 : 10,
                        borderRadius: 60,
                        paddingTop: 14,
                        paddingHorizontal: 15,
                    },
                    tabBarActiveTintColor: Colors[theme].primary,
                    tabBarInactiveTintColor: Colors[theme].icon,
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <AnimatedTabIcon focused={focused} icon={HomeIcon} theme={theme} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <AnimatedTabIcon focused={focused} icon={AnalysisIcon} theme={theme} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="transaction"
                    options={{
                        title: 'Transaction',
                        tabBarIcon: ({ focused }) => (
                            <AnimatedTabIcon focused={focused} icon={TransactionIcon} theme={theme} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="category"
                    options={{
                        title: 'Category',
                        tabBarIcon: ({ focused }) => (
                            <AnimatedTabIcon focused={focused} icon={CategoryIcon} theme={theme} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <AnimatedTabIcon focused={focused} icon={ProfileIcon} theme={theme} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
