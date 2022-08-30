import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './showTokenStylesheet';

const ShowToken = ({ route }) => {
  const { token } = route.params
  return (
    <SafeAreaView style={styles().appContainer}>
        <Text style={styles().tokenText}>Токен: </Text>
        <Text style={styles().tokenText}>{token}</Text>
    </SafeAreaView>
  )
};

export default ShowToken;
