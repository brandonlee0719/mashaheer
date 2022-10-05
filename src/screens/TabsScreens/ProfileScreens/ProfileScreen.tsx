import React, { useContext } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ProfileStackNavProps } from '../../../navigation/ProfileStack/ProfileParamList';
import { AuthContext } from '../../../navigation';
import { CloseIcon, LogOutIcon, ChevronRightIcon } from '../../../img/Icons';
import colors from '../../../styles/colors';

export const ProfileScreen = ({
  navigation: { goBack },
  navigation,
}: ProfileStackNavProps<'Profile'>) => {
  const { logout, user } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => logout()}>
          <View style={styles.logOutButton}>
            <LogOutIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.profileWrapper}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.image}
            source={{
              uri: 'http://localhost:1337/uploads/m_02_28d3f87c95.jpeg',
            }}
          />
          <View style={styles.usernameWrapper}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.phoneNumber}>0501234567</Text>
          </View>
        </View>
        <View style={styles.profileItemsWrapper}>
          <BorderlessButton onPress={() => alert('Edit Profile Pressed')}>
            <View style={styles.profileItemBtnWrapper}>
              <Text style={styles.profileItemText}>Edit Profile</Text>
              <ChevronRightIcon color={colors.black02} />
            </View>
          </BorderlessButton>
          <BorderlessButton onPress={() => alert('Address Pressed')}>
            <View style={styles.profileItemBtnWrapper}>
              <Text style={styles.profileItemText}>Address</Text>
              <ChevronRightIcon color={colors.black01} />
            </View>
          </BorderlessButton>
          {user.isInfluencer == false ? (
            <View>
              <BorderlessButton onPress={() => navigation.navigate('MyBookings')}>
                <View style={styles.profileItemBtnWrapper}>
                  <Text style={styles.profileItemText}>My Bookings</Text>
                  <ChevronRightIcon color={colors.black01} />
                </View>
              </BorderlessButton>
              <BorderlessButton onPress={() => navigation.navigate('MyBookings')}>
                <View style={styles.profileItemBtnWrapper}>
                  <Text style={styles.profileItemText}>My Offers</Text>
                  <ChevronRightIcon color={colors.black01} />
                </View>
              </BorderlessButton>
            </View>
          ) : (
            <BorderlessButton onPress={() => alert('Become Provider Pressed')}>
              <View>
                <Text style={styles.becomeText}>Become an Influencer</Text>
              </View>
            </BorderlessButton>
          )}
        </View>
        {/*<BorderlessButton onPress={() => alert('Reviews Pressed')}>*/}
        {/*  <View style={styles.profileItemBtnWrapper}>*/}
        {/*    <Text style={styles.profileItemText}>My Reviews</Text>*/}
        {/*    <ChevronRightIcon color={colors.black02} />*/}
        {/*  </View>*/}
        {/*</BorderlessButton>*/}
      </View>
    </SafeAreaView>
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
    paddingTop: 14,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  closeButton: {
    display: 'flex',
    left: 30,
  },
  logOutButton: {
    display: 'flex',
    right: 30,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 6,
  },
  usernameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    left: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Galvji',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Galvji',
  },
  profileItemsWrapper: {
    display: 'flex',
    paddingVertical: 30,
  },
  profileItemBtnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginBottom: 6,
  },
  profileItemText: {
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Galvji',
  },
  becomeText: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
