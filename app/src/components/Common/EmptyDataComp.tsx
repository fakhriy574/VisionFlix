import React from 'react';
import {View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from './TextComp';

const EmptyDataComp = () => {
  return (
    <View style={{marginVertical: 8}}>
      <TextComp
        type="medium"
        color={ColorStyle.primary}
        size={12}
        value="Tidak Ada Data"
        textAlign="center"
      />
    </View>
  );
};

export default EmptyDataComp;
