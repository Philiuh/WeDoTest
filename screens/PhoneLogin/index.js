import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import store from '../../store';
import { updatePhone } from '../../store/actionCreators';
import styles from './phoneLoginStylesheet';

const PhoneLogin = ({ navigation }) => {
  const [phoneValue, setPhoneValue] = useState('+');
  const [phoneExist, setPhoneExist] = useState();
  const [nameValue, setNameValue] = useState('');
  const [bioValue, setbioValue] = useState('');

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    store.dispatch(updatePhone(phoneValue, setPhoneExist));
  }, [phoneValue]);

  const buttonOnClick = () => {
    if (!phoneExist && nameValue.length === 0) {
      alert('Введите имя');
      return
    }
    navigation.push('CodeLogin', {
        phoneExist: phoneExist,
        nameValue: nameValue,
        bioValue: bioValue
    });
  };

  return (
    <SafeAreaView style={styles().appContainer}>
        <Image 
          style={styles().logoImg} 
          source={require('../../images/LOGO.png')}/>
        <Text style={styles().message}>Вход</Text>
        <View style={styles().form}>
          <Text style={styles().inputName}>Телефон</Text>
          <TextInput style={styles().input} defaultValue={phoneValue} keyboardType={'phone-pad'} onChangeText={newText => setPhoneValue(newText)}></TextInput>
          {!phoneExist && 
          <>
            <Text style={styles().inputName}>*Имя</Text>
            <TextInput style={styles().input} onChangeText={newText => setNameValue(newText)}></TextInput>
            <Text style={styles().inputName}>БИО (необязательно)</Text>
            <TextInput style={styles().inputInfo} onChangeText={newText => setbioValue(newText)}></TextInput> 
          </>}
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles().buttonContainer}>
        <Pressable style={styles(phoneValue).sendButton} onPress={buttonOnClick} disabled={false}>
          <Text style={styles().buttonText}>Отправить</Text>
        </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
  )
};

export default PhoneLogin;
