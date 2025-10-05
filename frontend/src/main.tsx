import { ThemeProvider } from '@/provider/theme-provider'
import router from '@/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>,
)
