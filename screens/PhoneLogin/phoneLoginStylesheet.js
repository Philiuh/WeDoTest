import { StyleSheet } from 'react-native';

const styles = (phoneValue) => StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#111313',
    },
    logoImg: {
      height: 20,
      width: 71,
      marginLeft: 16,
      marginTop: 27,
    },
    message: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Poppins',
      alignSelf: 'center',
      marginTop: 12,
    },
    form: {
      marginTop: 74,
      marginHorizontal: 18
    },
    inputName: {
      color: '#A1A1A1',
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Poppins',
      marginTop: 11,
      marginLeft: 9,
      marginBottom: 5
    },
    input: {
      backgroundColor: '#D9D9D9',
      height: 42,
      borderRadius: 12,
      paddingHorizontal: 9,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Poppins',
    },
    inputInfo: {
      backgroundColor: '#D9D9D9',
      height: 72,
      borderRadius: 12,
      paddingHorizontal: 9,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Poppins',
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    sendButton: {
      backgroundColor: (phoneValue && phoneValue.slice(0, 1) === '+' && phoneValue.slice(1)) 
        ? 'rgba(255, 255, 255, 1)' 
        : 'rgba(255, 255, 255, 0.4)',
      marginHorizontal: 18,
      marginBottom: 23,
      height: 60,
      borderRadius: 12,
      justifyContent: 'center',
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Poppins',
      alignSelf: 'center'
    }
  });

export default styles;