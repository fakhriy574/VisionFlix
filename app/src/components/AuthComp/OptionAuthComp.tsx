import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import ColorStyle from "../../styles/ColorStyle";
import TextComp from "../Common/TextComp";

type Props = {
  title: string;
  icon: any;
  onPress: Function;
};

const OptionAuthComp = ({ title, icon, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextComp
        type="semibold"
        color={ColorStyle.white}
        size={14}
        value={title}
      />
    </TouchableOpacity>
  );
};

export default OptionAuthComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: ColorStyle.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
