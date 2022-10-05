import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {HomeStackNavProps} from '../../../../navigation/HomeStack/HomeParamList';
import colors from '../../../../styles/colors';
import {Loader} from '../../../../components/Loder/Loader';
import {CloseIcon, FilterIcon} from '../../../../img/Icons';
import {ProductCard} from '../../../../components/Explore';

const windowWidth = Dimensions.get('window').width;

const CATDETAILS = gql`
  query GetCatDetails($id: ID!) {
    category(id: $id) {
      products {
        name
        description
        price
        remote
        platforms {
          name
        }
      }
    }
  }
`;

export const CategoryScreen = ({
  navigation: {goBack},
  navigation,
  route,
}: HomeStackNavProps<'Category'>) => {
  const {loading, error, data} = useQuery(CATDETAILS, {
    variables: {id: route.params.id},
  });
  if (loading) {
    return <Loader modalVisible={true} />;
  }
  if (error) {
    console.log(error);
    return <Text style={{padding: 80}}>Error :'(</Text>;
  }
  console.log('Category Details: ', route.params.name, data);

  return (
    <View style={styles.wrapper}>
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

      <View style={styles.productsWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={route.params.photo} />
        </View>
        <Text style={styles.mainTitle}>{route.params.name} Products</Text>
        <FlatList
          style={styles.listWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          data={data.category.products}
          renderItem={({item}) => {
            return (
              <ProductCard
                name={item.name}
                price={item.price}
                description={item.description}
                remote={item.remote}
                platforms={item.platforms}
                onPress={() =>
                  navigation.navigate('Product', {
                    id: route.params.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    remote: item.remote,
                    platforms: item.platforms,
                  })
                }
              />
            );
          }}
        />
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
  filterBtn: {
    display: 'flex',
    right: 30,
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
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth / 4.5,
    height: windowWidth / 4.5,
    resizeMode: 'contain',
    borderRadius: 40,
  },
  listWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
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
