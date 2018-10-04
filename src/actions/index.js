import types from '../constants/';
import axios from 'axios';

const actions = {

  searchArticle(keyword){
    return (dispatch) => {
      dispatch({
        type: types.ARTICLES_LOADING,
        loading: true
      });
      axios.get(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=7cce6fdf84be47c38cecf17bdcf1bd85`)
      .then(function (response) {
        // handle success
        const articles = response.data.response.docs;
        dispatch(
          {
            type: types.REPLACE_ARTICLES,
            articles
          }
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  },

  toggleDetail(id) {
    return {
      type: types.TOGGLE_DETAIL,
      id,
    };
  }
};

export default actions;
