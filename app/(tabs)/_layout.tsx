import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
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
                        backgroundColor: Colors[theme].secondaryBtn,
                        borderTopWidth: 0,
                        elevation: 0,
                        height: Platform.OS === 'ios' ? 88 : 60,
                        paddingBottom: Platform.OS === 'ios' ? 24 : 10,
                        borderRadius: 60,
                        paddingTop: 12
                    },
                    tabBarActiveTintColor: Colors[theme].primary,
                    tabBarInactiveTintColor: Colors[theme].icon,
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={26} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: 'Search',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="transaction"
                    options={{
                        title: 'Transaction',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
