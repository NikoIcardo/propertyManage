import React from 'react';
import ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

import './styles/tailwind.css';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));