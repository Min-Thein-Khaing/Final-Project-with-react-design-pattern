import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import './styles/app.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
