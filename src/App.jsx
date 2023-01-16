import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Layout from 'Layout/Layout';
import Products from 'pages/Products';
import { Cart } from 'pages/Cart';

const HomePage = lazy(() => import('pages/HomePage'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));
const PageNotFound404 = lazy(() => import('pages/PageNotFound404'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const SearchPostsPage = lazy(() => import('pages/SearchPostsPage'));

// import HomePage from 'pages/HomePage';
// import DetailsPage from 'pages/DetailsPage';
// import PageNotFound404 from 'pages/PageNotFound404';
// import PostDetails from 'pages/PostDetails';
// import SearchPostsPage from 'pages/SearchPostsPage';

// import Layout from 'Layout/Layout';



export const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<SearchPostsPage />} />
          <Route path="/posts/:postId/*" element={<PostDetails />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
