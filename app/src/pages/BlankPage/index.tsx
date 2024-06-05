import React from 'react';
import {StyleSheet, View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from '../../components/Common/TextComp';

const BlankPage = () => {
  return (
    <View style={styles.container}>
      <TextComp
        type="semibold"
        color={ColorStyle.primary}
        value="Dalam proses pengembangan"
        size={12}
        textAlign="center"
      />
    </View>
  );
};

export default BlankPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyle.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
