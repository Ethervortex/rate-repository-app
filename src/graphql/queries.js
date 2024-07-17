import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOS = gql`
  query Repositories {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`;