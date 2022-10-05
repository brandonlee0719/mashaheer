import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../styles/colors';

interface exploreCardProps {
  // id: number;
  name: string;
  // nmc: boolean;
  // photo: object;
  // onPress: () => void;
}

const windowWidth = Dimensions.get('window').width;

export const ExploreCard = ({
  name,
}: // photo,
// nmc,
exploreCardProps) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        {/* <View style={styles.imageWrapper}>
          <Image style={styles.image} source={photo} />
        </View> */}
        <View style={styles.textsWrapper}>
          <Text style={styles.nameText}>{name}</Text>
          {/* <Text style={styles.titleText}>@{username}</Text>
          <Text style={styles.nOfJobsCompletedText}>
            Offers: {productCount} products
          </Text> */}
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
    width: windowWidth / 1.5,
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
