import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routers from './router/Routers'
import { CookiesProvider } from "react-cookie";
import { DataContextProvider } from './context/ContextProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <>
  <DataContextProvider>
     <CookiesProvider>
     <Routers/>
   </CookiesProvider>

  </DataContextProvider>
   </>
  </StrictMode>,
)
