export type Data = {
    id: number;
    image: any;
    title: string;
};

export const data: Data[] = [
    {
        id: 1,
        image: require('../assets/images/onboarding1.png'),
        title: 'Welcome To \nExpense Manager',
    },
    {
        id: 2,
        image: require('../assets/images/onboarding2.png'),
        title: '¿Are You Ready To Take Control Of Your Finances?',
    },
];