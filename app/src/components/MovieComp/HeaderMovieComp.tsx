import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  onBack: Function;
  onShare: Function;
};

const HeaderMovieComp = ({ onBack, onShare }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onBack()}>
        <Image
          source={require("../../assets/icons/arrow-left.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShare()}>
        <Image
          source={require("../../assets/icons/share.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMovieComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
