import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: 50,
    paddingBottom: 5,
  },
  tab: {
    color: '#ffffff',
    fontSize: 20,
    padding: 10,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.tab}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;