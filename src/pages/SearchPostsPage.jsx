import React, { useEffect, useState, useRef } from 'react';
import { createHashRouter, Link, useSearchParams } from 'react-router-dom';

import ErrorIndicator from 'components/ErrorIndicator';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

import { fetchPostDetails } from 'services/api';

import css from '../App.module.scss';
import { SearchBar } from 'components/SearchBar/SearchBar';

function SearchPostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedPost, setSearchedPost] = useState([]); // Array<...>
  const [isLoading, setIsLoading] = useState(false); // boolean
  const [error, setError] = useState(null); // null | string 
  const location = useLocation();

  const searchTerm = searchParams.get('query');

  const onSubmit = term => {
    setSearchParams({query:term});
  };

  useEffect(() => {
    const fetchPostsBySearchTerm = async (searchTerm) => {
      try {
        setIsLoading(true);
        const post = await fetchPostDetails(searchTerm);
        setSearchedPost([post]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm === null) return;

    fetchPostsBySearchTerm(searchTerm);
  }, [searchTerm]);
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <div className={css.mainWrapper}>
        <div className={css.list}>
          <h2>Searched Posts:</h2>
          {isLoading && <Loader />}
          {error?.length > 0 && <ErrorIndicator error={error} />}
          {Array.isArray(searchedPost) &&
            searchedPost.map(post => {
              return (
                <Link
                  key={post.id}
                  className={css.postItem}
                  to={`/posts/${post.id}`}
                  state={{from:location}}
                >
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchPostsPage;
