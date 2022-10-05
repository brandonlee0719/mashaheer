import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ProfileStackNavProps} from '../../../navigation/ProfileStack/ProfileParamList';
import colors from '../../../styles/colors';
import {CloseIcon} from '../../../img/Icons';
import {Loader} from '../../../components/Loder/Loader';

const windowWidth = Dimensions.get('window').width;

export const MyBookingsScreen = ({
  navigation: {goBack},
  navigation,
}: ProfileStackNavProps<'MyBookings'>) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.productsWrapper}>
        <Text style={styles.mainTitle}>My Bookings</Text>
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white03,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 28,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  closeButton: {
    display: 'flex',
    left: 30,
    alignSelf: 'center',
  },
  productsWrapper: {
    alignItems: 'center',
  },
  mainTitle: {
    paddingTop: 20,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  loader: {
    marginTop: 200,
  },
});
