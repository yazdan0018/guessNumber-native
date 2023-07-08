import { StyleSheet, View ,Dimensions} from 'react-native';
import Colors from "../../constants/Colors";

function Card({children}){
  return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
})