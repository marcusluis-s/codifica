import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './routes/routerConfig'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <RouterProvider router={routerConfig} />
        </GoogleOAuthProvider>
    </StrictMode>,
)
