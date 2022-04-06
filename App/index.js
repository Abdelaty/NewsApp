/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../App/screens/setting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NewsScreen } from '../App/screens/home';
import { AppContextProvider, AppConsumer } from './app_context_provider';
import { LightTheme } from '../App/styles/themes';
import './assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

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
                            if (route.name === t('news')) {
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
                        <Tab.Screen name={t('news')} component={NewsScreen} />
                        <Tab.Screen name={t('settings')} component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
                )}
            </AppConsumer>
        </AppContextProvider>

    );
}
