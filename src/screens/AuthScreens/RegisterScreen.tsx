import React, { useContext, useState } from 'react';
import {
  Dimensions, KeyboardAvoidingView,
  StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View
} from 'react-native';

import { useMutation } from '@apollo/client';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RoundedButton } from '../../components/buttons/RoundedButton';
import { InputField } from '../../components/Form';
import { REGISTER_USER } from '../../gqloperations/mutation';
import { EmailIcon, PasswordIcon, ShowOnIcon } from '../../img/Icons';
import { AuthContext } from '../../navigation';
import { AuthNavProps } from '../../navigation/AuthNavigator/AuthParamList';
import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;

export function RegisterScreen({ navigation, route }: AuthNavProps<'RegisterScreen'>) {
  // console.log(route.params.isInfluencer);
  const { login } = useContext(AuthContext);

  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  
  const [user, setUser] = useState<User>(null);


  const [registerUser, { error, loading, data }] = useMutation(REGISTER_USER,{
    onCompleted:(data)=>{
      console.log("register in success full................")
      // setUser(data.login.user)
      // AsyncStorage.setItem('user', JSON.stringify(data.login.user))
      alert("register successfull, please login.");
    
    },
    onError:(err)=>{
      console.warn("Something went wrong.",err.message)
    },
  })


  if (loading) {
    console.log("logging user..................")
  }


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
              value = {firstName}
              onChangeText  = {setFirstName}
              selectionColor={colors.blue04}
              placeholderTextColor={colors.gray02}
            />
          </View>
          <View style={styles.lastNameInputWrapper}>
            <InputField
              keyboardType={'default'}
              placeholder={'Last Name'}
              autoCapitalize={'none'}
              value = {lastName}
              onChangeText  = {setLastName}
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
              value = {emailAddress}
              onChangeText  = {setEmailAddress}
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
              value = {phone}
              onChangeText  = {setPhone}
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
              value = {password}
              onChangeText  = {setPassword}
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
            onPress={() => {

              if(firstName.length>2 && emailAddress.length>5 && password.length>4){
                registerUser({
                  variables:{
                    input:{
                      "username": emailAddress,
                      "email": emailAddress,
                      "password": password
                    }
                  }
                })
              }

            }}
            style={{
              marginTop: 10,
              width: windowWidth / 1.2,
              height: windowWidth / 6.8,
            }}
          />
        </View>

        <View style={styles.continueBtnWrapper} >
        
        <Text
        style = {{
          textAlign:"center",
          marginTop:-20
        
        }}
        onPress={()=>navigation.navigate('LoginScreen')}
        >Already registered! Login.</Text>

      
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
