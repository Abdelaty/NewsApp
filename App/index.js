/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../App/screens/setting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContextProvider, AppConsumer } from './app_context_provider';
import { LightTheme } from '../App/styles/themes';
import { useTranslation } from 'react-i18next';
import { HomeStackScreen } from '../App/navigation/navigation';
import './assets/i18n/i18n';

export const ThemeContext = React.createContext();

const Tab = createBottomTabNavigator();

export default function App() {
    const { t, i18n } = useTranslation();


    return (
        <AppContextProvider>
            <AppConsumer>
                {appConsumer => (<NavigationContainer theme={appConsumer.theme === LightTheme ? DefaultTheme : DarkTheme}>
                    <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === t('settings')) {
                                iconName = focused ? 'settings' : 'settings-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}>
                        <Tab.Screen name={'home'} options={{headerShown: false}} component={HomeStackScreen} />
                        <Tab.Screen name={t('settings')} component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
                )}
            </AppConsumer>
        </AppContextProvider>

    );
}
