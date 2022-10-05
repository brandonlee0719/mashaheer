import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface AddButtonProps {}

export const AddButton = ({}: AddButtonProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Bookings')}
        style={styles.buttonWrapper}>
        {/*<Image source={require('../../img/logo/appLogoBlue.png.png')} style={styles.logo} />*/}
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    alignItems: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 16,
    // backgroundColor: colors.blue01,
  },
  logo: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
});
