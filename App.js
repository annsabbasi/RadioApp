import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignUp from './src/Screens/SignUp';
import SignIn from './src/Screens/SignIn';
import FPassword from './src/Screens/F-Password';
import Test from './src/Screens/Test';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import DjProfile from './src/Screens/DjProfile';
import Archives from './src/Screens/Archives';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Splash /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <FPassword /> */}
      {/* <Home /> */}
      {/* <DjProfile /> */}
      <Archives />
      {/* <Test /> */}
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
