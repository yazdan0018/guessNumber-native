import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

function NumberContainer ({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    // fontWeight : 'bold',
    fontFamily:'open-sans-bold',
    fontSize : deviceWidth < 380 ? 28 : 36,
    color:Colors.accent500
  }
})