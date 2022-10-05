import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  LogBox,
} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { HomeStackNavProps } from '../../../../navigation/HomeStack/HomeParamList';
import { CloseIcon } from '../../../../img/Icons';
import colors from '../../../../styles/colors';
import { PlatformsTextCard } from '../../../../components/Explore';
import { Loader } from '../../../../components/Loder/Loader';

const windowWidth = Dimensions.get('window').width;

const PRODUCTS = gql`
  query {
    usersPermissionsUsers(filters: { id: { eq: 16 } }) {
      data {
        id
        attributes {
          name
          products {
            data {
              attributes {
                pName
                pPrice
                pRemote
                pDescription
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductScreen = ({
  navigation,
  navigation: { goBack },
  route,
}: HomeStackNavProps<'Product'>) => {
  const { data, loading, error } = useQuery(PRODUCTS);

  if (loading) {
    return <Loader modalVisible={true} />;
  }
  if (error) {
    return <Text style={{ padding: 80 }}>Error :'(</Text>;
  }

  console.log(data);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  // console.log('Paramico: ', route.params);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.mainTitle}>{route.params.name}</Text>

        <View style={styles.boxWrapper}>
          <View style={styles.topRowWrapper}>
            <View style={styles.nameWrapper}>
              <Text style={styles.detailsMainText}>Title</Text>
              <Text style={styles.detailsSubText}>{route.params.name}</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.detailsMainText}>Price</Text>
              {/* <Text style={styles.detailsSubText}>AED{route.params.price}</Text> */}
              <Text style={styles.detailsSubText}>AED3,999</Text>
            </View>
          </View>
          <View style={styles.bottomWrapper}>
            <View style={styles.platformsListWrapper}>
              <Text style={styles.detailsMainText}>Social Media Platforms Coverage:</Text>
              {/* {route.params.platforms.length === 6 ? (
                <Text>All social media platforms </Text>
              ) : (
                <FlatList
                  style={styles.listWrapper}
                  showsHorizontalScrollIndicator={false}
                  data={route.params.platforms}
                  renderItem={({item}) => {
                    return <PlatformsTextCard name={item.name} />;
                  }}
                />
              )} */}
            </View>
            <View style={styles.aboutWrapper}>
              <Text style={styles.detailsMainText}>We Are</Text>
              <Text style={styles.detailsSubText}>{route.params.infAbout}</Text>
            </View>
          </View>
        </View>

        <View style={styles.booking}>
          <Text style={styles.bookingTitle}>You Like This Offer?</Text>
          <Text style={styles.bookingSubTitle}>Book it now with few clicks away ..</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Book', {
                name: route.params.name,
                photo: route.params.photo,
              })
            }
            style={[
              styles.signIn,
              {
                // borderColor: colors.blue04,
                // borderWidth: 0.5,
                backgroundColor: colors.blue04,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.white03,
                },
              ]}
            >
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  closeButton: {
    display: 'flex',
    left: 30,
    alignSelf: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainTitle: {
    paddingTop: 20,
    marginBottom: 30,
    fontSize: 24,
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
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginBottom: 40,
    backgroundColor: colors.white01,
  },
  topRowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
  },
  bottomWrapper: {
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
  platformsListWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  productsWrapper: {
    marginBottom: 20,
  },
  listWrapper: {
    alignContent: 'flex-start',
  },
  booking: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Galvji',
    marginBottom: 6,
  },
  bookingSubTitle: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Galvji',
    marginBottom: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    width: 120,
  },
  signIn: {
    width: '100%',
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
