import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'

import {RouterProvider} from 'react-router-dom'
import {routes} from './routes/index'



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
