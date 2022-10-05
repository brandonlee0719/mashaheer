import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AuthNavProps } from '../../navigation/AuthNavigator/AuthParamList';
import { RoundedButton } from '../../components/buttons/RoundedButton';
import colors from '../../styles/colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { gql, useQuery } from '@apollo/client';
import { Loader } from '../../components/Loder/Loader';

export const CATS = gql`
  query {
    categories {
      data {
        attributes {
          cName
        }
      }
    }
  }
`;

export const LoggedOutScreen = ({ navigation }: AuthNavProps<'LoggedOutScreen'>) => {
  const { data, loading, error } = useQuery(CATS);

  if (loading) {
    return <Loader modalVisible={true} />;
  }
  if (error) {
    return <Text style={{ padding: 80 }}>Error :'(</Text>;
  }
  console.log(error);

  console.log(data);
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.welcomeWrapper}>
        <Image source={require('../../img/logo/appLogo.png')} style={styles.logo} />

        <Text style={styles.welcomeText01}>Hey there!</Text>
        <Text style={styles.welcomeText02}>welcome to Mashaheer</Text>
        <Text style={styles.welcomeText03}>We bring the stars to you!</Text>

        <RoundedButton
          label={'Get Started'}
          variant={'primary'}
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            marginTop: 40,
            marginBottom: 200,
            width: 180,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.mashaheerBrown,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 200,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 60,
    resizeMode: 'contain',
  },
  welcomeText01: {
    fontSize: 28,
    color: colors.white03,
    fontWeight: '100',
    marginBottom: 10,
    fontFamily: 'Galvji',
  },
  welcomeText02: {
    fontSize: 28,
    color: colors.white03,
    fontWeight: '100',
    marginBottom: 16,
    fontFamily: 'Galvji',
  },
  welcomeText03: {
    fontSize: 16,
    color: colors.white03,
    fontWeight: '100',
    marginTop: 10,
    marginBottom: 16,
    fontFamily: 'Galvji',
  },
  createAccountTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 50,
  },
  createAccountText01: {
    fontSize: 12,
    color: colors.black02,
    fontWeight: '100',
    marginRight: 4,
    fontFamily: 'Galvji',
  },
  createAccountText02: {
    fontSize: 12,
    color: colors.blue01,
    fontWeight: '500',
    fontFamily: 'Galvji',
  },
});
