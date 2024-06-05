import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ColorStyle from "../../styles/ColorStyle";
import TextComp from "./TextComp";

type Props = {
  title: string;
  icon: any;
  value: string;
  onChangeText: Function;
  placeholder: string;
  secureTextEntry?: boolean;
};

const FormInputComp = ({
  title,
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: Props) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <TextComp
      type='semibold'
      color={ColorStyle.white}
      size={14}
      value={title} />
      <View style={styles.card}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          value={value}
          onChangeText={(v) => onChangeText(v)}
          placeholder={placeholder}
          placeholderTextColor={ColorStyle.placeholder}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default FormInputComp;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: ColorStyle.white,
    fontFamily: "Inter-SemiBold",
  },
  card: {
    width: "100%",
    height: 56,
    backgroundColor: ColorStyle.white,
    borderRadius: 16,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    fontSize: 12,
    color: ColorStyle.black,
    fontFamily: 'Inter-SemiBold',
    width: '100%'
  }
});
