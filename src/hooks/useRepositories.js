import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepositories = (selectedSort, searchKeyword) => {
  let orderBy, orderDirection;

  switch (selectedSort) {
    case 'ratingHigh':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      break;
    case 'ratingLow':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      break;
    case 'latest':
    default:
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
  }
  const { data, loading, error, refetch } = useQuery(GET_REPOS, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, loading, error, refetch };
};

export default useRepositories;
