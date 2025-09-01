import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskProvider from './store/todo/TastProvider'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider />
  </StrictMode>,
)


