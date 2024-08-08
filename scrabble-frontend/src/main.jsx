import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '/home/ryan-mwendwa/scrabble-frontend/scrabble-frontend/src/App/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
