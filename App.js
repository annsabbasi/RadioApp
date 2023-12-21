import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignUp from './src/Screens/SignUp';
import SignIn from './src/Screens/SignIn';
import FPassword from './src/Screens/F-Password';
import Test from './src/Screens/Test';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Splash /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <FPassword /> */}
      {/* <Home /> */}
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
