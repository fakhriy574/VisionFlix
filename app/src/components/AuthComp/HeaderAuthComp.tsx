import React from "react";
import { StyleSheet, View } from "react-native";
import ColorStyle from "../../styles/ColorStyle";
import TextComp from "../Common/TextComp";

type Props = {
  title: string;
};

const HeaderAuthComp = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextComp
          type="semibold"
          color={ColorStyle.white}
          size={32}
          textAlign="center"
          value={title}
        />
      </View>

      <View style={styles.radius} />
    </View>
  );
};

export default HeaderAuthComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 210,
    backgroundColor: ColorStyle.primary,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: ColorStyle.white,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
  },
  radius: {
    width: "100%",
    height: 30,
    backgroundColor: ColorStyle.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
