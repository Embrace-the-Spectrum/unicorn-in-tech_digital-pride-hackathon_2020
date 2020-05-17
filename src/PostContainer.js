import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { Post } from "./Post";
import { AddPost } from "./AddPost";
import { GET_POSTS } from "./Query";

const PostContainer = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: "cache-and-network"
  });

  return (
    <>
      {" "}
      <AddPost refetch={refetch} />
      <Post error={error} loading={loading} data={data} />
    </>
  );
};

export default PostContainer;