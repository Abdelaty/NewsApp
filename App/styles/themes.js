/* eslint-disable prettier/prettier */
import {DefaultTheme} from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fafafa',
    text:'#000000',
    secondry:'#FFFFFF',
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c2c2c',
    text:'#FFFFFF',
    secondry:'#5c5c5c',

  },
};
