import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import ColorStyle from '../../styles/ColorStyle';

type Props = {
  value: string;
  onChangeText: Function;
};

const SearchHomeComp = ({value, onChangeText}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={require('../../assets/icons/search.png')} style={styles.search} />
        <TextInput
          placeholder="Search Movie...."
          placeholderTextColor={ColorStyle.placeholder}
          value={value}
          onChangeText={v => onChangeText(v)}
        />
      </View>
    </View>
  );
};

export default SearchHomeComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: ColorStyle.background,
    paddingHorizontal: 16,
  },
  form: {
    width: '100%',
    height: 48,
    backgroundColor: ColorStyle.white,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  search: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
