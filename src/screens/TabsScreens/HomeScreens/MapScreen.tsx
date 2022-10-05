import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import {HomeStackNavProps} from '../../../navigation/HomeStack/HomeParamList';
import {CloseIcon} from '../../../img/Icons';
import colors from '../../../styles/colors';
import {Map} from '../../../components/Map';

export const MapScreen = ({navigation}: HomeStackNavProps<'Map'>) => {
  return (
    <View style={styles.wrapper}>
      <Map onPress={() => navigation.navigate('Book')} />
      <SafeAreaView style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Explore')}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black02} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray02,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
  },
  closeButton: {
    display: 'flex',
    left: 30,
    alignSelf: 'center',
  },
});
