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
  FlatList,
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { HomeStackNavProps } from '../../../navigation/HomeStack/HomeParamList';
import { CloseIcon } from '../../../img/Icons';
import colors from '../../../styles/colors';
import { Stars } from '../../../components/';
import { Loader } from '../../../components/Loder/Loader';
import { ProductCard } from '../../../components/Explore';

const windowWidth = Dimensions.get('window').width;

const PRODUCTS = gql`
  query GetUserPros($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          name
          infImages {
            data {
              attributes {
                url
              }
            }
          }
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

export const InfScreen = ({
  navigation,
  navigation: { goBack },
  route,
}: HomeStackNavProps<'Inf'>) => {
  const { data, loading, error } = useQuery(PRODUCTS, {
    variables: { id: route.params.id },
  });

  if (loading) {
    return <Loader modalVisible={true} />;
  }
  if (error) {
    return <Text style={{ padding: 80 }}>Error :'(</Text>;
  }

  const userProducts = data.usersPermissionsUser.data;
  console.log(data);
  // console.log('route.params :', route.params.infImages);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View style={styles.closeButton}>
            <CloseIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: `http://localhost:1337${route.params.photo}` }}
          />
        </View>
        <Text style={styles.mainTitle}>{route.params.name}</Text>

        <View style={styles.boxWrapper}>
          <View style={styles.contactWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.detailsMainText}>NMC Status</Text>
              {route.params.nmc == true ? (
                <Text style={styles.detailsSubText}>Verified</Text>
              ) : (
                <Text style={styles.detailsSubText}>Not Verified</Text>
              )}
            </View>

            <View style={styles.experienceWrapper}>
              <Text style={styles.detailsMainText}>NMC Number</Text>
              {route.params.nmc == true ? (
                <Text style={styles.detailsSubText}>{route.params.nmcNumber}</Text>
              ) : (
                <Text style={styles.detailsSubText}>Not Available</Text>
              )}
            </View>

            <View style={styles.priceWrapper}>
              <Text style={styles.detailsMainText}>Price</Text>
              <Text style={styles.detailsSubText}>AED9,000</Text>
            </View>
          </View>
          <View style={styles.bottomWrapper}>
            <View style={styles.aboutWrapper}>
              <Text style={styles.detailsMainText}>We Are</Text>
              <Text style={styles.detailsSubText}>{route.params.about}</Text>
            </View>
          </View>
        </View>

        <View style={styles.productsWrapper}>
          <Text style={styles.mainTitle}>Offers</Text>
          <FlatList
            style={styles.listWrapper}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={userProducts.attributes.products.data}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  name={item.attributes.pName}
                  description={item.attributes.pDescription}
                  price={item.attributes.pPrice}
                  // category={item.pName}
                  remote={item.attributes.remote}
                  platforms={item.attributes.platforms}
                  // onPress={() =>
                  //   navigation.navigate('Product', {
                  //     id: item.id,
                  //     name: item.pName,
                  //     description: item.pDescription,
                  //     price: item.pPrice,
                  //     remote: item.remote,
                  //     platforms: item.platforms,
                  //   })
                  // }
                />
              );
            }}
          />
        </View>

        <View style={styles.reviews}>
          <Text style={styles.reviewsTitle}>Reviews</Text>
          <Text style={styles.reviewsSubTitle}>(38)</Text>
          <Stars />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Book')}
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    marginLeft: 20,
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
    alignItems: 'center',
    marginTop: 16,
  },
  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
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
  productsWrapper: {
    marginBottom: 20,
  },
  listWrapper: {
    alignContent: 'flex-start',
  },
  reviews: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
