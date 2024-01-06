import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignUp from './src/Screens/SignUp';
import UserLogins from './src/Navigation/UserLogins';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#97AE26" barStyle="dark-content" />
      {/* <SignUp /> */}
      <UserLogins />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});