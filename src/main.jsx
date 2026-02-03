import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bloglist from './Bloglist.jsx'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
    <Bloglist />
  </StrictMode>,
)


