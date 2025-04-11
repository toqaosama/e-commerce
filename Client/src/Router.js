import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from "./Home/Home"
import NotFound from "./Shared/Error"
import ProductShow from "./Component/Product/ProductShow"
import ProductCards from "./Component/Product/ProductCrad"


export const router = createBrowserRouter([

    {
        path: "",
        element: <App />, // Parent
        children: [
          { path: "/", element: <Home />  },
]},
{
  path:"",
  element:<App />,
  children:[
    {path:"/ProductShow" , element: <ProductShow />},
  ]
},


{
  path: '*',
  element: <NotFound />
}

])