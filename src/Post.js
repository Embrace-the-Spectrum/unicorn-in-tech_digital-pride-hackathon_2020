import React from "react";

const Post = ({ loading, error, data }) => {
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.fetchPosts.map(post => (
        <ul>
            <li>{post.content.title}</li>
            <li>{post.content.body}</li>
        </ul>
      ))}
    </ul>
  );
};

export { Post };