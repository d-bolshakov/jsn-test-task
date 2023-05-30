import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SuperheroPage from "./pages/SuperheroPage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import EditSuperheroPage from "./pages/EditSuperheroPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/:page?",
    element: <MainPage />,
  },
  {
    path: "/superhero/:id",
    element: <SuperheroPage />,
  },
  {
    path: "/create",
    element: <CreateSuperheroPage />,
  },
  {
    path: "/superhero/:id/edit",
    element: <EditSuperheroPage />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
