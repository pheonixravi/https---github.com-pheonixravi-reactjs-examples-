// const initialState = {
//     items:[],
//     isLoading:false,
//     error:null,
// };
const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// const postReducer = (state = initialState, action) => {

// }
export default postReducer;
