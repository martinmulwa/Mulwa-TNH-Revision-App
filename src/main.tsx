/**
 * Mulwa Clinical Exam Portal
 * Application Client Entry Point
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
