import React, { useContext } from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { AuthNavProps } from '../../navigation/AuthNavigator/AuthParamList';
import { AuthContext } from '../../navigation';
import { RoundedButton } from '../../components/buttons/RoundedButton';
import { BorderlessButton } from 'react-native-gesture-handler';
import { InputField } from '../../components/Form';
import { EmailIcon, PasswordIcon, ShowOnIcon } from '../../img/Icons';
import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;

export function RegisterScreen({ navigation, route }: AuthNavProps<'RegisterScreen'>) {
  console.log(route.params.isInfluencer);
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView style={styles.welcomeWrapper} behavior={'padding'}>
        <Text style={styles.welcomeText}>New here?</Text>
        <Text style={styles.formTitle}>Create New Account</Text>

        <View style={styles.namesWrapper}>
          <View style={styles.firstNameInputWrapper}>
            <InputField
              keyboardType={'default'}
              placeholder={'First Name'}
              autoCapitalize={'none'}
              selectionColor={colors.blue04}
              placeholderTextColor={colors.gray02}
            />
          </View>
          <View style={styles.lastNameInputWrapper}>
            <InputField
              keyboardType={'default'}
              placeholder={'Last Name'}
              autoCapitalize={'none'}
              selectionColor={colors.blue04}
              placeholderTextColor={colors.gray02}
            />
          </View>
        </View>

        <View style={styles.emailWrapper}>
          <View style={styles.emailIconWrapper}>
            <EmailIcon color={colors.gray01} />
          </View>
          <View style={styles.inputFieldWrapper}>
            <InputField
              keyboardType={'email-address'}
              placeholder={'Email Address'}
              autoCapitalize={'none'}
              selectionColor={colors.blue04}
              placeholderTextColor={colors.gray02}
            />
          </View>
        </View>

        <View style={styles.emailWrapper}>
          {/* <View style={styles.emailIconWrapper}>
            <PhoneIcon color={colors.gray01} />
          </View> */}
          <View style={styles.inputFieldWrapper}>
            <InputField
              keyboardType={'numeric'}
              placeholder={'Mobile Number'}
              autoCapitalize={'none'}
              selectionColor={colors.blue04}
              placeholderTextColor={colors.gray02}
            />
          </View>
        </View>

        <View style={styles.passwordWrapper}>
          <View style={styles.passwordIconWrapper}>
            <PasswordIcon color={colors.gray01} />
          </View>
          <View style={styles.inputFieldWrapper}>
            <InputField
              keyboardType={'default'}
              placeholder={'Password'}
              secureTextEntry
              selectionColor={colors.black01}
              autoCapitalize={'none'}
              placeholderTextColor={colors.gray02}
            />
          </View>
          <View style={styles.showIconWrapper}>
            <TouchableWithoutFeedback onPress={() => alert('Pressed')}>
              <View>
                <ShowOnIcon color={colors.gray02} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.continueBtnWrapper}>
          <RoundedButton
            label={'Continue'}
            // variant={'primary'}
            onPress={() => login()}
            style={{
              marginTop: 40,
              marginBottom: 200,
              width: windowWidth / 1.2,
              height: windowWidth / 6.8,
            }}
          />
        </View>

        <BorderlessButton onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.createAccountTextWrapper}>
            <Text style={styles.createAccountText01}>Already have an account?</Text>
            <Text style={styles.createAccountText02}>Sign In</Text>
          </View>
        </BorderlessButton>
      </KeyboardAvoidingView>
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
    justifyContent: 'flex-start',
    marginTop: 60,
    padding: 20,
  },
  welcomeText: {
    fontSize: 26,
    color: colors.black01,
    fontWeight: '600',
    marginBottom: 60,
    fontFamily: 'Galvji',
  },
  formTitle: {
    fontSize: 16,
    color: colors.black01,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: 'Galvji',
  },
  namesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: 18,
    width: windowWidth / 1.2,
    height: windowWidth / 6,
  },
  firstNameInputWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: windowWidth / 2.5,
    height: windowWidth / 6,
    borderRadius: 12,
    // marginRight: 6,
    backgroundColor: colors.white01,
  },
  lastNameInputWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: windowWidth / 2.5,
    height: windowWidth / 6,
    borderRadius: 12,
    // marginLeft: 6,
    backgroundColor: colors.white01,
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
  passwordWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: windowWidth / 1.2,
    height: windowWidth / 6,
    borderRadius: 12,
    backgroundColor: colors.white01,
  },
  passwordIconWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  showIconWrapper: {
    alignSelf: 'center',
    marginRight: 18,
  },
  continueBtnWrapper: {
    alignSelf: 'center',
    marginBottom: 108,
  },
  createAccountTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: 20,
  },
  createAccountText01: {
    fontSize: 12,
    color: colors.black01,
    fontWeight: '100',
    marginRight: 4,
    fontFamily: 'Galvji',
  },
  createAccountText02: {
    fontSize: 12,
    color: colors.black01,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
});
