import types from '../constants/';

const initialState = {
  articles: [],
  loading:false,
};

export const articles = (state = initialState, action) => {
  switch (action.type) {

    case types.REPLACE_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        loading:false,
      };

    case types.ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
      };


    case types.TOGGLE_DETAIL:{
      return { 
        ...state, 
        articles: state.articles.map(
            (article, i) => article._id === action.id ? {...article, showDetail: !(article.showDetail || false)} : article
        )
      }
    }

    default:
      return state;
  }
};
