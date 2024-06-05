import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';

const SplashPage = () => {
  // ref fade in
  const fadeIn = useRef(new Animated.Value(0)).current;

  // set timing animated
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeIn]);

  return (
    <View style={styles.container}>
      <Animated.View>
        <Image
          source={require('../../assets/images/logo-splash.png')}
          style={styles.icon}
        />
      </Animated.View>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorStyle.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 165,
    height: 178,
    resizeMode: 'contain',
  },
});
