import { createBrowserRouter } from 'react-router-dom'
import React from 'react';
import App from '../App'
import Page1 from '../Page1'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
    },
    {
      path: '/Page1',
      element: <Page1/>,
    },
    
  ])
  export default router