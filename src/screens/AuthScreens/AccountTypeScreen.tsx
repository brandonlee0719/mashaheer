import React from 'react';
import { Image, Text, StyleSheet, View, StatusBar } from 'react-native';
import { AuthNavProps } from '../../navigation/AuthNavigator/AuthParamList';
// import { AuthContext } from '../../navigation/AuthNavigator/AuthProvider';
import { BorderlessButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

// const windowWidth = Dimensions.get('window').width;

export function AccountTypeScreen({ navigation }: AuthNavProps<'AccountTypeScreen'>) {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>What describe you best?</Text>
        <Text style={styles.mainTitle}>are you ..</Text>
        <View style={styles.types}>
          <BorderlessButton
            style={styles.influencerButton}
            onPress={() =>
              navigation.navigate('RegisterScreen', {
                isInfluencer: true,
              })
            }
          >
            <Image source={require('../../img/logo/appLogo.png')} style={styles.influencerIcon} />

            <Text style={styles.accountTypeText}>An Influencer</Text>
          </BorderlessButton>

          <View style={styles.typesLine} />

          <BorderlessButton
            style={styles.businessButton}
            onPress={() =>
              navigation.navigate('RegisterScreen', {
                isInfluencer: false,
              })
            }
          >
            <Image source={require('../../img/ui/kiosk.png')} style={styles.businessIcon} />

            <Text style={styles.accountTypeText}>A Business Owner</Text>
          </BorderlessButton>
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>*This would help us tailor your experience!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white03,
  },
  welcomeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 60,
    padding: 20,
  },
  welcomeText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 120,
    fontFamily: 'Galvji',
    color: colors.black01,
  },
  mainTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: colors.black01,
    fontWeight: '600',
    marginBottom: 60,
    left: 20,
    fontFamily: 'Galvji',
  },
  types: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  influencerButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  influencerIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  typesLine: {
    height: '100%',
    width: 1,
    marginHorizontal: 22,
    backgroundColor: colors.gray01,
  },
  businessButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  businessIcon: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  accountTypeText: {
    fontSize: 14,
    color: colors.black01,
    fontWeight: '300',
    fontFamily: 'Galvji',
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  infoText: {
    fontSize: 12,
    color: colors.black01,
    fontWeight: '100',
    fontFamily: 'Galvji',
  },
});
