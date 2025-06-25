import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider, MockAuthProvider } from '@mtbs/shared-lib';

if (process.env.NODE_ENV === 'development' && process.env.MOCK_API === 'true') {
    console.log('🧪 Enabling MSW mocks');
}

const Provider = process.env.MOCK_AUTH === 'true' ? MockAuthProvider : AuthProvider;
console.log('🔁 Provier Used is:', Provider);

// 👉 Check if running standalone
const isStandalone = window.location.port === '3006'; // <-- app-booking port
console.log('👉 Running standalone:', isStandalone);

// Use BrowserRouter only if standalone
const Wrapper = ({ children }) => (
    isStandalone ? <BrowserRouter>{children}</BrowserRouter> : <>{children}</>
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Wrapper>
            <Provider>
                <App />
            </Provider>
        </Wrapper>
    </React.StrictMode>
);