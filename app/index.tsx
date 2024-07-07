import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home/Home';
import configureStore from "./redux/configureStore"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

import './styles/tailwind.css';

const App = () => {
  return (
    <Provider store={configureStore}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));