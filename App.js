import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from "./screens/GameOverScreen";

export default function App () {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function startNewGameHandler () {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
       onStartNewGame={startNewGameHandler}/>
  }

  function gameOverHandler (numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.accent500, Colors.primary800]} style={styles.rootScreen}>
      <ImageBackground
        source={require('../GuessNumber/assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
