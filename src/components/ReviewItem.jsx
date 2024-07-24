import { View, StyleSheet, Dimensions } from 'react-native';
import Text from './Text';
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

const fixDate = (wrongFormat) => {
  const date = new Date(wrongFormat);
  
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

const ReviewItem = ({ review }) => {
  console.log(review.createdAt)
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{review.rating}</Text>
      <View style={styles.content}>
        <Text style={styles.name}>{review.repository.fullName}</Text>
        <Text style={styles.date}>{fixDate(review.createdAt)}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>  
  );
};

export default ReviewItem;