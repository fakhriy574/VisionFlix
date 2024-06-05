import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';
import TextComp from '../Common/TextComp';

type Props = {
  title: string;
  onPress: Function;
};

const TitleHomeComp = ({title, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TextComp
          type="bold"
          size={16}
          color={ColorStyle.white}
          value={title}
        />
      </View>
      <TouchableOpacity onPress={() => onPress()}>
        <TextComp
          type="regular"
          color={ColorStyle.primary}
          size={12}
          value="View All"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TitleHomeComp;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
