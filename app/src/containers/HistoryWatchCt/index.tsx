import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import EmptyDataComp from "../../components/Common/EmptyDataComp";
import TextComp from "../../components/Common/TextComp";
import ColorStyle from "../../styles/ColorStyle";
import DimensionStyle from "../../styles/DimensionStyle";

type Props = {
  data: any;
  onPress: Function;
};

const HistoryWatchCt = ({ data, onPress }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ViewItem item={item} onPress={() => onPress()} />
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{ paddingHorizontal: 8, marginBottom: 16 }}
      ListEmptyComponent={() => {
        return (
          <View style={{ width: DimensionStyle.dimensionWidth * 1 }}>
            <EmptyDataComp />
          </View>
        );
      }}
    />
  );
};

const ViewItem = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props?.onPress()} style={styles.container}>
      <Image source={props?.item?.poster} style={styles.poster} />
      <View style={styles.shadow} />
      <Image
        source={require("../../assets/icons/play.png")}
        style={styles.play}
      />
      <View style={styles.content}>
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.white}
          value={props?.item?.title}
          numberOfLines={1}
        />
        <View style={{ marginTop: 4 }} />
        <TextComp
          type="regular"
          size={10}
          color={ColorStyle.gray4}
          value={props?.item?.time}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HistoryWatchCt;

const styles = StyleSheet.create({
  container: {
    width: DimensionStyle.dimensionWidth * 0.8,
    height: 141,
    backgroundColor: ColorStyle.white,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  poster: {
    width: DimensionStyle.dimensionWidth * 0.8,
    height: 141,
    borderRadius: 8,
  },
  shadow: {
    width: "100%",
    height: "100%",
    backgroundColor: ColorStyle.black,
    position: "absolute",
    borderRadius: 8,
    opacity: 0.5,
  },
  play: {
    position: "absolute",
    top: "40%",
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  content: {
    position: "absolute",
    bottom: 8,
    left: 8,
  },
});
