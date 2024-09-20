import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Product from "./page/Product.jsx";
import Buy from "./page/Buy.jsx";
import Use from "./page/Use.jsx";
import Contact from "./page/Contact.jsx";
import Step1 from "./component/UseComponent/Step1.jsx";
import Step2 from "./component/UseComponent/Step2.jsx";
import Step3 from "./component/UseComponent/Step3.jsx";
import Step4 from "./component/UseComponent/Step4.jsx";
import Step5 from "./component/UseComponent/Step5.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/use",
    element: <Use />,
    children: [
      {
        path: "step1",
        element: <Step1 />,
      },
      {
        path: "step2",
        element: <Step2 />,
      },
      {
        path: "step3",
        element: <Step3 />,
      },
      {
        path: "step4",
        element: <Step4 />,
      },
      {
        path: "step5",
        element: <Step5 />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
