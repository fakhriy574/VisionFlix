import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import EmptyDataComp from "../../components/Common/EmptyDataComp";
import TextComp from "../../components/Common/TextComp";
import ColorStyle from "../../styles/ColorStyle";
import DimensionStyle from "../../styles/DimensionStyle";

type Props = {
  data: any;
};

const CastMovieCt = ({ data }: Props) => {
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({ item }) => <ViewItem item={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 8, marginVertical: 8 }}
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
    <View style={styles.container}>
      <Image source={{ uri: props?.item?.file_url }} style={styles.image} />
      <View style={styles.content}>
        <TextComp
          type="medium"
          size={14}
          color={ColorStyle.white}
          value={props?.item?.job}
        />
        <View style={{ marginBottom: 4 }} />
        <TextComp
          type="regular"
          size={12}
          color={ColorStyle.gray4}
          value={props?.item?.name}
        />
      </View>
    </View>
  );
};

export default CastMovieCt;

const styles = StyleSheet.create({
  container: {
    width: DimensionStyle.dimensionWidth * 0.25,
    borderRadius: 16,
    backgroundColor: ColorStyle.background,
    marginHorizontal: 8,
  },
  image: {
    width: DimensionStyle.dimensionWidth * 0.25,
    height: 94,
    borderRadius: 16,
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
