import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import colors from '../../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {StarIcon} from '../../img/Icons';

interface StarRatingProps {
  rating: number;
  reviews: number;
}

export const StarRating = ({ratings, reviews}: StarRatingProps) => {
  // This array will contain our star tags. We will include this
  // array between the view tag.
  const stars = [];
  // Loop 5 times
  for (let i = 1; i <= 5; i++) {
    // set the path to filled stars
    let name = 'ios-star';
    // If ratings is lower, set the path to unfilled stars
    if (i > ratings) {
      name = 'ios-star-outline';
    }

    stars.push(<Ionicons name={name} size={12} style={styles.star} key={i} />);
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({reviews})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: colors.blue01,
  },
  text: {
    fontSize: 10,
    marginLeft: 5,
    color: '#444',
  },
});
