import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
  },
  tab: {
    color: '#ffffff',
    paddingTop: 50,
    padding: 10,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          style={styles.tab}
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;