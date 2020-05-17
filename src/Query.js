import { gql } from "apollo-boost";

export const ADD_POST = gql`
  mutation addPost($input: addPostInput) {
    addPost(input: $input) {
      id
      user
      role
      series
      content {
        title
        body
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($input: updatePostInput) {
    updatePost(input: $input) {
      id
      user
      series
      content {
        title
        content
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($input: fetchPostFilter) {
    fetchPosts(filter: $input) {
      id
      user
      role
      series
      content {
        title
        content
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    fetchPosts {
      id
      user
      role
      series
      content {
        title
        content
      }
    }
  }
`;