import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from '../Common/TextComp';

type Props = {
  name: string;
  onNotif: Function;
};

const HeaderHomeComp = ({name, onNotif}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.white}
          value={`Welcome ${name}👋`}
        />
        <TextComp
          type="semibold"
          size={16}
          color={ColorStyle.white}
          value="Let’s Relax and watch a movie!"
        />
      </View>
      <TouchableOpacity onPress={() => onNotif()}>
        <Image source={require('../../assets/icons/notif.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHomeComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: ColorStyle.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 16,
  },
});
