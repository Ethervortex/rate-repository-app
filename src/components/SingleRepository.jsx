import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import Text from './Text';
import useRepo from '../hooks/useRepo';
import { useParams } from 'react-router-native';
import theme from '../theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingLeft: 15,
  },
  separator: {
    height: 10
  },
  score: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    height: 50,
    width: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    textAlign: "center",
    lineHeight: 50,
  },
  name: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  date:{
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  reviewText: {
    color: theme.colors.textPrimary,
    lineHeight: 20,
    flexWrap: 'wrap',
    maxWidth: width - 85,
  }
});
  
const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepo(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  if (!repository) return <Text>No repository found</Text>;

  const ItemSeparator = () => <View style={styles.separator} />;
  
  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};
  
export default SingleRepository;