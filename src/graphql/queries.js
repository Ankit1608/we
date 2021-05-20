/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          userID
          username
          description
          address
          image
          longitude
          latitude
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      userID
      username
      description
      address
      image
      longitude
      latitude
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      upvotes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      downvotes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        username
        description
        address
        image
        longitude
        latitude
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        upvotes {
          items {
            id
            userID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        downvotes {
          items {
            id
            userID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
