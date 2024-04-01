import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import ProfilesPage from './ProfilesPage.jsx';
import Errorpage from './Errorpage.jsx';
import ProfilePage from './ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement:<div><h2>404 Not found</h2></div>
    errorElement:<Errorpage />
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
