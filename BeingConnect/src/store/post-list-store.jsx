import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, defaultPostList] = useReducer(
    postListReducer,
    DEFAULT_VALUES
  );

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_VALUES = [
  {
    id: "1",
    title: "nigga one nigga two",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta eius quos, accusamus impedit veritatis.",
    reactions: 2,
    tags: ["nalasopara", "vasai", "virar", "naigaon"],
    userId: "user-69",
  },
  {
    id: "2",
    title: "Ichino kata",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta eius quos, accusamus impedit veritatis.",
    reactions: 2,
    tags: ["nalasopara", "vasai", "virar", "naigaon"],
    userId: "user-70",
  },
];

export default PostListProvider;
