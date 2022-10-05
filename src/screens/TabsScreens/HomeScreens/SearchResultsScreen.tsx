import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {HomeStackNavProps} from '../../../navigation/HomeStack/HomeParamList';
import {CloseIcon, ListIcon, MapIcon, FilterIcon} from '../../../img/Icons';
import {pros} from '../../../api/data';
import {ResultsCard} from '../../../components/Explore';
import colors from '../../../styles/colors';

export const SearchResultsScreen = ({
  navigation: {goBack},
  navigation,
}: HomeStackNavProps<'Search'>) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert('Filter Pressed')}>
          <View style={styles.filterBtn}>
            <FilterIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.mainTitle}>Search</Text>
      <FlatList
        style={styles.listWrapper}
        showsVerticalScrollIndicator={false}
        // horizontal
        data={pros}
        renderItem={({item}) => {
          return (
            <ResultsCard
              name={item.name}
              title={item.title}
              photo={item.photo}
              nOfJobsCompleted={item.nOfJobsCompleted}
              onPress={() => navigation.navigate('Pro')}
            />
          );
        }}
      />
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
  filterBtn: {
    display: 'flex',
    right: 30,
  },
  searchWrapper: {},
  mainTitle: {
    paddingTop: 20,
    left: 30,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  prosTitleText: {
    left: 30,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  mapIconWrapper: {
    width: 60,
    right: 110,
  },
  listWrapper: {
    alignContent: 'center',
    alignSelf: 'center',
  },
});
