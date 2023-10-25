import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { HOMENAVIGATOR } from '..';
import { Images } from '../../assets/constants/global.images';
import StatusBarWhite from '../../components/StatusBarWhite';
import { height, width } from '../../utils/metrics';

const LaunchScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const flash_timer = setTimeout(() => {
      nextFn();
    }, 3000);

    return () => {
      clearTimeout(flash_timer);
    }
  }, []);

  const nextFn = () => {
      navigation.navigate(HOMENAVIGATOR);
  };

  return (
    <View onTouchEnd={nextFn}>
      <StatusBarWhite />
      <Image source={Images.splashScreen} style={LaunchScreenStyles.LogoImg} />
    </View>
  )
}

export default LaunchScreen

const LaunchScreenStyles = StyleSheet.create({
  LogoImg : {
    width: width,
    height: height,
  },
})