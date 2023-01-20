import ErrorIndicator from 'components/ErrorIndicator';
import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { requestPostDetails } from 'redux/postSlice';

const PostComments = lazy(() => import('./PostComments'));



function PostDetails() {
  const postDetails = useSelector(state => state.posts.postDetails);
  const isLoading = useSelector(state => state.posts.isLoading);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();


  const { postId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!postId) return;
    dispatch(requestPostDetails(postId));
  }, [postId, dispatch]);

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

      <Link to="comments" state={{ from: location?.state?.from }}>
        Comments
      </Link>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostComments />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default PostDetails;
