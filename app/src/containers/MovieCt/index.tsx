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

const MovieCt = ({ data, onPress }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ViewItem item={item} onPress={(params: any) => onPress(params)} />
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{ paddingHorizontal: 8, marginBottom: 8 }}
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
    <TouchableOpacity onPress={() => props?.onPress(props?.item)} style={styles.container}>
      <Image source={{ uri: props?.item?.file_url }} style={styles.image} />
      <View style={styles.content}>
        <TextComp
          type="medium"
          size={14}
          color={ColorStyle.white}
          value={props?.item?.title}
          numberOfLines={2}
        />
        <View style={{ marginTop: 4 }} />
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.gray6}
          value={props?.item?.time}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCt;

const styles = StyleSheet.create({
  container: {
    width: DimensionStyle.dimensionWidth * 0.45,
    backgroundColor: ColorStyle.background,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  image: {
    width: DimensionStyle.dimensionWidth * 0.45,
    borderRadius: 16,
    height: 270,
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
