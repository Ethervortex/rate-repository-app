import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOS = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`;

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const ONE_REPO = gql`
  query Repository($id: ID!) {
    repository(id: $id ) {
      id
      fullName
      description
      language
      ownerAvatarUrl
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;