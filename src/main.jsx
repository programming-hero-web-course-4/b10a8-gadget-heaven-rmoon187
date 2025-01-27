import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import routes from './routes/Routs';
import Provider from './provider/Provider';
import { HelmetProvider } from 'react-helmet-async';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={routes} />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
