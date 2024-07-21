import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import useAuthStorage from '../hooks/useAuthStorage'
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

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
  const navigate = useNavigate();
  const { data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  });  
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/signin', { replace: true })
  };

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
        {(data && data.me) === null
          ? null
          : (
            <Link to="/review" underlayColor={theme.colors.textWhite} style={styles.tab}>
              <Text
                fontSize="subheading"
                fontWeight="bold"
                style={styles.tab}
              >
                Create a review
              </Text>
            </Link>
          )
        }
        {data && data.me ? (
          <Pressable onPress={signOut} style={styles.tab}>
            <Text
              fontSize="subheading"
              fontWeight="bold"
              style={styles.tab}
            >
              Sign out
            </Text>
          </Pressable>
        ) : (
          <Link to="/signin" underlayColor={theme.colors.textWhite} style={styles.tab}>
            <Text
              fontSize="subheading"
              fontWeight="bold"
              style={styles.tab}
            >
              Sign in
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;