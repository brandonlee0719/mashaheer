import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Stars} from '../';
import colors from '../../styles/colors';

interface exploreCardProps {
  name: string;
  description?: string;
  photo?: string;
  price: number;
  category: {
    name: string;
  };
  onPress: () => void;
}

const windowWidth = Dimensions.get('window').width;

export const ResultsCard = ({
  name,
  price,
  category,
  onPress,
}: exploreCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        {/*<View style={styles.imageWrapper}>*/}
        {/*  <Image style={styles.image} source={photo} />*/}
        {/*</View>*/}
        <View style={styles.textsWrapper}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.titleText}>description</Text>
          <Text style={styles.nOfJobsCompletedText}>Price: {price}</Text>
          <Text style={styles.nOfJobsCompletedText}>Category: {category}</Text>
          <View style={styles.reviewStars}>
            <Stars />
            <Text style={styles.noOfReviews}>(32)</Text>
          </View>
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
    borderRadius: 10,
    backgroundColor: colors.white01,
    width: windowWidth / 1.2,
    height: windowWidth / 3.5,
    shadowColor: colors.black02,
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
  textsWrapper: {
    alignSelf: 'center',
    flexDirection: 'column',
    marginLeft: 12,
  },
  nameText: {
    fontFamily: 'Galvji',
    fontSize: 12,
    fontWeight: '300',
  },
  titleText: {
    fontFamily: 'Galvji',
    fontSize: 12,
    fontWeight: '500',
  },
  nOfJobsCompletedText: {
    fontFamily: 'Galvji',
    fontSize: 10,
    fontWeight: '300',
    marginTop: 10,
  },
  reviewStars: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  noOfReviews: {
    color: colors.black02,
    fontFamily: 'Galvji',
    fontSize: 10,
    fontWeight: '600',
  },
});
