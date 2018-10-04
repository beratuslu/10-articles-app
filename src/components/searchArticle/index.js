import React from 'react';
import PropTypes from 'prop-types';

const SearchArticle = ({ searchArticle }) => {
  let input;

  return (
    <div className="row">
      <form 
        className="col-12 mx-auto"
        onSubmit={(event) => {
          event.preventDefault();
          searchArticle(input.value);
        }}
      >
        <div className="input-group">
          <input
            className="form-control"
            ref={(element) => {
              input = element;
            }}
            placeholder="search for articles"
          />
          <span>
            <button id="btn" type="submit" className="btn btn-primary">Search</button>
          </span>
        </div>			     
      </form>
    </div>
  );
};

SearchArticle.propTypes = {
  searchArticle: PropTypes.func.isRequired,
};

export default SearchArticle;
