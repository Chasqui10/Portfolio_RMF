import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe.jsx'
import Resume from './Resume.jsx'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter({
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  routes: [
    { 
      index: true,
      element: <Home /> 
    },
    { 
      path: 'about', 
      element: <AboutMe /> 
    },
    { 
      path: 'contact', 
      element: <ContactMe /> 
    },
    { 
      path: 'resume', 
      element: <Resume /> 
    },
  ],
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
