import axios, { Axios } from "axios";

// export const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return {
//     type: "FETCH_POSTS",
//     payload: response.data,
//   };
// };

// export const fetchPosts = () => {
//   const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: promise,
//   };
// };

//let's use thunk to allow to fetch the data asynchronously then call dispatch function.
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    //here we are returning function instead of action object
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
