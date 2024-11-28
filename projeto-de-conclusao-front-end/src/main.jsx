import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './routes/routerConfig'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="208854895130-2s9h5jh4veo2c5d7rp92a3mhsgbmkpuu.apps.googleusercontent.com">
            <RouterProvider router={routerConfig} />
        </GoogleOAuthProvider>
    </StrictMode>,
)
