import { webLightTheme, webDarkTheme, Theme } from '@fluentui/react-components';
import { lightPalette, darkPalette } from './colors';

export const customLightTheme: Theme = {
  ...webLightTheme,
  colorNeutralBackground1: lightPalette.bgPanel,
  colorNeutralBackground2: lightPalette.bgWindow,
  colorNeutralForeground1: lightPalette.textMain,
  colorNeutralForeground2: lightPalette.textMuted,
  colorBrandBackground: lightPalette.primaryGreen,
  colorBrandBackgroundHover: '#00732F',
  colorBrandBackgroundPressed: '#005C25',
};

export const customDarkTheme: Theme = {
  ...webDarkTheme,
  colorNeutralBackground1: darkPalette.bgPanel,
  colorNeutralBackground2: darkPalette.bgWindow,
  colorNeutralForeground1: darkPalette.textMain,
  colorNeutralForeground2: darkPalette.textMuted,
  colorBrandBackground: darkPalette.primaryGreen,
  colorBrandBackgroundHover: '#0F823F',
  colorBrandBackgroundPressed: '#0D6D34',
};