/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import '../assets/i18n/i18n';

import { useState } from 'react';
import { View, Button } from 'react-native';
import { AppConsumer } from '../app_context_provider';
import { useTranslation } from 'react-i18next';
import { LightTheme, DarkTheme } from '../styles/themes';
// import { I18nManager } from 'react-native';
export const SettingsScreen = () => {
    const { t, i18n } = useTranslation();

    const [currentLanguage, setLanguage] = useState('en');

    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };

    return (
        <AppConsumer>
            {appConsumer => (
                <>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: appConsumer.theme.colors.primary,
                        }}>
                        <Button
                            title={t('change_theme')}
                            onPress={() => {
                                appConsumer.updateTheme(
                                    appConsumer.theme === LightTheme ? DarkTheme : LightTheme,
                                );
                            }}
                        />

                        <Button
                            title={t('change_language')}
                            onPress={() => {
                                changeLanguage(currentLanguage === 'en' ? 'ar' : 'en');
                                // I18nManager.forceRTL(true);
                                // RNRestart.Restart();
                                // I18nManager.forceRTL(true);
                                // console.log('now arabic ' + I18nManager.isRTL);
                                // } else {
                                //   I18nManager.forceRTL(false);
                                //   console.log('now english ' + I18nManager.isRTL);
                                //   RNRestart.Restart();
                                // }
                                // RNRestart.Restart();
                                // console.log(I18nManager.isRTL);
                            }}
                        />
                    </View>
                </>
            )}
        </AppConsumer>
    );
};
