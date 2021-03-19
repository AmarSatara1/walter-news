const news = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOP_NEWS':
      return action.array

    // case 'GET_SINGLE_ITEM':
    //   return state.filter(news => news.id !== action.id);

    case 'GET_SINGLE_ITEM':
      return state[action.id];
  
    default:
      return state;
  }
}

export default news;