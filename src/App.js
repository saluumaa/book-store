import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Books from './components/Books';
// import Home from './components/Home';
import Categories from './components/Categories';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Route>,

  ),
);
function App() {
  return (
    <RouterProvider router={router} />
    // <div>
    //   <Books />
    //   <Categories />
    // </div>
  );
}

export default App;
