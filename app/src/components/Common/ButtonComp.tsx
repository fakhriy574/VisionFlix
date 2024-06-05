import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from './TextComp';

type Props = {
  type: 'primary' | 'secondary';
  title: string;
  onPress: Function;
};

const ButtonComp = ({type, title, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.container,
        {
          backgroundColor:
            type == 'primary' ? ColorStyle.primary : ColorStyle.lightPrimary,
        },
      ]}>
      <TextComp
        type="semibold"
        color={type == 'primary' ? ColorStyle.white : ColorStyle.primary}
        size={14}
        value={title}
      />
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
