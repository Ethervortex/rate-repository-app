import { useQuery } from '@apollo/client';
import { ONE_REPO } from '../graphql/queries';

const useRepo = (id) => {
  const { data, error, loading } = useQuery(ONE_REPO, { 
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  console.log('Type of ID:', typeof id);
  console.log('ID:', id, 'Data:', data)

  if (error) {
    console.error("GraphQL query error:", error);
  }

  return { repository: data ? data.repository : undefined, loading, error };
};

export default useRepo;