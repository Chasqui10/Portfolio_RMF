import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

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
