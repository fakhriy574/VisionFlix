import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import DimensionStyle from '../../styles/DimensionStyle';

type Props = {
  data: any;
};

const BannerHomeComp = ({data}: Props) => {
  // render item slide
  const renderItemSlide = ({item, index}: any) => {
    return (
      <Image
        source={item?.image}
        style={{
          width: DimensionStyle.dimensionWidth - 32,
          height: 197,
          marginVertical: 2,
          borderRadius: 8,
          alignSelf: 'center',
          paddingHorizontal: 8,
        }}
      />
    );
  };

  return (
    <View style={{marginVertical: 8}}>
      {/* <Carousel
        data={data}
        sliderWidth={DimensionStyle.dimensionWidth * 1}
        itemWidth={DimensionStyle.dimensionWidth - 24}
        layout={'default'}
        loop={true}
        autoplay={true}
        renderItem={renderItemSlide}
        inactiveSlideScale={1}
      /> */}
    </View>
  );
};

export default BannerHomeComp;

const styles = StyleSheet.create({});
