import React from "react";

import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "./Query";

const AddPost = ({ refetch }) => {
  let input;
  let completed;
  const [addPost, { data }] = useMutation(ADD_POST);
  console.log(data);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({
            variables: {
              input: {
                name: input.value,
                completed: completed.checked
              }
            }
          });
          input.value = "";
          completed.checked = false;
          refetch();
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <input
          type="checkbox"
          ref={node => {
            completed = node;
          }}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export { AddPost };