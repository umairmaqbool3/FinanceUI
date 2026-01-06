import AnalysisIcon from '@/assets/svgs/AnalysisIcon';
import CategoryIcon from '@/assets/svgs/CategoryIcon';
import HomeIcon from '@/assets/svgs/HomeIcon';
import ProfileIcon from '@/assets/svgs/Profile';
import TransactionIcon from '@/assets/svgs/TransactionIcon';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const theme = colorScheme ?? 'light';

    const activeItemStyle = {
        borderRadius: 20,
        padding: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

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
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={[{
                                    backgroundColor: focused ? Colors.light.primary : 'transparent',
                                }, activeItemStyle as any]}>
                                <HomeIcon theme={theme} />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: 'Search',
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={[{
                                    backgroundColor: focused ? Colors.light.primary : 'transparent',
                                }, activeItemStyle as any]}>
                                <AnalysisIcon theme={theme} />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="transaction"
                    options={{
                        title: 'Transaction',
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={[{
                                    backgroundColor: focused ? Colors.light.primary : 'transparent',
                                }, activeItemStyle as any]}>
                                <TransactionIcon theme={theme} />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="category"
                    options={{
                        title: 'Category',
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={[{
                                    backgroundColor: focused ? Colors.light.primary : 'transparent',
                                }, activeItemStyle as any]}>
                                <CategoryIcon theme={theme} />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={[{
                                    backgroundColor: focused ? Colors.light.primary : 'transparent',
                                }, activeItemStyle as any]}>
                                <ProfileIcon theme={theme} />
                            </View>
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
