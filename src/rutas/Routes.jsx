import { Navigate, createBrowserRouter } from 'react-router-dom';
import {App }from '../App';
import { Productos } from '../public/pages/Productos';
import { Developers } from '../public/pages/Developers';
import { About } from '../public/pages/About';
import { Soluciones } from '../public/pages/Soluciones';
import { LoginPage } from '../auth/pages/LoginPage';
export const Routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[{
            path:'productos',
            element:<Productos/>
        },
        {
            path:'soluciones',
            element:<Soluciones/>
        },
        {
            path:'developers',
            element:<Developers/>
        },
        {
            path:'',
            element:<About/>
        },
        {
            path:'*',
            element:<Navigate to=''/>
        }
    
    ]
    },
    {
        path:'/login',
        element:<LoginPage/>
    }
])