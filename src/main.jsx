import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/mainLayout/MainLayout';
import Home from './Pages/homepages/Home';
import BookPage from './Pages/homepages/Bookpages/BookPage';
import ErrorPage from './Pages/errorPage/ErrorPage';
import BookDetails from './Pages/bookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children : [
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/books",
        element:<BookPage></BookPage>
      },
      {
        path:"/bookDetails/:bookId",
        element : <BookDetails></BookDetails>,
        loader:()=>fetch(`/jsonData.json`) 
      }
    ],errorElement:<ErrorPage></ErrorPage>
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
