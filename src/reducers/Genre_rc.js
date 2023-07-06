const initialState = {
  genre: "", // 初期値は空の文字列
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// const genreReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'SET_GENRE':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default genreReducer;
