import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ColorStyle from "../../styles/ColorStyle";
import TextComp from "../Common/TextComp";

type Props = {
  rate: string;
  view: string;
  title: string;
  age: string;
  time: string;
  year: string;
  genre: any;
  desc: string;
};

const InfoMovieComp = ({
  rate,
  view,
  title,
  age,
  time,
  year,
  genre,
  desc,
}: Props) => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      {/* rate & views */}
      <View style={styles.row}>
        <View style={styles.cardrate}>
          <Image
            source={require("../../assets/icons/star.png")}
            style={styles.star}
          />
          <TextComp
            type="semibold"
            size={14}
            color={ColorStyle.surface}
            value={rate}
          />
        </View>
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.white}
          value={`(${view})`}
        />
      </View>
      {/* title */}
      <TextComp
        type="semibold"
        size={20}
        color={ColorStyle.white}
        value={title}
      />
      <View style={{ marginBottom: 8 }} />
      {/* age */}
      <View style={styles.row}>
        <View style={styles.cardage}>
          <TextComp
            type="semibold"
            color={ColorStyle.white}
            size={12}
            value={age}
          />
        </View>
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.gray4}
          value={`${time} | ${year}`}
        />
      </View>
      {/* genre */}
      <View style={[styles.row, { flexWrap: "wrap" }]}>
        {genre?.map((item: any) => {
          return (
            <View style={styles.genre}>
              <TextComp
                type="semibold"
                size={12}
                color={ColorStyle.white}
                value={item?.title}
              />
            </View>
          );
        })}
      </View>
      {/* desc */}
      <TextComp
        type="regular"
        size={14}
        color={ColorStyle.gray4}
        value={desc}
      />
    </View>
  );
};

export default InfoMovieComp;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  // rate
  cardrate: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: ColorStyle.yellow,
    borderRadius: 100,
    paddingVertical: 2,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  // age
  cardage: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: ColorStyle.white,
    marginRight: 8,
  },
  // genre
  genre: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: ColorStyle.white,
    marginRight: 8,
  },
});
