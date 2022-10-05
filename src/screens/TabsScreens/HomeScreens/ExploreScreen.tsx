import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeStackNavProps } from '../../../navigation/HomeStack/HomeParamList';
// import { SearchBar } from '../../../components/Form';
import { ExploreCard, CategoriesCard } from '../../../components/Explore';
import { categoriesList } from '../../../api/data/categories';
import { Loader } from '../../../components/Loder/Loader';
import { ProfileIcon } from '../../../img/Icons';
import colors from '../../../styles/colors';

// const windowWidth = Dimensions.get('window').width;

// export const CATS = gql`
//   query {
//     categories(
//       pagination: { limit: 100 }
//       sort: "id:asc"
//       filters: { users: { isInfluencer: { eq: true } } }
//     ) {
//       data {
//         id
//         attributes {
//           catName
//           users {
//             data {
//               id
//               attributes {
//                 name
//                 infIsNMC
//                 infNMCNo
//                 infAbout
//                 profilePhoto {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//                 category {
//                   data {
//                     attributes {
//                       catName
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const ExploreScreen = ({ navigation }: HomeStackNavProps<'Explore'>) => {
  // const { data, loading, error, refetch } = useQuery(CATS);

  // if (loading) {
  //   return <Loader modalVisible={true} />;
  // }
  // if (error) {
  //   return <Text style={{ padding: 80 }}>Error :'(</Text>;
  // }
  // console.log(error);

  // const healthInfs = data.categories.data[0];
  // const sportsInfs = data.categories.data[1];
  // const cosmeticsInfs = data.categories.data[2];
  // const fashionInfs = data.categories.data[3];
  // const hospitalityInfs = data.categories.data[4];
  // const foodInfs = data.categories.data[5];
  // const autoInfs = data.categories.data[6];

  // const handleRefetchPressed = async () => {
  //   refetch();
  // };

  // console.log(AsyncStorage.getItem('user'));
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
          <View style={styles.profileButton}>
            <ProfileIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
        <Image source={require('../../../img/logo/appLogo.png')} style={styles.logo} />
        {/* <TouchableWithoutFeedback onPress={() => refetch()}>
          <View style={styles.profileButton}>
            <Image source={require('../../../img/Icons/refresh.png')} style={styles.refreshImage} />
          </View>
        </TouchableWithoutFeedback> */}
      </View>

      <ScrollView alwaysBounceVertical contentContainerStyle={styles.scrollViewWrapper}>
        <View>
          <Text>Working</Text>
        </View>
        {/* <View>
          <View style={styles.categoriesWrapper}>
            <Text style={styles.mainTitle}>Categories</Text>
            <FlatList
              style={styles.listWrapper}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={categoriesList}
              renderItem={({ item }) => {
                return (
                  <CategoriesCard
                    id={item.id}
                    name={item.name}
                    photo={item.photo}
                    onPress={() =>
                      navigation.navigate('Category', {
                        id: item.id,
                        name: item.name,
                        photo: item.photo,
                      })
                    }
                  />
                );
              }}
            />
          </View>
        </View>

        <Text style={styles.mainTitle}>Health Wellness</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={healthInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Sports</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={sportsInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Cosmetics</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={cosmeticsInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Fashion</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={fashionInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Hospitality</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={hospitalityInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Food & Beverages</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={foodInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        />

        <Text style={styles.mainTitle}>Auto</Text>
        <FlatList
          style={styles.bottomListWrapper}
          horizontal
          data={autoInfs.attributes.users.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ExploreCard
                id={item.id}
                name={item.attributes.name}
                nmc={item.attributes.infIsNMC}
                infNMCNo={item.attributes.infNMCNo}
                infAbout={item.attributes.infAbout}
                photo={{
                  uri: `http://localhost:1337${item.attributes.profilePhoto.data.attributes.url}`,
                }}
                onPress={() =>
                  navigation.navigate('Inf', {
                    id: item.id,
                    name: item.attributes.name,
                    nmc: item.attributes.infIsNMC,
                    nmcNumber: item.attributes.infNMCNo,
                    about: item.attributes.infAbout,
                    category: item.attributes.category.data.attributes.catName,
                    photo: item.attributes.profilePhoto.data.attributes.url,
                  })
                }
              />
            );
          }}
        /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: colors.white03,
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  profileButton: {
    display: 'flex',
    // marginLeft: 1,
  },
  refreshImage: {
    display: 'flex',
    width: 20,
    height: 20,
    // marginLeft: 1,
  },
  mainTitle: {
    fontSize: 24,
    left: 20,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  inputFieldWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  continueBtnWrapper: {
    alignSelf: 'center',
  },
  scrollViewWrapper: {
    // marginBottom: 100,
  },
  listWrapper: {
    alignContent: 'center',
  },
  bottomListWrapper: {
    alignContent: 'center',
    paddingBottom: 26,
    height: '100%',
  },
  categoriesWrapper: {
    marginBottom: 8,
  },
  prosWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  prosTitleText: {
    left: 30,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Galvji',
  },
});
