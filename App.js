import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieAnimationFile from './test.json';
import { Skottie } from 'react-native-skottie';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Skottie
      style={{
        width: 400,
        height: 400,
      }}
      source={LottieAnimationFile}
      autoPlay={true}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
