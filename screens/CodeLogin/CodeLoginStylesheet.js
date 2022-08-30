import { StyleSheet } from 'react-native';

const styles = () => StyleSheet.create({
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
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      sendButton: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
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
      },
      codeContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 85,
        justifyContent: 'center'
      },
      codeInput: {
        width: 50,
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Poppins',
        marginHorizontal: 3,
        paddingHorizontal: 20
    },
});

export default styles;