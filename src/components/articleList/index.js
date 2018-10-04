import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ArticleList = ({ articles, loading, toggleDetail }) => {
  const articleItems = articles.map(article => {
    
    const rightClass = classNames('col-12 col-md-10 right', { middle: !article.showDetail });
    const detailClass = classNames('detail', { show: article.showDetail });

    return(  
      <div className="article" key={article._id}>
        <div className="row">
        <div 
          className="col-6 col-md-2 offset-3 offset-md-0 image text-center"
          onClick={() => toggleDetail(article._id)}
        >
          <img className="img-fluid rounded" srcSet={article.multimedia.length ? `http://www.nytimes.com/${article.multimedia[0].url} ` : 'images/no-image.png'} alt="" />
        </div>
        <div className={rightClass}>
          <p 
            className="title"
            onClick={() => toggleDetail(article._id)}
          >
            {article.headline.main}
          </p>
          <div className={detailClass}>
            <p>{article.snippet}</p>
            <a className="readMore float-right" target="_blank" rel="noopener noreferrer" href={article.web_url}>read more..</a>
          </div>
        </div>
      </div>
    </div>
    )
  });


  if (loading) {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <img className="mx-auto d-block spinner" src="images/spinner2-200px.svg" alt="" />
        </div>
      </div>
    )
  }
  if (!articles.length) {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <p>No Result...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {articleItems}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  toggleDetail: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ArticleList;
