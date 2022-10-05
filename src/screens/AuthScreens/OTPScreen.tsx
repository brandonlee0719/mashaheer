import React, { useContext } from 'react';
import { Text, StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { AuthNavProps } from '../../navigation/AuthNavigator/AuthParamList';
import { AuthContext } from '../../navigation/AuthNavigator/AuthProvider';
import { RoundedButton } from '../../components/buttons/RoundedButton';
import { BorderlessButton } from 'react-native-gesture-handler';
import { InputField } from '../../components/Form/InputField';
import { LockIcon } from '../../img/Icons';
import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;

export function OTPScreen({ navigation }: AuthNavProps<'OTPScreen'>) {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText01}>Hey there!</Text>
        <Text style={styles.signInTitle}>Enter the 4 digits number</Text>
        <Text style={styles.signInSubTitle}>we have sent you ..</Text>
        <View style={styles.emailWrapper}>
          <View style={styles.emailIconWrapper}>
            <LockIcon color={colors.gray01} />
          </View>
          <View style={styles.inputFieldWrapper}>
            <InputField
              keyboardType={'numeric'}
              placeholder={'OTP Number'}
              // autoCapitalize={'none'}
              secureTextEntry
              // maxLength={4}
              selectionColor={colors.black01}
              placeholderTextColor={colors.gray02}
            />
          </View>
        </View>
        <BorderlessButton onPress={() => alert('Resend OTP Pressed')}>
          <View style={styles.resendOTPAgainWrapper}>
            <Text style={styles.resendOTPText01}>Didn't get the code?</Text>
            <Text style={styles.resendOTPText02}>Resend it again</Text>
          </View>
        </BorderlessButton>
        <View style={styles.continueBtnWrapper}>
          <RoundedButton
            label={'Continue'}
            // variant={'primary'}
            onPress={() => {
              login();
            }}
            style={{
              marginTop: 40,
              marginBottom: 200,
              width: windowWidth / 1.2,
              height: windowWidth / 6.8,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white03,
  },
  welcomeWrapper: {
    flex: 1,
    marginTop: 80,
    padding: 20,
    alignItems: 'flex-start',
  },
  welcomeText01: {
    fontSize: 22,
    color: colors.black01,
    fontWeight: '600',
    marginBottom: 120,
    fontFamily: 'Galvji',
  },
  signInTitle: {
    fontSize: 16,
    color: colors.black01,
    fontWeight: '300',
    marginBottom: 10,
    left: 20,
    fontFamily: 'Galvji',
  },
  signInSubTitle: {
    fontSize: 16,
    color: colors.black01,
    fontWeight: '300',
    marginBottom: 30,
    left: 20,
    fontFamily: 'Galvji',
  },
  emailWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
    marginBottom: 18,
    width: windowWidth / 1.2,
    height: windowWidth / 6,
    backgroundColor: colors.white01,
  },
  emailIconWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputFieldWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  resendOTPAgainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
  },
  continueBtnWrapper: {
    alignSelf: 'center',
  },
  createAccountTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  createAccountText01: {
    fontSize: 12,
    color: colors.black01,
    fontWeight: '100',
    marginRight: 4,
    fontFamily: 'Galvji',
    marginTop: 86,
  },
  createAccountText02: {
    fontSize: 12,
    color: colors.blue01,
    fontWeight: '500',
    fontFamily: 'Galvji',
    marginTop: 86,
  },
  resendOTPText01: {
    fontSize: 12,
    color: colors.black01,
    fontWeight: '100',
    marginRight: 4,
    fontFamily: 'Galvji',
  },
  resendOTPText02: {
    fontSize: 12,
    color: colors.blue01,
    fontWeight: '500',
    fontFamily: 'Galvji',
  },
});
