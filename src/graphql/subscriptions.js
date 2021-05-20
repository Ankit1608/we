/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUpvote = /* GraphQL */ `
  subscription OnCreateUpvote {
    onCreateUpvote {
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
export const onUpdateUpvote = /* GraphQL */ `
  subscription OnUpdateUpvote {
    onUpdateUpvote {
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
export const onDeleteUpvote = /* GraphQL */ `
  subscription OnDeleteUpvote {
    onDeleteUpvote {
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
export const onCreateDownvote = /* GraphQL */ `
  subscription OnCreateDownvote {
    onCreateDownvote {
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
export const onUpdateDownvote = /* GraphQL */ `
  subscription OnUpdateDownvote {
    onUpdateDownvote {
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
export const onDeleteDownvote = /* GraphQL */ `
  subscription OnDeleteDownvote {
    onDeleteDownvote {
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
