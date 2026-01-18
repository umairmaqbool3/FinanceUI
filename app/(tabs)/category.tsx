import EntertainmentIcon from '@/assets/svgs/EntertainmentIcon';
import FoodIcon from '@/assets/svgs/FoodIcon';
import GiftsIcon from '@/assets/svgs/GiftsIcon';
import GroceryIcon from '@/assets/svgs/Grocery';
import MedicineIcon from '@/assets/svgs/MedicineIcon';
import PlusIcon from '@/assets/svgs/PlusIcon';
import RentIcon from '@/assets/svgs/RentIcon';
import SavingsIcon from '@/assets/svgs/SavingsIcon';
import TransportIcon from '@/assets/svgs/Transport';
import BalanceComponent from '@/components/BalanceComponent';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

let items = [
    { name: 'Food', icon: FoodIcon },
    { name: 'Transport', icon: TransportIcon },
    { name: 'Medicine', icon: MedicineIcon },
    { name: 'Groceries', icon: GroceryIcon },
    { name: 'Rent', icon: RentIcon },
    { name: 'Gifts', icon: GiftsIcon },
    { name: 'Savings', icon: SavingsIcon },
    { name: 'Entertainment', icon: EntertainmentIcon },
    { name: 'More', icon: PlusIcon }
]

const CategoryScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const { width, height } = useWindowDimensions();

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            <Header
                title="Categories"
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
                <View style={{ width: '100%' }}>
                    <FlatList
                        data={items}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.itemContainer}>
                                <View style={[styles.itemIconContainer, { backgroundColor: index == 0 ? Colors.light.focusText : '#6DB6FE' }]}>
                                    <item.icon color={Colors.light.white} size={45} />
                                </View>
                                <Text style={{ color: Colors[theme].text, fontWeight: '600' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.name}
                        numColumns={3}
                        contentContainerStyle={{ gap: spacingY._35 }}
                    />
                </View>
            </View>
        </Screen>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    contentContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: spacingX._30,
        paddingTop: spacingY._30,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    iconContainer: {
        backgroundColor: Colors.light.secondaryBtn,
        padding: spacingX._5,
        borderRadius: 50,
    },
    itemContainer: {
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
    },
    itemIconContainer: {
        backgroundColor: Colors.light.focusText,
        padding: spacingX._20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
