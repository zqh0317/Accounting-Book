//Create a route instance and bind the path to an element
import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import New from "@/pages/New";
import Year from "@/pages/Year";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                path: '/', 
                element: <Navigate to="/month" replace />
            },
            {
                path: 'month',
                element: <Month />
            },
            {
                path: 'year',
                element: <Year />
            }
        ]
    },
    {
        path: '/new',
        element: <New />
    }
])

export default router