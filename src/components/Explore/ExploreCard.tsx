import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import colors from '../../styles/colors';

interface exploreCardProps {
  id: number;
  name: string;
  nmc: boolean;
  photo: object;
  category?: string;
  infNMCNo: number;
  infAbout?: string;
  onPress: () => void;
}

const windowWidth = Dimensions.get('window').width;

export const ExploreCard = ({ name, photo, nmc, infNMCNo, onPress }: exploreCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={photo} />
        </View>
        <View style={styles.bottomWrapper}>
          <Text style={styles.nameText}>{name}</Text>

          <View style={styles.nmcCatWrapper}>
            <View style={styles.categoryTextWrapper}>
              {infNMCNo ? (
                <Text style={styles.categoryText}>{infNMCNo}</Text>
              ) : (
                <Text style={styles.categoryText}>NA</Text>
              )}
            </View>
            {nmc ? (
              <Image style={styles.nmcLogo} source={require('../../img/ui/nmcLogo.png')} />
            ) : (
              <Image style={styles.nmcLogo} source={require('../../img/ui/nmcLogoOff.png')} />
            )}
          </View>

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
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // paddingVertical: 14,
    // paddingHorizontal: 14,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.white01,
    width: windowWidth / 3,
    height: windowWidth / 2.2,
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
  bottomWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  nmcCatWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontFamily: 'Galvji',
    fontSize: 10,
    fontWeight: '300',
    marginTop: 14,
  },
  categoryTextWrapper: {
    borderWidth: 0.2,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'column',
    right: 6,
    borderColor: colors.gray02,
  },
  nmcLogo: {
    width: 16,
    height: 16,
    left: 6,
  },
  categoryText: {
    fontFamily: 'Galvji',
    fontSize: 8,
    fontWeight: '300',
    padding: 6,
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
    color: colors.black01,
    fontFamily: 'Galvji',
    fontSize: 10,
    fontWeight: '600',
  },
});
