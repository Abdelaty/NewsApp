/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import * as React from 'react';

import { DetailedNews } from '../screens/news_details';
import { useTranslation } from 'react-i18next';
import '../assets/i18n/i18n';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
    const { t, i18n } = useTranslation();

    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name={t('news')} component={HomeScreen} />
            <HomeStack.Screen name={'Detailed News'} component={DetailedNews} />
        </HomeStack.Navigator>
    );
}
