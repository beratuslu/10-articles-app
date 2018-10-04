import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleList from './components/articleList';
import Header from './components/header';
import SearchArticle from './components/searchArticle';
import actions from './actions/';
import './App.css';

class App extends React.Component {
  render() {
    return <div className="hero">
            <div className="container">
              <Header />
              <SearchArticle
                searchArticle={this.props.searchArticle}
              />
              <ArticleList
                articles={this.props.articles}
                loading={this.props.loading}
                toggleDetail={this.props.toggleDetail}
              />

            </div>
          </div>
  }
  componentDidMount(){
    this.props.searchArticle("capgemini");
  }
}


// export const App = ({
//   searchArticle,
//   toggleDetail,
//   articles,
//   loading,
// }) => (
//   <div className="hero">
//     <div className="container">
//       <Header />
//       <SearchArticle
//         searchArticle={searchArticle}
//       />
//       <ArticleList
//         articles={articles}
//         loading={loading}
//         toggleDetail={toggleDetail}
//         searchArticle={searchArticle}
//       />

//     </div>
//   </div>
// );

App.propTypes = {
  searchArticle: PropTypes.func.isRequired,
  toggleDetail: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
});

const mapDispatchToProps = dispatch => ({
  searchArticle: (keyword) => {
    if (keyword) {
      dispatch(actions.searchArticle(keyword));
    }
  },
  toggleDetail: (id) => {
    dispatch(actions.toggleDetail(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
