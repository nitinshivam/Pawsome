import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  SingleProduct,
} from "./pages";
import AppointmentFormPage from "./pages/AppointmentFormPage";
import { ErrorElement } from "./components";

// loaders
// import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
// import { loader as productsLoader } from "./pages/Products";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";
import ProductsGrid from "./components/ProductsGrid";
import AppointmentPage from "./pages/AppointmentPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        // loader: landingLoader(queryClient),
      },
      {
        path: "products",
        element: <ProductsGrid />,
        errorElement: <ErrorElement />,
        // loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "appointments",
        element: <AppointmentPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "book-appointment",
        element: <AppointmentFormPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
