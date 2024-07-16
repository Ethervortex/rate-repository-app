import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  tab: {
    color: '#ffffff',
    paddingTop: 50,
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/" underlayColor={theme.colors.textAppBar} style={styles.tab}>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          style={styles.tab}
        >
          Repositories
        </Text>
      </Link>
      <Link to="/signin" underlayColor={theme.colors.textAppBar} style={styles.tab}>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          style={styles.tab}
        >
          Sign In
        </Text>
      </Link>
    </View>
  );
};

export default AppBar;