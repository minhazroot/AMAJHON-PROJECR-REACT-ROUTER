
import { createBrowserRouter } from 'react-router-dom';
import Main from '../component/Main-layout/Main';
import Products from '../component/Products/Products';
import Dashboard from '../component/Dashboard/Dashboard';

const myLLCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/Products",
                element: <Products></Products>,

            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>

            }

        ]
    }
])

export default myLLCreatedRouter;