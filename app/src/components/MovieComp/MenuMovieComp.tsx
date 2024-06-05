import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ColorStyle from "../../styles/ColorStyle";
import TextComp from "../Common/TextComp";

type Props = {
  menu: "cast" | "crew";
  onPress: Function;
};

const MenuMovieComp = ({ menu, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress("cast")}
        style={[
          styles.menuon,
          {
            borderBottomWidth: menu == "cast" ? 1 : 0,
            borderBottomColor:
              menu == "cast" ? ColorStyle.primary : ColorStyle.background,
          },
        ]}
      >
        <TextComp
          type="semibold"
          color={ColorStyle.white}
          size={14}
          value="Cast"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress("crew")}
        style={[
          styles.menuon,
          {
            borderBottomWidth: menu == "crew" ? 1 : 0,
            borderBottomColor:
              menu == "crew" ? ColorStyle.primary : ColorStyle.background,
          },
        ]}
      >
        <TextComp
          type="semibold"
          color={ColorStyle.white}
          size={14}
          value="Director & Crew"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuMovieComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  menuon: {
    marginRight: 16,
    paddingBottom: 8,
  },
});
