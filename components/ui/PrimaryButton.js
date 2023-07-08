import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from '../../constants/Colors';

function PrimaryButton ({children,onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer , styles.pressed] : styles.buttonInnerContainer}
        android_ripple={{color: Colors.primary600}}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    alignItems:'center'
  },
  buttonText: {
    color: 'white'
  },
  pressed: {
    opacity: 0.75
  }
})