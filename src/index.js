import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import App from './App';

const basePath = process.env.PUBLIC_URL || '';

async function startApp() {
  // Asegura la barra final (/viajes-pfy2202/) para que el Service Worker de MSW tenga alcance
  if (basePath && window.location.pathname === basePath) {
    window.location.replace(`${basePath}/${window.location.search}${window.location.hash}`);
    return;
  }

  const { worker } = await import('./mocks/browser');
  await worker.start({
    serviceWorker: {
      url: `${basePath}/mockServiceWorker.js`
    },
    onUnhandledRequest: 'bypass'
  });

  const client = new ApolloClient({
    uri: `${basePath}/graphql`,
    cache: new InMemoryCache()
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}

startApp();