/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Button } from 'react-native';
import { AppConsumer } from '../app_context_provider';
import { LightTheme, DarkTheme } from '../styles/themes';

export function SettingsScreen() {
    return (
        <AppConsumer>
            {appConsumer => (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: appConsumer.theme.colors.primary }}>
                    <Button
                        title="Switch Theme"
                        onPress={() => {
                            appConsumer.updateTheme(appConsumer.theme === LightTheme ? DarkTheme : LightTheme);
                        }}
                    />
                </View>)}
        </AppConsumer>
    );
}
