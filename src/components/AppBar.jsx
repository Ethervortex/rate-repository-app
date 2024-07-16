import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
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
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
      >
        <Link to="/" underlayColor={theme.colors.textWhite} style={styles.tab}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.tab}
          >
            Repositories
          </Text>
        </Link>
        <Link to="/signin" underlayColor={theme.colors.textWhite} style={styles.tab}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.tab}
          >
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;