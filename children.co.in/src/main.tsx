import { createRoot } from 'react-dom/client'
import './main.css'
import './lib/fonts.css'
import App from './App'

const root = createRoot(document.getElementById('app')!)
root.render(<App />)
