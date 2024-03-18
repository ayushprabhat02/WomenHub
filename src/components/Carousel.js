import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from 'react-native';

const Carousel = ({imageSrc}) => {
  const {width} = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = event => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(xOffset / width);
    setCurrentPage(pageIndex);
  };

  return (
    <View style={{height: 260, width: width, position: 'absolute', zIndex: -2}}>
      <FlatList
        data={imageSrc}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}
        renderItem={({item}) => {
          return (
            <Image
              source={item.imgSrc}
              style={{height: 260, width: width}}
              resizeMode="cover"
            />
          );
        }}
      />
      <View style={styles.paginationContainer}>
        {imageSrc.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 46,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'rgba(255, 255, 255, 1)', // Change to desired active dot color
  },
});
