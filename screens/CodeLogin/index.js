import React, { useState, useRef, useEffect } from "react";
import styles from './CodeLoginStylesheet';
import { View, Text, SafeAreaView, Image, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import store from "../../store";
import { signIn, signUp } from '../../store/actionCreators'

const CodeLogin = ({ navigation, route}) => {
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();
  const refInput5 = useRef();
  const refInput6 = useRef();
  const isFirstRun = useRef(true);
  const { phoneExist, nameValue, bioValue } = route.params


  const [token, setToken] = useState("");
  const [code, setCode] = useState("")

  const onPressButton = () => {
    if (phoneExist) {
      store.dispatch(signIn(code, setToken))
    } else {
      store.dispatch(signUp(code, setToken, nameValue, bioValue))
    }
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    navigation.push('ShowToken', {
      token: token,
      }) 
  }, [token]);

  return(
  <SafeAreaView style={styles().appContainer}>
    <Image 
      style={styles().logoImg} 
      source={require('../../images/LOGO.png')}/>
    <Text style={styles().message}>Введите СМС</Text>
    <View style={styles().codeContainer}>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChange={() => refInput2.current.focus()} onChangeText={newText => setCode(code + newText)}></TextInput>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChange={() => refInput3.current.focus()} onChangeText={newText => setCode(code + newText)} ref={refInput2}></TextInput>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChange={() => refInput4.current.focus()} onChangeText={newText => setCode(code + newText)} ref={refInput3}></TextInput>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChange={() => refInput5.current.focus()} onChangeText={newText => setCode(code + newText)} ref={refInput4}></TextInput>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChange={() => refInput6.current.focus()} onChangeText={newText => setCode(code + newText)} ref={refInput5}></TextInput>
      <TextInput style={styles().codeInput} maxLength={1} keyboardType={'phone-pad'} 
                 onChangeText={newText => setCode(code + newText)} ref={refInput6}></TextInput>
    </View>
    <KeyboardAvoidingView behavior="padding" style={styles().buttonContainer}>
    <Pressable style={styles().sendButton} onPress={onPressButton} disabled={false}>
      <Text style={styles().buttonText}>Отправить</Text>
    </Pressable>
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
};

export default CodeLogin;