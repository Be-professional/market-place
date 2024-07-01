import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Products from "../Products/Products";
import Dashboard from "../Dashboard/Dashboard";
import ProductDetails from "../ProductDetails/ProductDetails";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/product',
                element:<Products/>,
                loader: ()=>fetch('https://dummyjson.com/products')
            },
            {
                path:'/product/:id',
                element:<ProductDetails/>,
                loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    },
])

export default Router;