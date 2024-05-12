import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import {Dashboard, MainLayout, Orders, Service, SignIn, Category} from "@pages";
  import Error from '../components/error/error'
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
           <Route path="*" element={<Error />} />
          <Route index element={<SignIn />} />
          {/* <Route path="/signin" element={<SignIn/>} /> */}
          <Route path="/main/*" element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="service" element={<Service />} />
          <Route path="orders" element={<Orders />} />
          <Route path="category" element={<Category />} />
         
          </Route>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
  