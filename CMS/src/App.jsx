import './App.css'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Register from './pages/Register'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import Categories from './pages/Categories'
import AddEditProduct from './pages/AddEditProduct'
import NotFound from './pages/NotFound'
import UploadImage from './pages/UploadImage'


const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    loader: () => {
      if(!localStorage.getItem('access_token')) {
        return redirect('/login')
      }
      return null;
    },
    children: [
      {
        path: '/add-user',
        element: <Register />
      },
      {
        path: '/',
        element: <UserHome/>
      },
      {
        path: '/add-product',
        element: <AddEditProduct/>
      },
      {
        path: '/edit-product/:id',
        element: <AddEditProduct/>
      },
      {
        path: '/categories',
        element: <Categories/>
      },
      {
        path: '/edit-image/:id',
        element: <UploadImage/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    loader: () => {
      if(localStorage.getItem('access_token')) {
        return redirect('/')
      }
      return null;
    }
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
