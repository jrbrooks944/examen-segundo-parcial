import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppMostrar from './pages/mostrar-blog.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
  <AppMostrar />
</StrictMode>,
)
