import { useMutation } from '@apollo/client';
import { USER_SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(USER_SIGN_IN);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const { data } = await mutate({
        variables: {
          credentials: {
            username,
            password
          }
        }
      });
      console.log('Mutation response data:', data.authenticate.accessToken);
    };
  
    return [signIn, result];
  };

  export default useSignIn;