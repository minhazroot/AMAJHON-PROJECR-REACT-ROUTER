
import { createBrowserRouter } from 'react-router-dom';
import Main from '../component/Main-layout/Main';
import Products from '../component/Products/Products';
import Dashboard from '../component/Dashboard/Dashboard';
import Produc from '../component/Produc/Produc';
import Contact from '../component/Contact/Contact';

const myLLCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/Products",
                loader: () => fetch(`https://dummyjson.com/products`),
                element: <Products></Products>,

            },
            {
                path: "/Product/:ProductId",
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.ProductId}`),
                element: <Produc></Produc>,


            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/Dashboard",
                        element: <Dashboard></Dashboard>,
                    }, {
                        path: "/Dashboard/Contact",
                        element: <Contact></Contact>
                    }
                ]


            }

        ]
    }
])

export default myLLCreatedRouter;