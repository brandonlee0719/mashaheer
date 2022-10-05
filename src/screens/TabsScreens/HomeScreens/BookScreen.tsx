import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {HomeStackNavProps} from '../../../navigation/HomeStack/HomeParamList';
import {CloseIcon} from '../../../img/Icons';
import colors from '../../../styles/colors';

const windowWidth = Dimensions.get('window').width;

export const BookScreen = ({
  navigation: {goBack},
  navigation,
  route,
}: HomeStackNavProps<'Book'>) => {
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
        <Text style={styles.mainTitle}>Book Now</Text>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2021-04-30'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          markedDates={{
            '2021-04-30': {
              marked: true,
              selected: true,
              selectedColor: colors.blue04,
              dotColor: colors.white03,
            },
          }}
          style={{
            borderRadius: 5,
            width: 300,
          }}
          theme={{
            arrowColor: colors.blue04,
          }}
        />

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookDone')}
            style={[
              styles.signIn,
              {
                // borderColor: colors.blue01,
                // borderWidth: 0.5,
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
              Continue
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
    height: windowWidth * 0.6,
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
  titleWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  experienceWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  priceWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  bottomWrapper: {
    alignSelf: 'flex-end',
    marginTop: 20,
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
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Galvji',
    marginTop: 6,
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
