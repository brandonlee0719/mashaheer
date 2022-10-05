import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeStackNavProps} from '../../../navigation/HomeStack/HomeParamList';
import {CloseIcon} from '../../../img/Icons';
import colors from '../../../styles/colors';

const windowWidth = Dimensions.get('window').width;

export const BookDoneScreen = ({
  navigation: {goBack},
  navigation,
}: HomeStackNavProps<'BookDone'>) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.imageWrapper}>
          <Ionicons name="cloud-done-outline" size={84} />
        </View>
        <Text style={styles.mainTitle}>Booking Done</Text>

        <View style={styles.boxWrapper}>
          <View style={styles.bottomWrapper}>
            <View style={styles.aboutWrapper}>
              <Text style={styles.detailsSubText}>
                Your booking has been done and pending approval from the
                Influencer. Once you receive the approval, you will proceed to
                payment. As soon as the payment is done, your booking will be
                confirmed.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Explore')}
            style={[
              styles.signIn,
              {
                backgroundColor: colors.blue04,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.white03,
                },
              ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.white03,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 14,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  closeButton: {
    display: 'flex',
    left: 30,
    alignSelf: 'center',
  },
  scrollView: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  mainTitle: {
    paddingTop: 20,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth / 4.5,
    height: windowWidth / 4.5,
    resizeMode: 'contain',
    borderRadius: 40,
  },
  boxWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth / 1.2,
    height: windowWidth * 0.4,
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginBottom: 40,
    backgroundColor: colors.white01,
  },
  contactWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomWrapper: {
    alignSelf: 'flex-end',
  },
  aboutWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  detailsMainText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  detailsSubText: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Galvji',
  },
  reviews: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 26,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Galvji',
    marginBottom: 6,
  },
  reviewsSubTitle: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Galvji',
    marginBottom: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 60,
    width: 120,
  },
  signIn: {
    width: 160,
    height: 44,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
