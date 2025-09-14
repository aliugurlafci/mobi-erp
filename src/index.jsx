import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './modules/app.jsx';
import { UrunFiyat } from './modules/urunler/index.jsx';

const LoadInitialData = async () => {
  setTimeout(() => {
    return true;
  }, 5000);
}

const ErrorBoundary = ( ) => (
  <div>
    <h1>Something went wrong!</h1>
    <p>Please try again later.</p>
  </div>
);

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    loader: LoadInitialData,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, Component: UrunFiyat },
      { path: 'urun-fiyat', Component: UrunFiyat }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
