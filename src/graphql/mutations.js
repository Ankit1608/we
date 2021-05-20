/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUpvote = /* GraphQL */ `
  mutation CreateUpvote(
    $input: CreateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    createUpvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUpvote = /* GraphQL */ `
  mutation UpdateUpvote(
    $input: UpdateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    updateUpvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUpvote = /* GraphQL */ `
  mutation DeleteUpvote(
    $input: DeleteUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    deleteUpvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDownvote = /* GraphQL */ `
  mutation CreateDownvote(
    $input: CreateDownvoteInput!
    $condition: ModelDownvoteConditionInput
  ) {
    createDownvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDownvote = /* GraphQL */ `
  mutation UpdateDownvote(
    $input: UpdateDownvoteInput!
    $condition: ModelDownvoteConditionInput
  ) {
    updateDownvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDownvote = /* GraphQL */ `
  mutation DeleteDownvote(
    $input: DeleteDownvoteInput!
    $condition: ModelDownvoteConditionInput
  ) {
    deleteDownvote(input: $input, condition: $condition) {
      id
      userID
      postID
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
      post {
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
          nextToken
        }
        downvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
