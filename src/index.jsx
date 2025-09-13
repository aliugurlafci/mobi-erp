import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './modules/app.jsx';


const LoadInitialData = async () => {
    setTimeout(() => {
        return true;
    }, 5000);
}

const router = createBrowserRouter([
    {
      path: "/*",
      element: <App />,
      loader: LoadInitialData,
      children: [
        {index: true, element: <div>Dashboard 1</div>},
        {index: 'dash', element: <div>Dashboard 2</div>}
      ]    
    },
  ]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
