import './Base/polyfill';

export {default as AppView} from './View';
export {default as AppScrollView} from './ScrollView';

export {default as AppSpinner} from './Indicator';
export {default as AppText} from './Text';
export {default as AppIcon} from './Icon';
export {default as AppButton} from './Button';
export {default as AppImage} from './Image';
export {default as AppList} from './List';
export {default as AppInput} from './Input';
export {default as AppNavigation} from './Navigation';
export {registerCustomIconType} from './utils/icon';
export {getColors, getColor, getTheme, getFonts} from './Theme';

export {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  moderateScale,
  windowWidth,
  windowHeight,
  screenWidth,
  screenHeight,
  statusBarHeight,
} from './utils/responsiveDimensions';
export {default as LocaleEn} from './defaults/en.json';
export {default as LocaleAr} from './defaults/ar.json';
export {default as AppStarRating} from './AppStarRating';
export {default as TouchableView} from './TouchableView';
