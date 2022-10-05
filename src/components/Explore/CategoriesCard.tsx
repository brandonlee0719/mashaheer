import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import colors from '../../styles/colors';

interface CategoriesCardProps {
  id: number;
  name: string;
  photo: object;
  onPress: () => void;
}

export const CategoriesCard = ({photo, onPress}: CategoriesCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={photo} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginVertical: 20,
    marginHorizontal: 10,
    left: 20,
    right: 20,
    borderRadius: 10,
    backgroundColor: colors.white01,
    // width: windowWidth / 1.5,
    // height: windowWidth / 3.5,
    shadowColor: colors.black01,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageWrapper: {
    display: 'flex',
    alignContent: 'center',
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 10,
  },
});
