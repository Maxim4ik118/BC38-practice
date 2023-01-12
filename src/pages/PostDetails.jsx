import ErrorIndicator from 'components/ErrorIndicator';
import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';

import { fetchPostDetails } from 'services/api';
// import PostComments from './PostComments';
const PostComments = lazy(() => import('./PostComments'));

// import PostComments from './PostComments';

function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { postId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!postId) return;

    const getPostDetails = async postId => {
      try {
        setIsLoading(true);
        const postDetails = await fetchPostDetails(postId);

        setPostDetails(postDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPostDetails(postId);
  }, [postId]);

  return (
    <div>
      <h1>PostDetails</h1>
      <Link to={location?.state?.from || '/'}>Go back</Link>

      {isLoading && <Loader />}
      {error && <ErrorIndicator error={error} />}
      {postDetails !== null && (
        <div>
          <p>
            <b>userId</b>: {postDetails.userId}
          </p>
          <p>
            <b>id</b>: {postDetails.id}
          </p>
          <p>
            <b>title</b>: {postDetails.title}
          </p>
          <p>
            <b>body</b>: {postDetails.body}
          </p>
        </div>
      )}

      <Link to="comments" state={{from:location?.state?.from}}>Comments</Link>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostComments />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default PostDetails;
