import {CheckBox} from '@rneui/themed';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from '../Common/TextComp';

type Props = {
  onPress: Function;
  checked: boolean;
};

const TermAuthComp = ({onPress, checked}: Props) => {
  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        onPress={(v) => onPress(!checked)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor={ColorStyle.primary}
        uncheckedColor={ColorStyle.white}
        containerStyle={{padding: 0, backgroundColor: 'transparent'}}
      />
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          Dengan mendaftar kamu telah menyetujui
          <TextComp
            type="regular"
            color={ColorStyle.primary}
            size={14}
            value=" syarat dan ketentuan layanan"
          />
        </Text>
      </View>
    </View>
  );
};

export default TermAuthComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: ColorStyle.white,
    fontSize: RFValue(14),
  },
});
