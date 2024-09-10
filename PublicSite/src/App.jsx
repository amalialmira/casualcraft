import './App.css'
import Details from './pages/Details'
import Home from './pages/Home'
import MainLayout from './pages/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:id',
        element: <Details />
      },
    ]
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
