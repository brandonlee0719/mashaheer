import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import colors from '../../styles/colors';

interface ProductCardProps {
  name: string;
  description?: string;
  price: number;
  remote?: boolean;
  platforms?: any;
  category?: string;
  onPress?: () => void;
}

const windowWidth = Dimensions.get('window').width;

export const ProductCard = ({ name, price, remote, onPress }: ProductCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.currency}>AED</Text>
        </View>
        <View style={styles.textsWrapper}>
          <Text style={styles.nameText}>{name}</Text>
          {remote ? (
            <Text style={styles.remote}>Remote</Text>
          ) : (
            <Text style={styles.remote}>Visit</Text>
          )}
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
    // paddingVertical: 14,
    paddingHorizontal: 14,
    // marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white01,
    width: windowWidth / 1.4,
    height: windowWidth / 5,
    shadowColor: colors.black01,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  priceWrapper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 12,
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
    marginBottom: 6,
  },
  remote: {
    fontWeight: 'bold',
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
