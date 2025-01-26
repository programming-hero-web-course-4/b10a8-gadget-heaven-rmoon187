import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import routes from './routes/Routs';
import Provider from './provider/Provider';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
