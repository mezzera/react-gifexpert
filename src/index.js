import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa ReactDOM de esta manera
import './index.css';
import { GifExpertApp } from './components/GifExpertApp';


const root = createRoot(document.getElementById('root'));

root.render(<GifExpertApp />)