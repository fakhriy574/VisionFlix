import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from '../Common/TextComp';

type Props = {
  onPress: Function;
};

const ForgotAuthComp = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <TextComp
        type="semibold"
        color={ColorStyle.primary}
        size={14}
        value="Lupa Password?"
      />
    </TouchableOpacity>
  );
};

export default ForgotAuthComp;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
});
